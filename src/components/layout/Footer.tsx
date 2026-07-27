"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';
import { POSTS } from '@/data/posts';

const SERVICES = [
  { name: 'Bộ Sưu Tập Bia Gold', link: '#products' },
  { name: 'Quy Trình Ủ Lạnh Sâu', link: '#brewing' },
  { name: 'Cam Kết Chất Lượng', link: '#quality' },
  { name: 'Cẩm Nang Bia Tươi', link: '/cam-nang' }
];

const GALLERY = [
  '/images/product/bom_no.png',
  '/images/product/1l_no.png',
  '/images/product/keg1_no.png',
  '/images/product/keg2_no.png',
  '/images/hero/banner2.png',
  '/images/hero/banner3.png'
];

export default function Footer() {
  const footerPosts = [...POSTS].reverse().slice(0, 2);
  return (
    <footer className="overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl pt-24 pb-8 border-t border-[#D3AE3E]/10 relative z-10 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
      <SectionStarryMotif />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Contact */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#D3AE3E]">
              Liên hệ
            </h3>
            <p className="text-[#ccc] text-[15px] mb-6">
              Kết nối với Đại lý phân phối Tuấn Ngọc:
            </p>
            <ul className="space-y-4 text-[#888] text-[14px]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D3AE3E] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D3AE3E] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>0969 960 001</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D3AE3E] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>phamchom1234321@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Recent Posts */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#D3AE3E]">
              Bài viết mới nhất
            </h3>
            <div className="space-y-4">
              {footerPosts.map((post) => (
                <Link key={post.id} href={`/cam-nang/${post.slug}`} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 overflow-hidden bg-[#1a1a1a] rounded-sm relative">
                    <Image src={post.img} fill alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white leading-snug mb-1 group-hover:text-[#D3AE3E] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="font-label text-[#888] text-[11px] uppercase tracking-wider">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#D3AE3E]">
              Danh mục trải nghiệm
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((srv, index) => (
                <li key={index}>
                  <Link href={srv.link} className="flex items-center gap-3 text-[#888] hover:text-[#D3AE3E] text-[14px] transition-colors group">
                    <svg className="w-4 h-4 text-[#D3AE3E] opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Gallery */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#D3AE3E]">
              Thư viện ảnh
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {GALLERY.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-sm cursor-pointer group">
                  <Image src={imgUrl} fill alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-[#888]">
            Điều khoản sử dụng | Chính sách bảo mật | © 2026 Tuấn Ngọc
          </div>
          <div className="text-[13px] text-[#888] font-medium">
            Thiết kế bởi <span className="text-[#D3AE3E] font-bold">HieuNT7702</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
