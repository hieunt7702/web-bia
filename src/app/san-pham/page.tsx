'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';
import BackgroundVisuals from '@/components/ui/BackgroundVisuals';
import { PRODUCTS } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="w-full relative overflow-hidden modern-section min-h-screen bg-[#050505]">
      {/* Background Visuals & Starry Motif */}
      <BackgroundVisuals />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D3AE3E]/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#D3AE3E]/5 blur-[100px]" />
        {/* Grid Dot Pattern (from BeerIngredients) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Page Hero Header */}
        <div className="pt-52 pb-8 md:pt-60 md:pb-12 px-6 text-center relative">
          <SectionStarryMotif />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-4">
            Sản Phẩm <span className="text-[#C7A25C]">Của Chúng Tôi</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#C7A25C] mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Đại lý Tuấn Ngọc tự hào phân phối các dòng sản phẩm Bia Hơi Hà Nội chính hãng, đáp ứng mọi nhu cầu kinh doanh của điểm bán.
          </p>
        </div>

        {/* Product Grid Section */}
        <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 pt-4 pb-20 md:pt-6 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={`/san-pham/${product.id}`} className="group block relative w-full overflow-hidden rounded-[4px] bg-[#131313] luxury-glow border border-white/10 hover:border-[#C7A25C]/50 transition-colors duration-500">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#D3AE3E] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-[2px] border border-[#D3AE3E]/30 z-20">
                    {product.category}
                  </div>
                  
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 leading-snug drop-shadow-md">
                      {product.name}
                    </h3>
                    <p className="text-[#C7A25C] font-semibold tracking-wider text-sm mb-4">
                      {product.price}
                    </p>
                    <div className="pt-4 border-t border-white/20">
                      <span className="flex items-center justify-center gap-2 w-full bg-white/10 backdrop-blur-sm border border-[#D3AE3E]/50 text-[#D3AE3E] font-bold uppercase tracking-wider text-[11px] py-3 rounded-[4px] group-hover:bg-[#D3AE3E] group-hover:text-black transition-all duration-300">
                        Xem chi tiết
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
      <FloatingContact />
    </div>
  );
}
