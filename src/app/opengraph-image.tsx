import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f2ea",
          color: "#10233d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #b8863b",
            background: "rgba(156,107,46,0.1)",
            color: "#10233d",
            fontSize: 40,
            fontFamily: "serif",
            marginBottom: 32,
          }}
        >
          Y
        </div>
        <div style={{ display: "flex", fontSize: 56, fontFamily: "serif" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b6255", marginTop: 16 }}>
          Steady counsel, clearly communicated.
        </div>
      </div>
    ),
    { ...size }
  );
}
