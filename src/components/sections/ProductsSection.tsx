"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollReveal from "../ui/ScrollReveal";

const PRODUCTS = [
  {
    id: "gold",
    tag: "BIA HƠI",
    name: "GOLD",
    description: "Mềm mượt, sảng khoái, hương mát đậm đà",
    image: "/images/product-gold.png",
    isFeatured: true,
  },
  {
    id: "silver",
    tag: "BIA HƠI",
    name: "SILVER",
    description: "Êm dịu, cân bằng hương vị hoàn hảo",
    image: "/images/product-silver.png",
    isFeatured: false,
  },
  {
    id: "dark",
    tag: "BIA HƠI",
    name: "DARK",
    description: "Đậm đà, mạnh mẽ, hậu vị dài lâu",
    image: "/images/product-dark.png",
    isFeatured: false,
  },
  {
    id: "lager",
    tag: "BIA HƠI",
    name: "LAGER",
    description: "Tươi mát, nhẹ nhàng, dễ uống",
    image: "/images/product-lager.png",
    isFeatured: false,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 bg-[#050505] relative z-20 border-t border-white/5">
      <div className="max-w-[1440px] px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <ScrollReveal direction="up" duration={0.8}>
            <span className="text-[#e4c26a] uppercase tracking-[0.3em] text-xs font-semibold block mb-3 font-heading">
              SẢN PHẨM
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight uppercase tracking-wide mb-4">
              ĐA DẠNG HƯƠNG VỊ CHO MỌI TRẢI NGHIỆM
            </h2>
            
            {/* Slider arrows & indicator */}
            <div className="flex items-center gap-4 my-6">
              <div className="w-24 h-[2px] bg-white/10 relative">
                <div className="w-8 h-[2px] bg-[#e4c26a] absolute left-0 top-0 shadow-[0_0_10px_#e4c26a]" />
              </div>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#e4c26a] hover:text-[#e4c26a] hover:bg-[#e4c26a]/10 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#e4c26a] hover:text-[#e4c26a] hover:bg-[#e4c26a]/10 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-white/60 font-sans text-sm leading-relaxed mb-6 font-light">
              Bộ sưu tập bia hơi được ủ theo công thức độc quyền, mang đến sự lựa chọn hoàn hảo cho mọi khẩu vị.
            </p>

            <button className="group relative inline-flex h-12 items-center justify-center rounded-sm border border-[#e4c26a]/40 bg-transparent px-8 font-sans text-xs font-bold tracking-[0.2em] text-white transition-all duration-500 hover:border-[#e4c26a] hover:text-[#e4c26a] hover:bg-[#e4c26a]/10 uppercase gold-shine">
              XEM TẤT CẢ SẢN PHẨM
            </button>
          </ScrollReveal>
        </div>

        {/* Right Cards Grid with SpotlightCard (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              direction="up"
              duration={0.6}
              delay={idx * 0.15}
            >
              <SpotlightCard
                className={`p-6 flex flex-col justify-between h-[430px] ${
                  product.isFeatured ? "border-[#e4c26a] shadow-[0_0_25px_rgba(228,194,106,0.3)]" : ""
                }`}
              >
                {/* Product Header Text */}
                <div>
                  <span className="text-[10px] text-[#e4c26a] tracking-[0.25em] font-bold uppercase block mb-1">
                    {product.tag}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-wider uppercase mb-2 group-hover:text-[#e4c26a] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-xs font-sans leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                {/* Product Image */}
                <div className="relative h-[210px] w-full my-3 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={140}
                    height={210}
                    className="object-contain h-full w-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#e4c26a] uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                    XEM CHI TIẾT <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5 text-[#e4c26a]" />
                  </span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
