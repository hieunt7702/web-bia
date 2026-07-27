import SectionStarryMotif from '../ui/SectionStarryMotif';
import React from 'react';
import Link from 'next/link';

const SUPPORTS = [
  {
    id: 1,
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Hỗ Trợ Từ A-Z',
    desc: 'Khởi nghiệp chưa bao giờ dễ dàng đến thế. Chúng tôi hỗ trợ tư vấn mặt bằng, thiết lập quy trình vận hành và đào tạo nhân sự bài bản từ những bước đầu tiên.'
  },
  {
    id: 2,
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Tủ Bảo Quản Chuyên Dụng',
    desc: 'Tài trợ hệ thống tủ lạnh, tủ bảo quản chuyên dụng đạt chuẩn quốc tế, giúp bia luôn duy trì được độ lạnh và hương vị nguyên bản tuyệt hảo.'
  },
  {
    id: 3,
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    title: 'Áo & Cốc Nhận Diện',
    desc: 'Cung cấp đồng phục nhân viên thiết kế riêng, hệ thống ly cốc, lót ly in logo đồng bộ, nâng tầm không gian thưởng thức của điểm bán.'
  },
  {
    id: 4,
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Biển Hiệu & Mô Hình',
    desc: 'Hỗ trợ lên ý tưởng không gian, tài trợ thi công biển bảng quảng cáo để tạo ấn tượng mạnh mẽ và thu hút thực khách ngay từ cái nhìn đầu tiên.'
  }
];

export default function DealerSupport({ className }: { className?: string }) {
  return (
    <section id="dealer-support" className={`overflow-hidden py-24 bg-transparent dark:bg-transparent modern-section relative border-t border-[#ECE7DE] dark:border-white/20 ${className || ''}`}>
      <SectionStarryMotif />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#C7A25C]/10 border border-[#C7A25C]/20 text-[#A67C00] dark:text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4 luxury-glow">
            Đồng Hành Phát Triển
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1F1F1F] dark:text-white mb-6 uppercase">
            Hỗ Trợ <span className="text-[#C7A25C]">Mở Điểm Bán</span>
          </h2>
          <p className="text-gray-500 dark:text-[#888] max-w-2xl mx-auto text-lg">
            Trở thành điểm bán bia hơi Hà Nội Habeco của Tuấn Ngọc để nhận báo giá chiết khấu tốt nhất và đặc quyền hỗ trợ toàn diện.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SUPPORTS.map((support) => (
            <div key={support.id} className="card dark:bg-[#1a1a1a] rounded-[4px] border border-[#ECE7DE] dark:border-white/20 p-8 hover:border-[#C7A25C]/50 hover:-translate-y-2 transition-all duration-300 luxury-glow group bg-white">
              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 bg-[#C7A25C]/10 rounded-[4px] flex items-center justify-center text-[#C7A25C] group-hover:bg-[#C7A25C] group-hover:text-white transition-colors duration-300 border border-[#C7A25C]/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={support.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1F1F] dark:text-white mb-3 group-hover:text-[#C7A25C] transition-colors uppercase tracking-wide">
                    {support.title}
                  </h3>
                  <p className="text-gray-500 dark:text-[#888] leading-relaxed text-[15px]">
                    {support.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="relative w-full rounded-[4px] overflow-hidden bg-[#111] border border-[#C7A25C]/30 luxury-glow">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614315585098-d101230e9d6d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-12 gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 uppercase">
                Nhận Báo Giá Bia Hơi Hà Nội Mới Nhất?
              </h3>
              <p className="text-[#999] text-base max-w-lg">
                Đội ngũ của tổng đại lý Tuấn Ngọc luôn sẵn sàng tư vấn chi tiết các gói chiết khấu và hỗ trợ mở điểm bán bia hơi hoàn toàn miễn phí.
              </p>
            </div>
            <Link 
              href="tel:0969960001"
              className="btn-glow-motion shrink-0 flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFE066] to-[#D3AE3E] text-black font-bold uppercase tracking-widest px-8 py-4 rounded-[4px] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Gọi Tư Vấn Ngay
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
