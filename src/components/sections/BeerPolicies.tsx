import SectionStarryMotif from '../ui/SectionStarryMotif';
import React from 'react';

const POLICIES = [
  {
    id: 1,
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Chất Lượng Chính Hãng',
    desc: 'Cam kết 100% bia hơi Hà Nội (Habeco) xuất xưởng chính hãng, đảm bảo hương vị truyền thống chuẩn nhất.'
  },
  {
    id: 2,
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Bảo Quản Tiêu Chuẩn',
    desc: 'Kho lạnh đạt chuẩn và hệ thống xe giao hàng chuyên dụng, giữ bia luôn đạt độ lạnh sâu lý tưởng khi đến tay khách hàng.'
  },
  {
    id: 3,
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    title: 'Giao Hàng Tốc Độ',
    desc: 'Giao bia tận nơi đúng giờ, hỗ trợ khẩn cấp nhanh chóng cho các điểm bán trong tình huống hết bia đột xuất.'
  },
  {
    id: 4,
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'Chiết Khấu Hấp Dẫn',
    desc: 'Chính sách giá sỉ cực kỳ cạnh tranh, thưởng doanh số định kỳ và hỗ trợ vật tư bán hàng tối đa.'
  }
];

export default function BeerPolicies({ className }: { className?: string }) {
  return (
    <section id="quality" className={`overflow-hidden py-24 bg-transparent dark:bg-transparent modern-section relative border-t border-[#ECE7DE] dark:border-white/20 ${className || ''}`}>
      <SectionStarryMotif />
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#C7A25C]/10 border border-[#C7A25C]/20 text-[#A67C00] dark:text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4 luxury-glow">
            Tổng Đại Lý Phân Phối Cấp 1
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1F1F1F] dark:text-white mb-6 uppercase">
            Tiêu Chuẩn Đại Lý <span className="text-[#C7A25C]">Habeco</span>
          </h2>
          <p className="text-gray-500 dark:text-[#888] max-w-2xl mx-auto text-lg">
            Tự hào là đại lý phân phối bia hơi Hà Nội Habeco uy tín, chúng tôi mang đến chính sách chiết khấu tốt nhất và hỗ trợ mở điểm bán toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POLICIES.map((policy) => (
            <div key={policy.id} className="card dark:bg-[#1a1a1a] border border-[#ECE7DE] dark:border-white/20 p-8 hover:border-[#C7A25C]/50 hover:-translate-y-2 transition-all duration-300 luxury-glow group">
              <div className="w-16 h-16 bg-[#C7A25C]/10 rounded-[4px] flex items-center justify-center mb-6 text-[#C7A25C] group-hover:bg-[#C7A25C] group-hover:text-white transition-colors rotate-3 group-hover:-rotate-3 duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={policy.icon} />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1F1F1F] dark:text-white mb-4 group-hover:text-[#C7A25C] transition-colors">{policy.title}</h3>
              <p className="text-gray-500 dark:text-[#888] leading-relaxed text-sm">
                {policy.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
