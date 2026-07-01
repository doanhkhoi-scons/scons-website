import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "S.CONS | Vượt chuẩn chung, tạo dấu riêng",
  description:
    "S.CONS - Thiết kế, thi công xây dựng và sản xuất nội thất chuyên nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <AOSProvider>

          <Header />

          <main>{children}</main>

          

        </AOSProvider>
      </body>
    </html>
  );
}