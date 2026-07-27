'use client';
import SectionStarryMotif from '../ui/SectionStarryMotif';
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function BeerCTA() {
  return (
    <section className="relative py-32 bg-[#F8F5F0] dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-gray-100 dark:border-white/10 flex items-center justify-center overflow-hidden border-y border-gray-200 dark:border-white/20">
      <SectionStarryMotif />
      {/* Blurred Interior Scenery & Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 dark:opacity-40 transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80)',
          filter: 'blur(12px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2] via-[#F8F6F2]/80 dark:from-[#0a0a0a] dark:via-[#1a1a1a]/70 to-transparent mix-blend-multiply dark:mix-blend-normal" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
        <ScrollReveal direction="up" delay={0.05}>
          <p className="text-[#D3AE3E] text-[13px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-4 inline-block px-4 py-1.5 border border-[#D3AE3E]/30 rounded-full bg-white/50 dark:bg-black/20 luxury-glow">
            Một hương vị – Vạn cảm xúc
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.2]">
            Bắt đầu với một ly bia <span className="text-[#D3AE3E]">chuẩn</span> ngay từ đầu
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-gray-600 dark:text-[#e2e2e2] text-[16px] md:text-[18px] mb-6 leading-relaxed">
            Một ly bia ngon không chỉ giúp bữa tiệc thêm phần thăng hoa, mà còn là chất xúc tác tuyệt vời cho những câu chuyện bất tận và những kỷ niệm đáng nhớ.
          </p>
          <p className="text-gray-500 dark:text-[#999] text-[15px] md:text-[17px] mb-12 leading-relaxed">
            Hãy liên hệ ngay với chúng tôi để được tư vấn những dòng bia tinh túy nhất cho nhu cầu thưởng thức của bạn.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#Order"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#D3AE3E] text-white uppercase tracking-wider text-[14px] font-bold hover:bg-[#b88c45] hover:text-white transition-colors duration-300 rounded-[2px] btn-glow-motion"
            >
              Đặt bia ngay
            </Link>
            <Link
              href="#Contact"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-gray-300 dark:border-white/20 bg-transparent text-gray-900 dark:text-white uppercase tracking-wider text-[14px] font-bold hover:border-[#D3AE3E] hover:text-[#D3AE3E] transition-colors duration-300 rounded-[2px]"
            >
              Nhận tư vấn hương vị
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
