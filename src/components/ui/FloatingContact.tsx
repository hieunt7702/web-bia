"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingContact() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* Hotline Phone Call Widget (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-[9999]">
        <a
          href="tel:0969960001"
          className="relative flex items-center gap-3 group"
          aria-label="Gọi điện Hotline"
        >
          {/* Breathing Glow */}
          <span className="absolute inset-2 rounded-full bg-[#D3AE3E] animate-pulse [animation-duration:3s] blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Call Icon Button - Premium Gold */}
          <div className="relative w-[52px] h-[52px] bg-gradient-to-tr from-[#c7a25c] via-[#D3AE3E] to-[#f1be6d] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(211,174,62,0.4)] group-hover:scale-110 transition-transform duration-500 text-black/90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>

          {/* Phone Number Pill - Elegant */}
          <div className="hidden sm:flex flex-col justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D3AE3E]/20 px-4 py-1.5 rounded-full shadow-2xl group-hover:border-[#D3AE3E]/60 group-hover:bg-[#0a0a0a] transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3AE3E]/50 to-transparent"></div>
            <span className="text-[9px] uppercase font-bold text-[#D3AE3E] tracking-widest opacity-80">Hotline tư vấn</span>
            <span className="text-[15px] font-bold text-white tracking-wide group-hover:text-[#f1be6d] transition-colors">0969 960 001</span>
          </div>
        </a>
      </div>

      {/* Floating Contact Stack (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
        {/* Back to top Button */}
        <button
          onClick={goToTop}
          className={`w-[52px] h-[52px] bg-[#1F1F1F] dark:bg-white text-white dark:text-[#1F1F1F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C7A25C] dark:hover:bg-[#C7A25C] dark:hover:text-white transition-all duration-300 relative group overflow-hidden ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          <span className="absolute right-full mr-4 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white text-[13px] px-3 py-1.5 rounded-[4px] shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-gray-100 dark:border-white/10 font-medium">
            Lên đầu trang
          </span>
        </button>

        {/* Zalo Button */}
        <Link
          href="https://zalo.me/0969960001"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 btn-glow-motion relative group overflow-hidden"
          aria-label="Chat on Zalo"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/120px-Icon_of_Zalo.svg.png" alt="Zalo" className="w-[36px] h-[36px] object-contain" />
          <span className="absolute right-full mr-4 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white text-[13px] px-3 py-1.5 rounded-[4px] shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-gray-100 dark:border-white/10 font-medium">
            Chat qua Zalo
          </span>
        </Link>

        {/* Facebook Button */}
        <Link
          href="https://www.facebook.com/profile.php?id=61560476891303"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 btn-glow-motion relative group overflow-hidden"
          aria-label="Chat on Messenger"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/120px-Facebook_Messenger_logo_2020.svg.png" alt="Messenger" className="w-[40px] h-[40px] object-contain" />
          <span className="absolute right-full mr-4 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white text-[13px] px-3 py-1.5 rounded-[4px] shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-gray-100 dark:border-white/10 font-medium">
            Ghé thăm Facebook
          </span>
        </Link>
      </div>
    </>
  );
}
