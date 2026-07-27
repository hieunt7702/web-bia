"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isProductsActive = pathname.startsWith('/san-pham');
  const isBlogActive = pathname.startsWith('/cam-nang');
  const isAboutActive = pathname.startsWith('/ve-chung-toi');
  const isHomeActive = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col w-full transition-all duration-300">
      {/* Top Bar (from noithat-main) */}
      <div className={`font-display hidden lg:flex border-b border-white/10 bg-[#0a0a0a] transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-[45px] py-3 opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-start gap-12">
          {/* Email */}
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-[#D3AE3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="text-[13px] font-medium text-[#888]">phamchom1234321@gmail.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-[#D3AE3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="text-[13px] font-medium text-[#888]">0969 960 001</span>
          </div>
          {/* Working Hours */}
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-[#D3AE3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-[13px] font-medium text-[#888]">Phục vụ đặt hàng: 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header (from noithat-main) */}
      <div className={`w-full transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-1' : 'bg-[#0a0a0a]/80 lg:bg-[#0a0a0a]/40 backdrop-blur-md border-b border-white/5 py-0'}`}>
        <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group gap-3">
              <Image
                src="/images/logo.png"
                alt="Tuấn Ngọc Logo"
                width={120}
                height={120}
                className="w-12 h-12 md:w-14 md:h-14 object-contain scale-[1.6] origin-center mr-1"
                priority
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading text-[16px] md:text-[18px] font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#c7a25c] via-[#f1be6d] to-[#D3AE3E]">
                  TUẤN NGỌC
                </span>
                <span className="font-heading text-[9px] font-medium tracking-[0.25em] text-[#D3AE3E] uppercase mt-0.5 opacity-90">
                  ĐẠI LÝ PHÂN PHỐI
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-menu text-[13px] font-semibold uppercase tracking-widest transition-colors ${isHomeActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>
              Trang chủ
            </Link>

            <Link href="/san-pham" className={`font-menu text-[13px] font-semibold uppercase tracking-widest transition-colors ${isProductsActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>
              Sản phẩm
            </Link>

            <Link href="/ve-chung-toi" className={`font-menu text-[13px] font-semibold uppercase tracking-widest transition-colors ${isAboutActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>
              Về chúng tôi
            </Link>

            <Link href="/cam-nang" className={`font-menu text-[13px] font-semibold uppercase tracking-widest transition-colors ${isBlogActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>
              Cẩm nang & tin tức
            </Link>
          </div>

          {/* Right Action Button (from noithat-main) */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              href="/#dealer-support"
              className="font-menu hidden lg:inline-flex items-center gap-2 btn-glow-motion group/btn relative bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-black px-6 py-3 text-[12px] font-bold uppercase tracking-widest hover:from-[#f1be6d] hover:to-[#D3AE3E] transition-all rounded-[2px] shadow-[0_0_20px_rgba(211,174,62,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Hỗ trợ mở điểm bán
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden text-white hover:text-[#D3AE3E] transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Glassmorphism */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] transition-all duration-300 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white/10 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center gap-8 w-full px-6 h-full overflow-y-auto py-20">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest ${isHomeActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>Trang Chủ</Link>
          <Link href="/san-pham" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest ${isProductsActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>Sản Phẩm</Link>
          <Link href="/ve-chung-toi" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest ${isAboutActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>Về Chúng Tôi</Link>
          <Link href="/cam-nang" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest ${isBlogActive ? 'text-[#D3AE3E]' : 'text-white hover:text-[#D3AE3E]'}`}>Cẩm Nang & Tin Tức</Link>
          <Link href="/#dealer-support" onClick={() => setIsMobileMenuOpen(false)} className="font-menu mt-8 btn-glow-motion group/btn relative bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-black px-8 py-3.5 text-sm font-bold uppercase tracking-widest w-full text-center rounded-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <span className="relative z-10">Hỗ Trợ Mở Điểm Bán</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
