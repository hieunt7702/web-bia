"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';
import { POSTS } from '@/data/posts';

export default function BlogPage() {
  const reversedPosts = [...POSTS].reverse();
  const featuredPost = reversedPosts[0];
  const remainingPosts = reversedPosts.slice(1);

  const businessCount = POSTS.filter(p => p.tags.some(t => t.toLowerCase().includes('kinh doanh') || t.toLowerCase().includes('mở quán') || t.toLowerCase().includes('vốn') || t.toLowerCase().includes('chi phí') || t.toLowerCase().includes('nhân sự') || t.toLowerCase().includes('quản lý'))).length;
  const techCount = POSTS.filter(p => p.tags.some(t => t.toLowerCase().includes('bảo quản') || t.toLowerCase().includes('rót') || t.toLowerCase().includes('kỹ thuật') || t.toLowerCase().includes('bọt') || t.toLowerCase().includes('vệ sinh'))).length;
  const habecoCount = POSTS.filter(p => p.tags.some(t => t.toLowerCase().includes('habeco') || t.toLowerCase().includes('nhà máy') || t.toLowerCase().includes('chính hãng'))).length;

  const categories = [
    { name: 'Toàn bộ bài viết', count: POSTS.length },
    { name: 'Kinh nghiệm kinh doanh', count: businessCount },
    { name: 'Quy trình & Kỹ thuật', count: techCount },
    { name: 'Tin tức Habeco', count: habecoCount }
  ];

  return (
    <div className="w-full relative min-h-screen bg-[#0a0a0a] modern-section">
      <SectionStarryMotif />
      {/* Texture & Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(199,162,92,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(199,162,92,0.2)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#C7A25C]/5 blur-[150px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      <Header />

      {/* Main Content */}
      <main className="pt-48 md:pt-52 pb-24 px-6 max-w-[1400px] mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
            CẨM NANG <span className="text-[#D3AE3E]">& TIN TỨC</span>
          </h1>
          <p className="text-[#aaa] text-base md:text-lg max-w-2xl mx-auto">
            Kiến thức chuyên sâu, mẹo hay và xu hướng mới nhất để tối ưu doanh thu cho đại lý bia hơi.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">
          
          {/* Left Column: Latest Posts */}
          <div>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <h2 className="flex items-center gap-3 text-lg font-bold text-white mb-6 font-heading tracking-widest uppercase">
                  <span className="w-1 h-6 bg-[#D3AE3E]"></span> BÀI VIẾT NỔI BẬT
                </h2>
                <div className="group relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-[2px] overflow-hidden bg-[#111] border border-[#D3AE3E]/30 luxury-glow cursor-pointer">
                  <Image 
                    src={featuredPost.img}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-[#D3AE3E] text-[11px] font-bold tracking-widest uppercase mb-3">
                      BÀI VIẾT ĐỘC QUYỀN
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-snug drop-shadow-lg group-hover:text-[#D3AE3E] transition-colors">
                      <Link href={`/cam-nang/${featuredPost.slug}`} className="after:absolute after:inset-0">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-[#ccc] text-[14px] md:text-[15px] line-clamp-2 max-w-2xl leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <h2 className="flex items-center gap-3 text-lg font-bold text-white mb-8 font-heading tracking-widest uppercase">
              <span className="w-1 h-6 bg-[#D3AE3E]"></span> BÀI VIẾT MỚI NHẤT
            </h2>
            
            <div className="flex flex-col gap-6">
              {remainingPosts.map((post) => (
                <div key={post.id} className="group border border-white/5 bg-[#0a0a0a] hover:border-[#D3AE3E]/30 hover:bg-[#111] transition-all duration-500 rounded-[2px] overflow-hidden flex flex-col sm:flex-row relative">
                  {/* Image */}
                  <div className="relative w-full sm:w-[260px] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image 
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="text-[#D3AE3E] text-[11px] font-bold tracking-widest uppercase mb-3">
                      {post.date}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D3AE3E] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/cam-nang/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[#888] text-[15px] line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-32 h-fit">
            
            {/* Categories Widget */}
            <div>
              <h2 className="flex items-center gap-3 text-lg font-bold text-white mb-6 font-heading tracking-widest uppercase">
                <span className="w-1 h-5 bg-[#D3AE3E]"></span> CHUYÊN MỤC
              </h2>
              <div className="border border-white/5 bg-[#0a0a0a] rounded-[2px] p-6 flex flex-col gap-1">
                {categories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    href="/cam-nang" 
                    className="group flex items-center justify-between py-3.5 border-b border-white/5 last:border-0 hover:border-[#D3AE3E]/30 transition-colors"
                  >
                    <span className="flex items-center gap-3 text-[#aaa] group-hover:text-[#D3AE3E] text-sm font-medium transition-colors">
                      <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      {cat.name}
                    </span>
                    <span className="bg-white/5 group-hover:bg-[#D3AE3E]/10 text-white group-hover:text-[#D3AE3E] text-[11px] px-2.5 py-1 rounded-[2px] transition-colors">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Promo Banner Widget */}
            <div className="relative w-full rounded-[2px] overflow-hidden border border-[#D3AE3E]/30 luxury-glow aspect-[4/5] flex flex-col justify-end p-8 group cursor-pointer">
              {/* Background Image */}
              <Image 
                src="/images/hero/banner2.png"
                alt="Promo Banner"
                fill
                className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-[#D3AE3E] bg-[#050505]/50 backdrop-blur-md flex items-center justify-center text-[#D3AE3E] mb-6 group-hover:bg-[#D3AE3E] group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(211,174,62,0.2)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                </div>
                <h3 className="font-heading text-[15px] font-bold text-white uppercase tracking-widest mb-2">
                  ĐẶC QUYỀN ĐỐI TÁC
                </h3>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c7a25c] to-[#f1be6d] mb-4 uppercase">
                  HỖ TRỢ MỞ ĐIỂM BÁN
                </div>
                <p className="text-[#888] text-[13px] leading-relaxed mb-8">
                  Áp dụng khi đăng ký trở thành điểm bán thông qua hệ thống Tuấn Ngọc.
                </p>
                <Link 
                  href="tel:0969960001" 
                  className="w-full btn-glow-motion group/btn relative bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-black hover:text-black text-xs font-bold uppercase tracking-[2px] py-3.5 transition-all duration-300 text-center rounded-[2px] shadow-[0_0_15px_rgba(211,174,62,0.3)] hover:shadow-[0_0_25px_rgba(211,174,62,0.6)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10">LIÊN HỆ NGAY</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
