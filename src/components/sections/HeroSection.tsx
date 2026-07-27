"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Leaf, Snowflake, Settings, ShieldCheck, ChevronDown } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    stat: "100%",
    title: "NGUYÊN LIỆU",
    subtitle: "TỰ NHIÊN",
  },
  {
    icon: Snowflake,
    stat: "",
    title: "LẠNH SÂU",
    subtitle: "GIỮ TRỌN HƯƠNG VỊ",
  },
  {
    icon: Settings,
    stat: "",
    title: "CÔNG NGHỆ",
    subtitle: "HIỆN ĐẠI CHUẨN QUỐC TẾ",
  },
  {
    icon: ShieldCheck,
    stat: "",
    title: "KIỂM SOÁT",
    subtitle: "CHẤT LƯỢNG NGHIÊM NGẶT",
  },
];

const PAGINATION = ["01", "02", "03", "04", "05", "06"];

const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: (i * 7) % 100,
  y: (i * 13) % 100,
  size: (i % 3) * 3 + 2,
  duration: 5 + (i % 5),
  delay: (i % 3) * 0.8,
}));

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center pt-[90px]"
    >
      {/* Animated Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [-20, -120, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: "#e4c26a",
              boxShadow: "0 0 10px #e4c26a, 0 0 20px #b98a2d",
            }}
          />
        ))}
      </div>

      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Bia Hoi Banner"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-90 scale-105"
        />
        {/* Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] px-8 mx-auto py-12 flex flex-col justify-between min-h-[calc(100vh-90px)]">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center my-auto gap-8">
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.25em] uppercase mb-2 font-light drop-shadow-md">
                TINH HOA
              </h1>
              <h2 className="font-heading text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight uppercase leading-none text-gold-gradient drop-shadow-[0_4px_30px_rgba(212,175,55,0.4)]">
                BIA HƠI VIỆT
              </h2>
              <p className="font-script text-[#e4c26a] text-4xl md:text-5xl lg:text-6xl mt-4 font-normal tracking-wide drop-shadow-lg">
                Chuẩn vị - Tinh khiết - Đậm đà
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80 max-w-xl font-sans text-base leading-relaxed tracking-wide mt-2 font-light"
            >
              Kết tinh từ nguyên liệu tuyển chọn cùng công nghệ ủ bia hiện đại, mang đến hương vị bia tươi mát, sảng khoái, đậm đà bản sắc Việt.
            </motion.p>

            {/* Buttons with Gold Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 mt-4"
            >
              <button className="group relative inline-flex h-13 items-center justify-center rounded-sm bg-gradient-to-r from-[#e4c26a] via-[#f5e4ab] to-[#b98a2d] px-9 font-sans text-xs font-bold tracking-[0.2em] text-black transition-all duration-500 hover:shadow-[0_0_35px_rgba(228,194,106,0.8)] hover:scale-105 uppercase gold-shine">
                KHÁM PHÁ SẢN PHẨM
              </button>
              <button className="group relative inline-flex h-13 items-center justify-center rounded-sm border border-[#e4c26a]/40 bg-black/50 backdrop-blur-md px-9 font-sans text-xs font-bold tracking-[0.2em] text-white transition-all duration-500 hover:border-[#e4c26a] hover:text-[#e4c26a] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(228,194,106,0.3)] uppercase gap-3">
                <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                XEM VIDEO
              </button>
            </motion.div>

            {/* 4 Feature Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10 w-full"
            >
              {FEATURES.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-full bg-[#b98a2d]/20 border border-[#b98a2d]/40 group-hover:bg-[#e4c26a] group-hover:text-black transition-all duration-300">
                      <item.icon className="w-4 h-4 text-[#e4c26a] group-hover:text-black transition-colors" />
                    </div>
                    {item.stat && (
                      <span className="font-heading text-xl font-bold text-[#e4c26a] group-hover:text-white transition-colors">
                        {item.stat}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-white uppercase group-hover:text-[#e4c26a] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] tracking-wider text-white/50 uppercase">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center my-4 text-center cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/60 group-hover:text-[#e4c26a] transition-colors mb-1 font-semibold">
            SCROLL DOWN
          </span>
          <ChevronDown className="w-5 h-5 text-[#e4c26a] drop-shadow-[0_0_10px_#e4c26a]" />
        </motion.div>
      </div>

      {/* Vertical Pagination Right Edge */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5 text-xs font-mono">
        {PAGINATION.map((num, idx) => (
          <span
            key={num}
            className={`cursor-pointer transition-all duration-300 ${
              idx === 0
                ? "text-[#e4c26a] font-bold text-sm border-b-2 border-[#e4c26a] pb-1 shadow-[0_0_10px_#e4c26a]"
                : "text-white/40 hover:text-white"
            }`}
          >
            {num}
          </span>
        ))}
      </div>
    </section>
  );
}
