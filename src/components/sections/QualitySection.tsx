"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const CHECKLIST = [
  "Kiểm soát chất lượng 6 bước",
  "Không chất bảo quản",
  "An toàn cho sức khỏe",
  "Hương vị ổn định, đồng nhất",
];

const STATS = [
  { num: "20+", label: "NĂM KINNH NGHIỆM" },
  { num: "50+", label: "ĐẠI LÝ TOÀN QUỐC" },
  { num: "100+", label: "NHÂN SỰ TẬN TÂM" },
  { num: "10 TRIỆU+", label: "LÍT BIA SẢN XUẤT MỖI NĂM" },
  { num: "98%", label: "KHÁCH HÀNG HÀI LÒNG" },
];

export default function QualitySection({ className }: { className?: string }) {
  return (
    <section id="quality" className={`py-28 bg-[#050505] text-white relative overflow-hidden border-t border-white/5 ${className || ''}`}>
      <div className="max-w-[1440px] px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Quality Commitment (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6 z-10">
          <ScrollReveal direction="right" duration={0.8}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 leading-tight">
              CHẤT LƯỢNG LÀ CAM KẾT CỦA CHÚNG TÔI
            </h2>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
              Mỗi giọt bia hơi là sự cam kết về chất lượng, an toàn và trải nghiệm tuyệt vời nhất dành cho khách hàng.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e4c26a] flex-shrink-0" />
                  <span className="text-white/90 text-sm font-sans font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="group relative inline-flex h-11 items-center justify-center rounded-sm border border-white/30 bg-transparent px-8 font-sans text-xs font-bold tracking-[0.15em] text-white transition-all duration-300 hover:border-[#e4c26a] hover:text-[#e4c26a] uppercase">
              TÌM HIỂU THÊM
            </button>
          </ScrollReveal>
        </div>

        {/* Center: Vertical Glass Macro Image (4 cols) */}
        <div className="lg:col-span-4 relative h-[500px] flex items-center justify-center my-8 lg:my-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <Image
              src="/images/macro-beer-glass.png"
              alt="Beer Glass Macro"
              fill
              className="object-cover object-center"
            />
            {/* Subtle Inner Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
          </div>
        </div>

        {/* Right Side: Vietnam Pride & Stats (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6 z-10">
          <ScrollReveal direction="left" duration={0.8} className="w-full">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 leading-tight">
              BIA HƠI – NIỀM TỰ HÀO VIỆT
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className={`flex flex-col ${idx === 3 ? "col-span-2" : ""}`}>
                  <span className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d8] via-[#e4c26a] to-[#b98a2d]">
                    {stat.num}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-white/60 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
