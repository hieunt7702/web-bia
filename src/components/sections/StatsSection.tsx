"use client";

import ScrollReveal from "../ui/ScrollReveal";

const STATS = [
  { value: "20+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Giải thưởng quốc tế" },
  { value: "10M+", label: "Lít bia mỗi năm" },
  { value: "98%", label: "Khách hàng hài lòng" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#090909] relative border-y border-white/5">
      <div className="max-w-[1440px] px-8 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              direction="scale"
              duration={0.6}
              delay={idx * 0.15}
              className="flex flex-col items-center justify-center text-center px-4 group"
            >
              <h3 className="font-heading text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e4c26a] to-[#b98a2d] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </h3>
              <p className="text-white/60 uppercase tracking-widest text-xs lg:text-sm font-semibold group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
