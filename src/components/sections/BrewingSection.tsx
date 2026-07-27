"use client";

import { Wheat, Flame, FlaskConical, Snowflake, ShieldCheck } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "NGHIỀN MALT",
    desc: "Nghiền mịn malt đại mạch để chuẩn bị cho quá trình nấu bia",
    icon: Wheat,
  },
  {
    num: "02",
    title: "NẤU & ĐƯỜNG HÓA",
    desc: "Nấu ở nhiệt độ chuẩn để chuyển hóa tinh bột thành đường tự nhiên",
    icon: Flame,
  },
  {
    num: "03",
    title: "LÊN MEN",
    desc: "Ủ men trong điều kiện lý tưởng để tạo hương vị đặc trưng",
    icon: FlaskConical,
  },
  {
    num: "04",
    title: "Ủ LẠNH",
    desc: "Ủ lạnh sâu giúp bia êm mượt và giữ trọn hương vị",
    icon: Snowflake,
  },
  {
    num: "05",
    title: "LỌC & ĐÓNG GÓI",
    desc: "Lọc tinh khiết và đóng gói khép kín, đảm bảo chất lượng tuyệt đối",
    icon: ShieldCheck,
  },
];

export default function BrewingSection({ className }: { className?: string }) {
  return (
    <section id="brewing" className={`py-28 bg-[#090909] text-white relative border-t border-white/5 ${className || ''}`}>
      <div className="max-w-[1440px] px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">
              QUY TRÌNH Ủ BIA CHUẨN QUỐC TẾ
            </h2>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-8">
              Ứng dụng công nghệ hiện đại kết hợp với bí quyết truyền thống, tạo nên bia hơi chất lượng vượt trội.
            </p>
            <button className="group relative inline-flex h-11 items-center justify-center rounded-sm border border-white/30 bg-transparent px-8 font-sans text-xs font-bold tracking-[0.15em] text-white transition-all duration-300 hover:border-[#e4c26a] hover:text-[#e4c26a] uppercase">
              KHÁM PHÁ QUY TRÌNH
            </button>
          </ScrollReveal>
        </div>

        {/* Right Horizontal Steps (8 cols) */}
        <div className="lg:col-span-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, idx) => (
              <ScrollReveal
                key={step.num}
                direction="up"
                duration={0.6}
                delay={idx * 0.15}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Connecting arrow line for desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-4 w-8 text-[#e4c26a]/40 z-0">
                    ➔
                  </div>
                )}

                {/* Octagonal Golden Icon Badge */}
                <div className="w-14 h-14 rounded-xl border border-[#b98a2d] bg-[#111111] flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#e4c26a] group-hover:shadow-[0_0_15px_rgba(228,194,106,0.3)]">
                  <step.icon className="w-6 h-6 text-[#e4c26a]" />
                </div>

                {/* Step Number */}
                <span className="font-heading text-lg font-bold text-[#e4c26a] mb-1">
                  {step.num}
                </span>

                {/* Step Title */}
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-white/50 text-[11px] font-sans leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
