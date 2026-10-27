import { ImageResponse } from "next/og";

export const alt = "Shunsuke Urabe — Personal Website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#0B0F19", color: "#fff", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 23, letterSpacing: 5, color: "#C4CEDD" }}>PERSONAL WEBSITE / FUKUOKA, JAPAN</div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 94, fontWeight: 800, letterSpacing: -5 }}>Shunsuke Urabe<span style={{ color: "#387BFF" }}>.</span></div><div style={{ color: "#5B96FF", fontSize: 31, marginTop: 20 }}>CURIOUS MIND. TEAM SPIRIT.</div></div><div style={{ display: "flex", fontSize: 22, color: "#C4CEDD" }}>WEB DEVELOPMENT · CLASS OF 2028</div></div>, size);
}
