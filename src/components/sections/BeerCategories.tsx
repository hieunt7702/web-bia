'use client';
import SectionStarryMotif from '../ui/SectionStarryMotif';
import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import ArchitecturalAccent from '../ui/ArchitecturalAccent';

const CATEGORIES = [
  { name: 'Bia Thủ Công', img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80', size: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' },
  { name: 'Bia Nhập Khẩu', img: 'https://images.unsplash.com/photo-1657805166292-69f8c5b058a5?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Bia Tươi', img: 'https://images.unsplash.com/photo-1563514986799-a651cb9ee2d9?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Ale', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', size: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
  { name: 'Stout & Porter', img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Lager', img: 'https://images.unsplash.com/photo-1566938927909-0d12e6d98fc0?auto=format&fit=crop&q=80', size: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
  { name: 'Pilsner', img: 'https://images.unsplash.com/photo-1574882194686-2180c441edc2?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Bia Lúa Mì', img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'IPA', img: 'https://images.unsplash.com/photo-1566860351745-0d3a7e37e965?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Bia Trái Cây', img: 'https://images.unsplash.com/photo-1614316223190-21396a84c2a5?auto=format&fit=crop&q=80', size: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
  { name: 'Cider', img: 'https://images.unsplash.com/photo-1560195521-820db0e5883d?auto=format&fit=crop&q=80', size: 'aspect-square' },
  { name: 'Phụ Kiện Bia', img: 'https://images.unsplash.com/photo-1596720188688-6644eb2fc3f2?auto=format&fit=crop&q=80', size: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
  { name: 'Quà Tặng', img: 'https://images.unsplash.com/photo-1620892015822-04e4eb176bb2?auto=format&fit=crop&q=80', size: 'aspect-square' }
];

export default function BeerCategories() {
  return (
    <section id="Categories" className="relative py-32 bg-transparent dark:bg-transparent modern-section overflow-hidden border-t border-[#ECE7DE] dark:border-white/20">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      <ArchitecturalAccent variant="overlapping-circles" className="top-10 right-10 w-56 h-56 opacity-50" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h6 className="font-label text-[#C7A25C] text-[13px] font-semibold tracking-[4px] uppercase mb-4">
              Danh Mục Sản Phẩm
            </h6>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1F1F1F] dark:text-white mb-6 uppercase">
              Hương vị <span className="text-[#C7A25C]">đa dạng</span> cho mọi khoảnh khắc
            </h2>
            <div className="w-16 h-[2px] bg-[#C7A25C] mx-auto mb-6" />
            <p className="text-[#999] max-w-4xl mx-auto leading-relaxed text-[15px] md:text-[17px]">
              Từ những dòng bia thủ công tinh tế, bia nhập khẩu thượng hạng cho đến các loại bia trái cây tươi mát, chúng tôi mang đến hệ sinh thái sản phẩm phong phú đáp ứng mọi gu thưởng thức của bạn.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-2">
          {CATEGORIES.map((cat, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.15}
              className={`${cat.size} h-full w-full`}
            >
              <div className="group relative w-full h-full overflow-hidden bg-[#FFFFFF] dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-[#ECE7DE] dark:border-white/10 rounded-[2px] cursor-pointer">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 luxury-image-filter"
                  style={{ backgroundImage: `url(${cat.img})` }}
                />
                {/* Luxury Inner Border Accent */}
                <div className="absolute inset-3 border border-[#D3AE3E]/30 z-20 pointer-events-none transition-all duration-500 group-hover:inset-4 group-hover:border-[#D3AE3E]/60 rounded-[2px]"></div>

                {/* Luxury Cream Overlay for Light Mode */}
                <div
                  className="absolute inset-0 pointer-events-none dark:hidden z-10"
                  style={{
                    background: 'linear-gradient(to right, rgba(248, 246, 242, 0.15), rgba(248, 246, 242, 0.05))'
                  }}
                />

                {/* Dark Overlays for Text Readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="font-heading text-[16px] md:text-[18px] font-medium text-white uppercase tracking-[4px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-sm">
                    {cat.name}
                  </h3>
                  <div className="h-[1px] w-12 bg-[#C7A25C] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform -translate-x-4 group-hover:translate-x-0" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
