"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="science" ref={sectionRef} className="bg-[#faf9f7] py-8 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* ── MOBILE: Ultra-compact one-glance layout ── */}
        <div className="md:hidden">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-3 py-1 mb-3">
              <span className="text-[#7c3aed] text-[10px] tracking-[0.12em] uppercase font-semibold">Why Purple Works</span>
            </div>

            {/* Headline + mini color wheel */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1">
                <h2 className="text-[#1a0a3d] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "20px" }}>
                  Color Correction,<br /><em className="text-[#7c3aed]">By Science</em>
                </h2>
                <p className="text-[#888] text-[11px] leading-relaxed mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                  Purple cancels yellow on contact — same science as purple shampoo.
                </p>
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                <Image src="/ai-created/color-wheel-2.png" alt="Color wheel" width={80} height={80} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 3-col bullet row */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { icon: "🟡", label: "Yellow stains", sub: "Coffee & tea" },
                { icon: "🟣", label: "Purple cancels", sub: "On contact" },
                { icon: "✨", label: "60s results", sub: "No bleach" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#f0f0f0] rounded-xl p-2 text-center">
                  <div className="text-base mb-0.5">{item.icon}</div>
                  <div className="text-[#1a0a3d] font-semibold text-[9px] leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{item.label}</div>
                  <div className="text-[#bbb] text-[8px] mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Safety badges inline */}
            <div className="flex flex-wrap gap-1.5">
              {["Peroxide-Free", "Enamel-Safe", "No Bleach", "SLS-Free"].map((badge) => (
                <span key={badge} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">✓ {badge}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Full layout ── */}
        <div className="hidden md:block">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">Why Purple Works</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 5vw, 56px)" }}>
              Color Correction,<br /><em className="text-[#7c3aed]">Inspired by Beauty Science</em>
            </h2>
            <p className="text-[#666] text-lg font-light max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Purple and yellow are opposites on the color wheel. When purple meets yellow stains, they cancel each other out — instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-900 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ai-created/color-wheel-2.png" alt="Color correction" width={600} height={500} className="w-full object-cover" sizes="50vw" />
              </div>
            </div>
            <div className={`flex flex-col gap-6 transition-all duration-900 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              {[
                { bg: "#fef9c3", icon: "🟡", title: "Yellow causes dullness", desc: "Coffee, tea, and food build up yellow-toned stains on tooth surfaces over time." },
                { bg: "#ede9fe", icon: "🟣", title: "Purple neutralizes instantly", desc: "Purple pigment sits directly opposite yellow on the color wheel — neutralizes on contact." },
                { bg: "#dcfce7", icon: "✨", title: "Whiter in 60 seconds", desc: "No bleaching. No peroxide. Just color science — the same principle used in purple shampoo." },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl" style={{ background: item.bg }}>{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#1a0a3d] mb-1" style={{ fontFamily: "var(--font-playfair)", fontSize: "18px" }}>{item.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Peroxide-Free", "Enamel-Safe", "No Bleach", "SLS-Free"].map((badge) => (
                  <span key={badge} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">✓ {badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
