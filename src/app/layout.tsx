import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog -  Este é um blog com Next.js",
  description: "Essa seria a descrição do meu blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
