"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] px-8 mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side Text */}
        <div className="max-w-xl">
          <ScrollReveal direction="right" duration={0.8}>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold uppercase tracking-wide mb-2">
              ĐĂNG KÝ NHẬN TIN
            </h2>
            <p className="text-white/60 font-sans text-sm">
              Cập nhật những tin tức mới nhất, chương trình khuyến mãi dành riêng cho bạn!
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side Input */}
        <div className="w-full lg:w-auto flex-grow max-w-md">
          <ScrollReveal direction="left" duration={0.8} delay={0.2} className="w-full">
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full h-12 bg-[#111111] border border-white/20 rounded-sm pl-5 pr-36 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-[#e4c26a]"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#e4c26a] to-[#b98a2d] text-black px-5 font-sans font-bold uppercase tracking-wider text-xs rounded-sm hover:shadow-[0_0_15px_rgba(228,194,106,0.5)] transition-all"
              >
                ĐĂNG KÝ NGAY
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Right Hop Branch Decoration Overlay */}
        <div className="absolute top-0 right-0 h-full w-1/4 pointer-events-none opacity-40 hidden xl:block">
          <Image
            src="/images/newsletter-hops.png"
            alt="Hops Overlay"
            fill
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
