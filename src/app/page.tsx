"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/sections/HeroSlider";
import HotBeers from "@/components/sections/HotBeers";
import BeerPolicies from "@/components/sections/BeerPolicies";
import BeerIngredients from "@/components/sections/BeerIngredients";
import BeerProcess from "@/components/sections/BeerProcess";
import DealerSupport from "@/components/sections/DealerSupport";
import BeerBlog from "@/components/sections/BeerBlog";
import BackgroundVisuals from "@/components/ui/BackgroundVisuals";
import FloatingContact from "@/components/ui/FloatingContact";
import SectionStarryMotif from "@/components/ui/SectionStarryMotif";
import PromoPopup from "@/components/ui/PromoPopup";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full relative overflow-hidden modern-section"
    >
      <SectionStarryMotif position="random-corner" />

      {/* Ambient Light Blobs from noithat-main */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D3AE3E]/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#D3AE3E]/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-[#D3AE3E]/10 blur-[150px]" />
      </div>

      <BackgroundVisuals mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="relative z-10">
        <Header />

        {/* 1: Hero Slider (First Impression) */}
        <HeroSlider />

        {/* 2 & 3: Trust & Brand Story */}
        <BeerPolicies />
        <BeerIngredients />
        <BeerProcess />

        {/* 4: Showcasing Products */}
        <HotBeers />

        {/* 5: Business Conversion CTA */}
        <DealerSupport />

        {/* 6: Knowledge & News */}
        <BeerBlog />

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Quick Action Contacts (Zalo, Scroll to top) */}
      <FloatingContact />

      {/* First-time visitor Promo Popup */}
      <PromoPopup />
    </div>
  );
}
