'use client';
import React from 'react';
import { Factory, Beaker, Snowflake, Package, Wheat } from 'lucide-react';
import SectionStarryMotif from '../ui/SectionStarryMotif';
import ScrollReveal from '../ui/ScrollReveal';
import ArchitecturalAccent from '../ui/ArchitecturalAccent';

const PROCESS_STEPS = [
  {
    title: 'Tư Vấn & Khảo Sát',
    desc: 'Tiếp nhận yêu cầu, khảo sát mặt bằng và tư vấn mô hình quán phù hợp.',
    icon: Beaker
  },
  {
    title: 'Ký Kết Hợp Đồng',
    desc: 'Chốt phương án hợp tác, chính sách chiết khấu và các hạng mục hỗ trợ.',
    icon: Factory
  },
  {
    title: 'Lắp Đặt Thiết Bị',
    desc: 'Thi công biển bảng, bàn giao tủ bảo quản và hệ thống chiết rót chuyên dụng.',
    icon: Snowflake
  },
  {
    title: 'Đào Tạo Vận Hành',
    desc: 'Hướng dẫn nhân viên cách bảo quản, chiết rót bia chuẩn vị truyền thống.',
    icon: Wheat
  },
  {
    title: 'Khai Trương & Giao Bia',
    desc: 'Khai trương điểm bán và cung cấp bia hơi Hà Nội mới mỗi ngày tận nơi.',
    icon: Package
  }
];

export default function BeerProcess() {
  return (
    <section id="brewing" className="relative py-16 lg:py-20 bg-transparent dark:bg-transparent modern-section overflow-hidden">
      <SectionStarryMotif />
      {/* Cinematic Lighting: Window Blind Shadows */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay"
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.15) 40px, rgba(0,0,0,0.15) 50px)'
           }}
      />
      
      {/* Sun Light Overlay for the shadows */}
      <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,250,235,0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(211,174,62,0.15)_0%,transparent_70%)] pointer-events-none z-[0]" />

      <ArchitecturalAccent variant="overlapping-rectangles" className="top-10 right-10 w-64 h-64 opacity-20 z-[2]" />
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#C7A25C]/5 blur-[150px] pointer-events-none z-[0]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h6 className="font-label text-[#C7A25C] text-[13px] font-semibold tracking-[4px] uppercase mb-3">
              Quy Trình Mở Quán
            </h6>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] dark:text-white mb-5 uppercase">
              Hợp Tác <span className="text-[#C7A25C]">Chuyên Nghiệp</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#C7A25C] mx-auto mb-5" />
            <p className="text-[#555] dark:text-gray-400 text-[15px] max-w-2xl mx-auto">
              5 bước đơn giản để bắt đầu kinh doanh Bia Hơi Hà Nội cùng sự hỗ trợ tận tâm từ Nhà Phân Phối Tuấn Ngọc.
            </p>
          </div>
        </ScrollReveal>

        {/* Luxury Horizontal Timeline */}
        <ScrollReveal direction="up" delay={0.2}>
          {/* Desktop View: Horizontal Timeline */}
          <div className="hidden lg:block w-full relative py-4">
            <div className="w-full flex justify-between relative px-10">
               {/* Connecting Line */}
               <div className="absolute top-[68px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C7A25C]/50 to-transparent z-0"></div>
               
               {PROCESS_STEPS.map((step, idx) => {
                 const Icon = step.icon;
                 return (
                 <div key={idx} className="relative flex flex-col items-center w-[220px] group cursor-default z-10">
                   <div className="text-[#C7A25C] font-heading font-bold text-[16px] mb-2 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">0{idx + 1}</div>
                   <div className="w-[64px] h-[64px] rounded-full bg-[#FAF8F2] dark:bg-[#131313] border border-[#C7A25C]/50 flex items-center justify-center text-[#C7A25C] shadow-[0_0_15px_rgba(199,162,92,0.15)] group-hover:scale-110 group-hover:bg-[#C7A25C] group-hover:text-white group-hover:border-[#C7A25C] transition-all duration-500 mb-4 luxury-glow relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                     <Icon size={24} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-center font-heading text-[15px] font-bold text-[#1F1F1F] dark:text-white uppercase tracking-widest leading-snug group-hover:text-[#C7A25C] transition-colors px-2 mb-2">
                     {step.title}
                   </h3>
                   <p className="text-center text-[13px] text-[#666] dark:text-gray-400 leading-relaxed group-hover:text-[#888] dark:group-hover:text-gray-300 transition-colors px-1">
                     {step.desc}
                   </p>
                   <div className="w-1.5 h-1.5 rounded-full bg-[#C7A25C] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"></div>
                 </div>
                 );
               })}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-[#1F1F1F] dark:border-white text-[#1F1F1F] dark:text-white hover:bg-[#C7A25C] hover:border-[#C7A25C] hover:text-white transition-colors duration-300 uppercase tracking-widest text-[13px] font-semibold">
                Đăng Ký Hợp Tác
              </button>
            </div>
          </div>

          {/* Mobile & Tablet View: Vertical List */}
          <div className="block lg:hidden relative mt-8">
            <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[1px] bg-gradient-to-b from-[#C7A25C]/50 via-[#C7A25C]/20 to-transparent z-0"></div>
            <div className="flex flex-col gap-8">
               {PROCESS_STEPS.map((step, idx) => {
                 const Icon = step.icon;
                 return (
                 <div key={idx} className="relative flex flex-col group pl-[64px]">
                   <div className="absolute left-0 top-0 w-12 h-12 shrink-0 rounded-full bg-[#FAF8F2] dark:bg-[#131313] border border-[#C7A25C]/50 flex items-center justify-center text-[#C7A25C] shadow-[0_0_15px_rgba(199,162,92,0.15)] group-hover:bg-[#C7A25C] group-hover:text-white transition-all duration-500 z-10 overflow-hidden">
                     <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                     <Icon size={20} strokeWidth={1.5} />
                   </div>
                   
                   <div className="flex-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-5 rounded-[2px] border border-[#ECE7DE] dark:border-white/10 group-hover:border-[#C7A25C]/50 transition-colors shadow-sm relative">
                     <div className="absolute -left-1.5 top-6 -translate-y-1/2 w-3 h-3 bg-[#FAF8F2] dark:bg-[#131313] border-t border-l border-[#ECE7DE] dark:border-white/10 group-hover:border-[#C7A25C]/50 rotate-[-45deg] transition-colors"></div>
                     <div className="flex items-center gap-2 mb-2">
                       <span className="text-[#C7A25C] font-heading font-bold text-[15px]">0{idx + 1}.</span>
                       <h3 className="font-heading text-[15px] font-bold text-[#1F1F1F] dark:text-white uppercase tracking-widest leading-snug group-hover:text-[#C7A25C] transition-colors">
                         {step.title}
                       </h3>
                     </div>
                     <p className="text-[13px] text-[#666] dark:text-gray-400 leading-relaxed">
                       {step.desc}
                     </p>
                   </div>
                 </div>
                 );
               })}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-[#1F1F1F] dark:border-white text-[#1F1F1F] dark:text-white hover:bg-[#C7A25C] hover:border-[#C7A25C] hover:text-white transition-colors duration-300 uppercase tracking-widest text-[13px] font-semibold w-full">
                Đăng Ký Hợp Tác
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
