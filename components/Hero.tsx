"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!productRef.current) return;
      const y = window.scrollY;
      productRef.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center">
      {/* Background hero image — mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/ai-created/hero-mobile.png"
          alt="Purple Beats Yellow"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>
      {/* Background hero image — desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/ai-created/hero-desktop.png"
          alt="Purple Beats Yellow"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-white/80 text-xs tracking-[0.15em] uppercase font-medium">
              Color Correction · Beauty Science
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-bold leading-[0.9] mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(44px, 6.8vw, 82px)",
            }}
          >
            Purple
            <br />
            <em className="text-[#a78bfa]">Beats</em>
            <br />
            Yellow.
          </h1>

          {/* Subline */}
          <p className="text-white/70 text-base md:text-[22px] font-light leading-relaxed mb-10 max-w-none" style={{ fontFamily: "var(--font-inter)" }}>
            Visible teeth whitening in{" "}
            <span className="text-white font-medium">60 seconds</span>.<br />
            No gimmick. Just science.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)]"
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#science"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-light pt-1 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1"/>
                <path d="M8 5v6M5 8l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              See how it works
            </a>
          </div>

          {/* Review micro-stat */}
          <div className="flex items-center gap-3 mt-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#a78bfa]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm">
              <span className="text-white font-medium">6,093</span> verified reviews
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
