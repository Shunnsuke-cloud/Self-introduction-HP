import type { Metadata } from "next";
import "./globals.css";

const title = "占部 駿祐 | Shunsuke Urabe — Personal Website";
const description = "福岡でWebアプリケーション開発を学ぶ、2028年卒業予定の占部駿祐の個人ホームページ。開発への思い、趣味、サークルやインターンシップでの活動などを紹介しています。";

export const metadata: Metadata = {
  title, description,
  formatDetection: { email: false },
  openGraph: { title, description, type: "website", locale: "ja_JP", siteName: "Shunsuke Urabe" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
