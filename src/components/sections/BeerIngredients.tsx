'use client';
import React from 'react';
import Image from 'next/image';
import { Leaf, Wheat, Droplets, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionStarryMotif from '../ui/SectionStarryMotif';
import ArchitecturalAccent from '../ui/ArchitecturalAccent';

const INGREDIENTS = [
  {
    name: 'HOA BIA SAAZ',
    desc: 'Tạo nên vị đắng thanh dịu và hương thơm đặc trưng của Bia Hơi Hà Nội.',
    image: '/images/nguyen-lieu/hoa-bia.png',
    icon: Leaf
  },
  {
    name: 'MALT ĐẠI MẠCH',
    desc: 'Hạt đại mạch ươm mầm tuyển chọn, đem lại sắc vàng óng ả cho từng ly bia.',
    image: '/images/nguyen-lieu/dai-mach.png',
    icon: Wheat
  },
  {
    name: 'NƯỚC TINH KHIẾT',
    desc: 'Nguồn nước ngầm qua xử lý đa tầng, là nền tảng cho sự êm mượt tuyệt hảo.',
    image: '/images/nguyen-lieu/nuoc-tinh-khiet.png',
    icon: Droplets
  },
  {
    name: 'MEN BIA ĐẶC CHỦNG',
    desc: 'Chủng men thuần khiết riêng biệt của Habeco, linh hồn của hương vị truyền thống.',
    image: '/images/nguyen-lieu/men-bia.png',
    icon: Sparkles
  }
];

export default function BeerIngredients() {
  return (
    <section className="relative py-24 bg-transparent dark:bg-transparent modern-section overflow-hidden">
      <SectionStarryMotif />
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      {/* Sun Light Overlay for the shadows */}
      <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,250,235,0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(211,174,62,0.15)_0%,transparent_70%)] pointer-events-none z-[0]" />

      <ArchitecturalAccent variant="overlapping-rectangles" className="top-10 left-10 w-64 h-64 opacity-20 z-[2]" />
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#C7A25C]/5 blur-[150px] pointer-events-none z-[0]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h6 className="font-label text-[#C7A25C] text-[13px] font-semibold tracking-[4px] uppercase mb-4">
              Thành Phần
            </h6>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1F1F1F] dark:text-white mb-6 uppercase">
              Bia Hơi Hà Nội - <br/> <span className="text-[#C7A25C] text-3xl md:text-4xl mt-3 inline-block">Tinh hoa mảnh đất nghìn năm</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#C7A25C] mx-auto mb-6" />
            <p className="text-[#555] dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Chắt lọc từ những nguyên liệu hảo hạng nhất, kết hợp cùng bí quyết ủ bia trăm năm của Habeco để tạo nên hương vị truyền thống đậm đà bản sắc.
            </p>
          </div>
        </ScrollReveal>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-8">
          {INGREDIENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col items-center group h-full">
                  <div className="relative w-full aspect-square mb-8 p-[1px] rounded-[3px] bg-gradient-to-br from-[#C7A25C] via-[#C7A25C]/30 to-transparent">
                    <div className="w-full h-full overflow-hidden rounded-[2px] relative bg-[#FAF8F2] dark:bg-[#131313]">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    {/* Icon Badge overlapping bottom edge */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FAF8F2] dark:bg-[#131313] p-[4px] z-10 shadow-[0_0_15px_rgba(199,162,92,0.15)] group-hover:shadow-[0_0_20px_rgba(199,162,92,0.3)] transition-shadow duration-300">
                      <div className="w-full h-full rounded-full border border-[#C7A25C] flex items-center justify-center bg-transparent text-[#C7A25C] group-hover:bg-[#C7A25C] group-hover:text-white transition-colors duration-300">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center px-1 mt-2">
                    <h3 className="font-heading font-bold text-[#1F1F1F] dark:text-white text-[16px] mb-2 uppercase tracking-widest group-hover:text-[#C7A25C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[14px] text-[#666] dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
