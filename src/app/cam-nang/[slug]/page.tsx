import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import SectionStarryMotif from '@/components/ui/SectionStarryMotif';
import { POSTS } from '@/data/posts';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
    };
  }

  return {
    title: post.seoTitle,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.excerpt,
      type: 'article',
      url: `https://biahoituanngoc.com/cam-nang/${post.slug}`,
      images: [
        {
          url: post.img,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle,
    image: post.img,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Đại Lý Phân Phối Bia Hơi Hà Nội Tuấn Ngọc',
      logo: {
        '@type': 'ImageObject',
        url: 'https://biahoituanngoc.com/images/logo.png',
      },
    },
    datePublished: post.date, // Note: In a real app, use ISO string
    description: post.excerpt,
  };

  return (
    <div className="w-full relative min-h-screen bg-[#0a0a0a] overflow-hidden modern-section">
      <SectionStarryMotif />
      {/* Texture & Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(199,162,92,0.1)_0%,transparent_70%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Header />

      <main className="pt-48 md:pt-52 pb-24 px-6 max-w-[1400px] mx-auto relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Article Header */}
        <div className="mb-12 text-center">
          <Link href="/cam-nang" className="inline-flex items-center gap-2 text-[#D3AE3E] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Quay lại Cẩm Nang
          </Link>
          <div className="flex items-center justify-center gap-4 mb-6 text-[#888] text-sm uppercase tracking-widest font-medium">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-[#D3AE3E] rounded-full"></span>
            <span>{post.author}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.3] drop-shadow-lg">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden border border-white/10 mb-16 luxury-glow">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-[#D3AE3E] prose-h2:text-3xl prose-h3:text-2xl prose-a:text-[#D3AE3E] hover:prose-a:text-white prose-img:rounded-[4px] prose-img:border prose-img:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags at bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
          <span className="text-[#888] text-[13px] font-bold uppercase tracking-widest mr-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            Từ khóa:
          </span>
          {post.tags.map((tag, idx) => (
            <Link key={idx} href="/cam-nang" className="px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#D3AE3E] hover:text-black border border-white/5 rounded-[2px] text-[#aaa] transition-colors text-xs uppercase tracking-wider font-medium">
              {tag}
            </Link>
          ))}
        </div>
        
        {/* Call to Action Bottom */}
        <div className="mt-20 p-8 md:p-12 border border-[#D3AE3E]/30 bg-[#111] rounded-[4px] text-center luxury-glow relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614315585098-d101230e9d6d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
           <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-widest mb-4">
                Sẵn Sàng Mở Điểm Bán?
              </h3>
              <p className="text-[#888] mb-8 max-w-xl mx-auto">
                Liên hệ ngay hôm nay để nhận báo giá chiết khấu tốt nhất và toàn bộ đặc quyền hỗ trợ từ Tuấn Ngọc.
              </p>
              <Link 
                href="tel:0969960001"
                className="inline-flex items-center gap-2 border border-[#D3AE3E]/50 text-[#D3AE3E] hover:bg-[#D3AE3E] hover:text-black font-bold uppercase tracking-widest py-3 px-8 transition-all duration-300 rounded-[2px] shadow-[0_0_15px_rgba(211,174,62,0.2)] hover:shadow-[0_0_20px_rgba(211,174,62,0.5)]"
              >
                Nhận Báo Giá Ngay
              </Link>
           </div>
        </div>

      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
