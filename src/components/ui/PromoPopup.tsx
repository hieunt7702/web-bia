"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPromoPopup", "true");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-[600px] bg-[#111] shadow-[0_20px_70px_rgba(0,0,0,0.8)] rounded-md overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/5">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6 mt-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C7A25C]/20 to-transparent text-[#D3AE3E] mb-5 border border-[#C7A25C]/20 shadow-[0_0_20px_rgba(199,162,92,0.2)]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            <h3 className="font-heading text-[22px] font-bold text-white uppercase mb-2 leading-snug">
              Ưu Đãi Đặc Quyền <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-[22px]">Mở Điểm Bán</span>
            </h3>
            <p className="text-[#888] text-[13px]">
              Đồng hành cùng Tuấn Ngọc - Hỗ trợ khởi nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-black/20 p-6 rounded-md border border-white/5">
            {[
              "Tư vấn & thiết lập trọn gói từ A-Z",
              "Tài trợ tủ bảo quản chuyên dụng",
              "Đồng phục & hệ thống ly cốc",
              "Thiết kế biển hiệu & mô hình quán"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#D3AE3E] shrink-0" />
                <span className="text-gray-200 text-[14px] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="tel:0969960001"
              className="btn-glow-motion group relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-black font-bold uppercase tracking-wider py-4 rounded-md transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <svg className="w-5 h-5 relative z-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="relative z-10 text-[15px]">Gọi Ngay: 0969 960 001</span>
            </Link>
            <Link 
              href="https://zalo.me/0969960001"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#222] text-gray-300 font-medium py-4 rounded-md transition-all border border-white/10 hover:border-white/20"
            >
              Chat qua Zalo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
