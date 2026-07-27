"use client";

import Image from "next/image";
import { Leaf, Wind, Droplets, Sparkles } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const INGREDIENTS = [
  {
    name: "HOA BIA",
    description: "Tuyển chọn từ những vùng trồng tốt nhất",
    image: "/images/ingredient-hoa-bia.png",
    icon: Leaf,
  },
  {
    name: "MALT ĐẠI MẠCH",
    description: "Nhập khẩu chất lượng cao, độ tinh khiết tuyệt đối",
    image: "/images/ingredient-dai-mach.png",
    icon: Wind,
  },
  {
    name: "NƯỚC TINH KHIẾT",
    description: "Nguồn nước đạt chuẩn, tinh khiết tự nhiên",
    image: "/images/ingredient-nuoc-tinh-khiet.png",
    icon: Droplets,
  },
  {
    name: "MEN BIA",
    description: "Chủng men thuần khiết, ủ bia chuẩn vị",
    image: "/images/ingredient-men-bia.png",
    icon: Sparkles,
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-28 bg-[#eae6df] text-[#111111] relative">
      <div className="max-w-[1440px] px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-tight">
              NGUYÊN LIỆU TUYỂN CHỌN TỪ THIÊN NHIÊN
            </h2>
            <p className="text-black/70 font-sans text-sm leading-relaxed mb-8">
              Chúng tôi chỉ sử dụng những nguyên liệu tuyển chọn kỹ lưỡng từ thiên nhiên để tạo nên những giọt bia tinh khiết nhất.
            </p>
            <button className="group relative inline-flex h-11 items-center justify-center rounded-sm border border-black/80 bg-transparent px-8 font-sans text-xs font-bold tracking-[0.15em] text-black transition-all duration-300 hover:bg-black hover:text-white uppercase">
              TÌM HIỂU THÊM
            </button>
          </ScrollReveal>
        </div>

        {/* Right Cards Grid (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {INGREDIENTS.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              duration={0.6}
              delay={idx * 0.15}
              className="flex flex-col items-center text-center group"
            >
              {/* Image with Octagonal/Round Icon Badge at Bottom Center */}
              <div className="relative w-full aspect-square rounded-md overflow-hidden mb-6 shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Circular Icon Overlay Badge at bottom center */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111111] border border-[#b98a2d] flex items-center justify-center shadow-lg z-10">
                  <item.icon className="w-4 h-4 text-[#e4c26a]" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="pt-2">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-2 text-[#111111]">
                  {item.name}
                </h3>
                <p className="text-black/60 text-xs font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
