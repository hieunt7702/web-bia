"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const ARTICLES = [
  {
    date: "20.05.2024",
    title: "Bí quyết thưởng thức bia hơi ngon đúng điệu",
    desc: "Những mẹo nhỏ giúp bạn cảm nhận trọn vẹn hương vị tươi mát của bia hơi.",
    image: "/images/news-1.png",
  },
  {
    date: "15.05.2024",
    title: "Công nghệ ủ lạnh – Bí quyết tạo nên vị bia êm mượt",
    desc: "Tìm hiểu về quy trình ủ lạnh hiện đại giúp bia hơi êm mượt, sảng khoái hơn.",
    image: "/images/news-2.png",
  },
  {
    date: "10.05.2024",
    title: "Hoa bia Saaz – Linh hồn của hương vị bia",
    desc: "Khám phá loại hoa bia hảo hạng tạo nên hương thơm đặc trưng cho bia.",
    image: "/images/news-3.png",
  },
  {
    date: "05.05.2024",
    title: "Văn hóa bia hơi – Nét đẹp trong đời sống Việt",
    desc: "Bia hơi không chỉ là đồ uống, mà còn là một phần văn hóa của người Việt.",
    image: "/images/news-4.png",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-28 bg-[#eae6df] text-[#111111] relative">
      <div className="max-w-[1440px] px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            TIN TỨC & KIẾN THỨC
          </h2>
          <Link
            href="#"
            className="group font-sans text-xs font-bold tracking-[0.15em] uppercase text-black flex items-center gap-2 hover:text-[#b98a2d] transition-colors"
          >
            XEM TẤT CẢ <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.6}
              delay={idx * 0.15}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden mb-4 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Date */}
              <span className="text-[11px] font-sans font-medium text-black/50 mb-2">
                {item.date}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-[#111111] group-hover:text-[#b98a2d] transition-colors mb-2 leading-snug line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-black/60 text-xs font-sans leading-relaxed line-clamp-2 mb-4">
                {item.desc}
              </p>

              {/* Read More Link */}
              <div className="mt-auto flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase text-black group-hover:text-[#b98a2d] transition-colors">
                ĐỌC THÊM <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
