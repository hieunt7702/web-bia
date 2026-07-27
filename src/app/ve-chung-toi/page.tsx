import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';

import BrewingSection from '@/components/sections/BrewingSection';
import BeerPolicies from '@/components/sections/BeerPolicies';
import DealerSupport from '@/components/sections/DealerSupport';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | Đại Lý Tuấn Ngọc',
  description: 'Tìm hiểu về Đại lý bia hơi Hà Nội Tuấn Ngọc - Đối tác chiến lược của Habeco với hơn 20 năm kinh nghiệm phân phối bia hơi chính hãng.',
};

const STATS = [
  { num: "20+", label: "NĂM KINNH NGHIỆM" },
  { num: "50+", label: "ĐẠI LÝ TOÀN QUỐC" },
  { num: "100+", label: "NHÂN SỰ TẬN TÂM" },
  { num: "10 TRIỆU+", label: "LÍT BIA MỖI NĂM" },
];

export default function AboutPage() {
  return (
    <div className="w-full relative min-h-screen bg-[#0a0a0a] modern-section">
      <SectionStarryMotif />
      {/* Texture & Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(199,162,92,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#C7A25C]/5 blur-[150px]" />
      </div>

      <Header />

      <main className="pt-[180px] lg:pt-[220px] pb-0 relative z-10">
        {/* Unified About Block */}
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#D3AE3E]"></span>
                <span className="text-[#D3AE3E] text-[13px] font-bold tracking-[0.2em] uppercase">
                  TỔNG ĐẠI LÝ CẤP 1
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wider leading-tight drop-shadow-lg">
                VỀ CHÚNG TÔI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c7a25c] via-[#f1be6d] to-[#D3AE3E]">ĐẠI LÝ TUẤN NGỌC</span>
              </h1>
              <p className="text-[#aaa] text-base md:text-lg leading-relaxed mb-8 pr-0 lg:pr-8">
                Hơn 20 năm đồng hành cùng thương hiệu Bia Hơi Hà Nội, Tuấn Ngọc tự hào là tổng đại lý phân phối cấp 1 mang đến những sản phẩm bia hơi chuẩn vị, chất lượng nhất cùng dịch vụ hỗ trợ điểm bán tận tâm, chuyên nghiệp. Mỗi giọt bia hơi là sự cam kết về an toàn và trải nghiệm tuyệt vời nhất dành cho khách hàng.
              </p>
              
              {/* Checklist */}
              <div className="space-y-4">
                {[
                  "Kiểm soát chất lượng 6 bước",
                  "Không chất bảo quản",
                  "An toàn cho sức khỏe",
                  "Hương vị ổn định, đồng nhất"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e4c26a] flex-shrink-0" />
                    <span className="text-white/90 text-sm font-sans font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Banner Image */}
            <div className="lg:col-span-5 relative w-full max-w-lg mx-auto aspect-[4/3] lg:aspect-[4/3]">
              <div className="absolute inset-0 rounded-[4px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                <Image
                  src="/images/hero/banner2.png"
                  alt="Về chúng tôi Đại lý Tuấn Ngọc"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d8] via-[#e4c26a] to-[#b98a2d] mb-2">
                  {stat.num}
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-white/60 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <BrewingSection className="!bg-transparent !border-t-0" />
        <BeerPolicies className="!bg-transparent !border-t-0" />
        <DealerSupport className="!bg-transparent !border-t-0" />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
