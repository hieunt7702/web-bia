"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const SLIDES = [
  {
    bgImage: '/images/hero/banner.png',
    subtitle: 'ĐẠI LÝ PHÂN PHỐI BIA HƠI HABECO TUẤN NGỌC',
    titleNormal: 'Bia Hơi Hà Nội -',
    titleBold: 'Habeco Chuẩn Vị',
    titleLine2: 'Đồng hành cùng mọi điểm bán',
    text: 'Tự hào là tổng đại lý phân phối chính thức cấp 1 của Bia Hơi Hà Nội Habeco. Chúng tôi mang đến những bom, keg bia tươi mới nhất, chiết khấu cao cho mọi điểm bán.',
    btn1: { label: 'Khám phá sản phẩm', href: '/san-pham' },
    btn2: { label: 'Liên hệ mở đại lý', href: 'tel:0969960001' },
  },
  {
    bgImage: '/images/hero/banner2.png',
    subtitle: 'CAM KẾT CHẤT LƯỢNG CHÍNH HÃNG',
    titleNormal: '100% Chính Hãng -',
    titleBold: 'Chuẩn Nhiệt Độ',
    titleLine2: 'Bảo quản chuyên dụng 24/7',
    text: 'Hệ thống xe lạnh và kho bảo quản chuyên dụng đảm bảo mỗi mẻ bia giao đến điểm bán đều giữ trọn vẹn độ lạnh sâu và hương vị nguyên bản của Bia Hơi Hà Nội.',
    btn1: { label: 'Khám phá sản phẩm', href: '/san-pham' },
    btn2: { label: 'Liên hệ mở đại lý', href: 'tel:0969960001' },
  },
  {
    bgImage: '/images/hero/banner3.png',
    subtitle: 'ĐỒNG HÀNH CÙNG ĐIỂM BÁN',
    titleNormal: 'Hỗ Trợ Từ A-Z -',
    titleBold: 'Chiết Khấu Cao',
    titleLine2: 'Chính sách đại lý tốt nhất',
    text: 'Không chỉ cung cấp bia, Tuấn Ngọc còn đồng hành hỗ trợ đối tác set up quán, trang bị tủ lạnh và biển bảng với chính sách chiết khấu tốt nhất thị trường.',
    btn1: { label: 'Khám phá sản phẩm', href: '/san-pham' },
    btn2: { label: 'Liên hệ mở đại lý', href: 'tel:0969960001' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = React.useRef<number | null>(null);
  const total = SLIDES.length;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    rafRef.current = requestAnimationFrame(() => {
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    });
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[620px] bg-[#050505] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Slider Track */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[current].bgImage}
            alt="Banner Dark"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
        </motion.div>
      </AnimatePresence>

      {/* Caption Content (Centered 100% like noithat-main) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 md:px-20 max-w-[1400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-auto"
            >

              <motion.p variants={itemVariants} className="text-[#D3AE3E] text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-md font-heading">
                {SLIDES[current].subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className="w-full flex flex-col items-center justify-center mb-8">
                <h1 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.25] md:leading-[1.15] tracking-tight drop-shadow-xl">
                  <span className="font-bold text-white mr-3">
                    {SLIDES[current].titleNormal}
                  </span>
                  <span className="font-black text-gold-shimmer drop-shadow-2xl">
                    {SLIDES[current].titleBold}
                  </span>
                  <br />
                  <span className="font-medium text-white/90 mt-3 inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {SLIDES[current].titleLine2}
                  </span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D3AE3E] to-transparent mb-8" />

              <motion.p variants={itemVariants} className="text-white/90 text-[16px] md:text-[18px] leading-[1.8] max-w-3xl mb-12 drop-shadow-md font-sans">
                {SLIDES[current].text}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6">
                <Link
                  href={SLIDES[current].btn1.href}
                  className="btn-luxury-primary font-bold text-[13px] uppercase tracking-[2px] py-4 px-8 rounded-[2px]"
                >
                  {SLIDES[current].btn1.label}
                </Link>

                <Link
                  href={SLIDES[current].btn2.href}
                  className="btn-luxury-secondary font-bold text-[13px] uppercase tracking-[2px] py-4 px-8 rounded-[2px]"
                >
                  {SLIDES[current].btn2.label}
                </Link>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === current ? "w-8 bg-[#D3AE3E]" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Left Social Links */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-[35] flex-col items-center gap-5">
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-transparent to-white/30 mb-2"></div>
        <a 
          href="https://www.facebook.com/profile.php?id=61560476891303" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:text-[#D3AE3E] hover:border-[#D3AE3E] bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-110"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
        </a>
        <a 
          href="mailto:phamchom1234321@gmail.com" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:text-[#D3AE3E] hover:border-[#D3AE3E] bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        </a>
        <div className="w-[1px] h-[60px] bg-gradient-to-t from-transparent to-white/30 mt-2"></div>
      </div>
    </section>
  );
}
