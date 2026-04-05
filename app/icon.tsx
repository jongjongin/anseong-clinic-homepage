import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "transparent",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#8f1f18",
            border: "18px solid #d39a2c",
            borderRadius: "9999px",
            color: "#fff7ea",
            display: "flex",
            flexDirection: "column",
            height: 420,
            justifyContent: "center",
            width: 420,
          }}
        >
          <div
            style={{
              fontSize: 158,
              fontWeight: 800,
              letterSpacing: "-0.08em",
              lineHeight: 1,
            }}
          >
            365
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.18em",
              marginTop: 6,
            }}
          >
            CLINIC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
