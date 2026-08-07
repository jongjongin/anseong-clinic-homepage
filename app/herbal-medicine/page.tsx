import { permanentRedirect } from "next/navigation";

export default function LegacyHerbalMedicinePage() {
  permanentRedirect("/herb");
}
