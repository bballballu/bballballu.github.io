import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "冯哲宇｜AI 产品经理作品集",
  description:
    "冯哲宇的 AI 产品经理与生成式体验设计作品集：AIGC 创作工具、AI Agent、用户增长、交互研究与产品实践。",
  keywords: ["AI 产品经理", "AIGC", "生成式体验设计", "Agent", "用户研究", "冯哲宇"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
