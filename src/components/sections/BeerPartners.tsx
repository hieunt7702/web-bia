'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArchitecturalAccent from '../ui/ArchitecturalAccent';
import SectionStarryMotif from '../ui/SectionStarryMotif';

const MOCK_PARTNERS = [
  { id: 1, name: 'Nhà Máy Bia A', segment: 'cao-cap', shortDescription: 'Nhà máy thủ công' },
  { id: 2, name: 'Nhà Máy Bia B', segment: 'trung-cap', shortDescription: 'Phân phối toàn quốc' },
  { id: 3, name: 'Bia Tươi C', segment: 'cao-cap', shortDescription: 'Sản xuất độc quyền' },
  { id: 4, name: 'Nhập Khẩu D', segment: 'co-ban', shortDescription: 'Đối tác nhập khẩu' },
  { id: 5, name: 'Nhà Máy Bia E', segment: 'cao-cap', shortDescription: 'Nhà máy thủ công' },
  { id: 6, name: 'Phân Phối F', segment: 'trung-cap', shortDescription: 'Hệ thống đại lý' },
];

export default function BeerPartners() {
  return (
    <section className="py-20 relative bg-[#f9f9f9] dark:bg-[#111111] border-t border-[#ECE7DE] dark:border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/common/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
      <SectionStarryMotif />
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-sm md:text-base font-semibold text-[#D3AE3E] uppercase tracking-[0.2em] mb-2">
            Các đối tác chính
          </h2>
          <p className="text-gray-400 dark:text-white/40 text-sm">Hệ sinh thái hơn 30 đối tác chuyên nghiệp hàng đầu</p>
        </div>

        {/* Grid for logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {MOCK_PARTNERS.map((partner) => (
            <Link href={`/doi-tac/${partner.id}`} key={partner.id} className="flex flex-col items-center justify-center p-6 card dark:bg-[#1a1a1a] dark:hover:bg-white/10 border border-[#ECE7DE] dark:border-white/20 hover:border-[#C7A25C]/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-lg luxury-glow rounded-[4px]">
              <div className="w-20 h-20 mb-4 text-gray-400 dark:text-white/40 group-hover:text-[#C7A25C] transition-all rounded-full overflow-hidden border border-[#ECE7DE] dark:border-white/10 flex items-center justify-center bg-white shadow-sm p-2 shadow-[0_5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                <span className="text-xl font-heading font-bold text-[#D3AE3E]">{partner.name.substring(0, 2).toUpperCase()}</span>
              </div>
              <h3 className="font-heading font-bold text-[#1F1F1F] dark:text-white tracking-wider text-center line-clamp-1">{partner.name}</h3>
              
              {/* Segment Badge */}
              <div className={`mt-2 inline-block text-[9px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-widest shadow-sm ${
                (partner.segment || '').includes('cao-cap') ? 'bg-gradient-to-r from-[#D3AE3E] to-[#E5C98A] text-[#131313]' :
                (partner.segment || '').includes('trung-cap') ? 'bg-gradient-to-r from-[#e2e2e2] to-[#b4b5b5] text-[#131313]' :
                'bg-gradient-to-r from-[#cd7f32] to-[#b87333] text-white'
              }`}>
                {(partner.segment || '').includes('cao-cap') ? 'Cao cấp' : (partner.segment || '').includes('trung-cap') ? 'Trung cấp' : 'Cơ bản'}
              </div>
              
              <p className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-widest mt-2 text-center line-clamp-1" title={partner.shortDescription || 'Đối tác'}>{partner.shortDescription || 'Đối tác'}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/doi-tac" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-white hover:text-[#C7A25C] dark:hover:text-[#C7A25C] transition-colors group px-6 py-3 border border-gray-200 dark:border-white/20 hover:border-[#C7A25C] rounded-[2px]">
            Xem tất cả đối tác
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
