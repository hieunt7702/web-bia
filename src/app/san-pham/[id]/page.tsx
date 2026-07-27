'use client';
import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';
import BackgroundVisuals from '@/components/ui/BackgroundVisuals';
import { PRODUCTS } from '@/data/products';
import { Info, CheckCircle2, PhoneCall } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Get 4 other products for the related section
  const relatedProducts = PRODUCTS.filter((p) => p.id !== productId).slice(0, 4);

  return (
    <div className="w-full relative overflow-hidden modern-section min-h-screen bg-[#050505]">
      {/* Background Visuals & Starry Motif */}
      <BackgroundVisuals />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D3AE3E]/10 blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[30%] h-[40%] rounded-full bg-[#D3AE3E]/5 blur-[100px]" />
        {/* Grid Dot Pattern (from BeerIngredients) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Breadcrumbs */}
        <div className="pt-52 md:pt-60 px-6 max-w-[1400px] w-full mx-auto relative">
          <SectionStarryMotif />
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#D3AE3E] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-[#D3AE3E] transition-colors">Sản phẩm</Link>
            <span>/</span>
            <span className="text-[#D3AE3E]">{product.name}</span>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="max-w-[1400px] w-full mx-auto px-6 py-8 md:py-12 flex-1">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left: Image Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[3/4] sm:aspect-square lg:aspect-[4/5] bg-[#131313] rounded-[4px] border border-white/10 flex items-center justify-center p-8 overflow-hidden luxury-glow group">
                {/* Background glow for the image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,174,62,0.15)_0%,transparent_70%)]" />
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md text-[#D3AE3E] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[2px] border border-[#D3AE3E]/30 z-20">
                  {product.category}
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-white/10">
                <span className="text-3xl font-bold text-[#D3AE3E]">{product.price}</span>
                <span className="text-gray-400 text-sm">(Vui lòng liên hệ để có giá sỉ đại lý tốt nhất)</span>
              </div>

              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4 uppercase tracking-wider">
                  <Info className="w-5 h-5 text-[#D3AE3E]" />
                  Thông tin sản phẩm
                </h3>
                <p className="text-gray-400 leading-relaxed text-[15px] mb-6">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#131313] p-4 rounded-[4px] border border-white/5">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Nồng độ cồn</div>
                    <div className="text-white font-bold text-lg">{product.abv}</div>
                  </div>
                  <div className="bg-[#131313] p-4 rounded-[4px] border border-white/5">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Dung tích</div>
                    <div className="text-white font-bold text-lg">{product.volume}</div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Lợi ích cho điểm bán</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D3AE3E] shrink-0" />
                    <span>Cam kết chất lượng 100% chính hãng từ nhà máy Habeco.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D3AE3E] shrink-0" />
                    <span>Hỗ trợ bảo quản lạnh tiêu chuẩn, đảm bảo hương vị tươi mới.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D3AE3E] shrink-0" />
                    <span>Giao hàng nhanh chóng, hỗ trợ trang thiết bị tận nơi.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0969960001"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D3AE3E] text-black font-bold uppercase tracking-wider text-[13px] py-4 px-8 rounded-[4px] hover:bg-[#e5c98a] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Gọi Tư Vấn Ngay
                </a>
                <a 
                  href="https://zalo.me/0969960001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#131313] text-white border border-white/20 font-bold uppercase tracking-wider text-[13px] py-4 px-8 rounded-[4px] hover:bg-white/10 transition-colors"
                >
                  Nhắn Tin Zalo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="max-w-[1400px] w-full mx-auto px-6 py-16 border-t border-white/10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-8">
              Sản Phẩm <span className="text-[#C7A25C]">Liên Quan</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/san-pham/${p.id}`} className="group block relative w-full overflow-hidden rounded-[4px] bg-[#131313] luxury-glow border border-white/10 hover:border-[#C7A25C]/50 transition-colors duration-500">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/40">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <h3 className="font-heading text-lg font-bold text-white mb-1 line-clamp-1">
                        {p.name}
                      </h3>
                      <p className="text-[#C7A25C] font-semibold text-xs mb-3">
                        {p.price}
                      </p>
                      <span className="flex items-center gap-2 text-xs font-bold uppercase text-white/50 group-hover:text-[#D3AE3E] transition-colors">
                        Xem chi tiết <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Footer />
      </div>
      <FloatingContact />
    </div>
  );
}
