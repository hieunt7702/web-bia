import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Đại Lý Phân Phối Bia Hơi Hà Nội Habeco Chính Hãng | Tuấn Ngọc",
  description: "Tổng đại lý phân phối bia hơi Hà Nội Habeco cấp 1 tại Hà Nội. Cung cấp bom, keg bia hơi chuẩn vị, chiết khấu cao. Hỗ trợ mở điểm bán từ A-Z.",
  keywords: ["Bia hơi Hà Nội", "Bia hơi Habeco", "Đại lý phân phối bia hơi", "Báo giá bia hơi Hà Nội", "Mở điểm bán bia hơi"],
  openGraph: {
    title: "Đại Lý Phân Phối Bia Hơi Hà Nội Habeco Chính Hãng",
    description: "Tổng đại lý phân phối bia hơi Hà Nội Habeco cấp 1. Cung cấp bom, keg bia hơi chuẩn vị, chiết khấu cao.",
    type: "website",
    locale: "vi_VN",
    siteName: "Đại lý Tuấn Ngọc"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "name": "Đại Lý Phân Phối Bia Hơi Hà Nội Tuấn Ngọc",
  "description": "Tổng đại lý phân phối bia hơi Hà Nội Habeco cấp 1. Cung cấp bom, keg bia hơi chuẩn vị, chiết khấu cao.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hà Nội",
    "addressCountry": "VN"
  },
  "telephone": "0969960001",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
