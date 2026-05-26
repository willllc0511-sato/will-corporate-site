import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "合同会社Will｜鹿児島から、AIを\u201C使える形\u201Dでお届けします",
  description:
    "鹿児島拠点のAI導入支援。ChatGPT・Claude・Gemini・Microsoft Copilotなどを、地域の事業者さまの今のお仕事で使える形に整えます。まずは3分の無料診断から。",
  openGraph: {
    title: "合同会社Will｜鹿児島から、AIを\u201C使える形\u201Dでお届けします",
    description:
      "鹿児島拠点のAI導入支援。ChatGPT・Claude・Gemini・Microsoft Copilotなどを、地域の事業者さまの今のお仕事で使える形に整えます。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
