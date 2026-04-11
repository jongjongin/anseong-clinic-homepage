import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "clinic_session";

const getAuthConfig = () => ({
  email: process.env.AUTH_EMAIL ?? "admin@anseong365.com",
  password: process.env.AUTH_PASSWORD ?? "anseong365!",
  secret: process.env.AUTH_SECRET ?? "anseong-clinic-secret",
});

const createSignature = (email: string, secret: string) =>
  createHmac("sha256", secret).update(email).digest("hex");

const createSessionValue = (email: string, secret: string) =>
  `${email}.${createSignature(email, secret)}`;

const verifySessionValue = (value: string, secret: string) => {
  const [email, signature] = value.split(".");

  if (!email || !signature) {
    return null;
  }

  const expectedSignature = createSignature(email, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length) {
    return null;
  }

  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return null;
  }

  return { email };
};

export const validateCredentials = async (email: string, password: string) => {
  const config = getAuthConfig();

  return email === config.email && password === config.password;
};

export const createSession = async (email: string) => {
  const cookieStore = await cookies();
  const { secret } = getAuthConfig();

  cookieStore.set(SESSION_COOKIE_NAME, createSessionValue(email, secret), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

export const clearSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionValue) {
    return null;
  }

  return verifySessionValue(sessionValue, getAuthConfig().secret);
};
