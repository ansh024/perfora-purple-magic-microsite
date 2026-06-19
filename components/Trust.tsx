"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const promises = [
  { icon: "🚫", title: "Zero Peroxide", desc: "No bleaching agents. Ever." },
  { icon: "🦷", title: "Enamel-Safe", desc: "Strengthens as it whitens." },
  { icon: "🔁", title: "Daily Safe", desc: "Built for everyday use." },
  { icon: "🌱", title: "100% Vegan", desc: "Cruelty-free formula." },
  { icon: "✓", title: "SLS-Free", desc: "No harsh surfactants." },
  { icon: "🔬", title: "Science-Backed", desc: "Color correction technology." },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* ── MOBILE: Image banner + compact promise grid ── */}
        <div className="md:hidden">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-3 py-1 mb-3">
              <span className="text-[#7c3aed] text-[10px] tracking-[0.12em] uppercase font-semibold">The Perfora Promise</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "22px" }}>
              Safe enough for <em className="text-[#7c3aed]">every smile.</em>
            </h2>

            {/* Model image */}
            <div className="relative rounded-2xl overflow-hidden mb-4 h-80">
              <Image src="/ai-created/model-holding.png" alt="Perfora Purple Magic" fill className="object-cover object-top" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/60 to-transparent" />
              {/* Floating pill — top right */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                <span className="text-[#1a0a3d] text-[10px] font-semibold">Peroxide-Free</span>
              </div>
              {/* Floating card — bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                  <div className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>Confidence starts here.</div>
                  <div className="text-white/60 text-[10px]">Results you can see. Science you can trust.</div>
                </div>
              </div>
            </div>

            {/* Promise grid 2×3 */}
            <div className="grid grid-cols-3 gap-2">
              {promises.map((p, i) => (
                <div key={p.title}
                  className={`bg-white border border-[#f3f4f6] rounded-xl p-3 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="text-lg mb-1">{p.icon}</div>
                  <div className="text-[#1a0a3d] font-semibold text-[10px] leading-tight mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</div>
                  <div className="text-[#444] text-xs" style={{ fontFamily: "var(--font-inter)" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Two-column layout ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <Image src="/ai-created/model-holding.png" alt="Perfora Purple Magic" fill className="object-cover object-top" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Confidence starts here.</div>
                <div className="text-white/60 text-sm">Results you can see. Science you can trust.</div>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">The Perfora Promise</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)" }}>
              Safe enough for<br /><em className="text-[#7c3aed]">every smile.</em>
            </h2>
            <p className="text-[#444] mb-10 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Formulated with care for sensitive teeth, daily users, and anyone let down by harsh whitening before.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {promises.map((p, i) => (
                <div key={p.title}
                  className={`bg-white border border-[#f3f4f6] rounded-2xl p-4 hover:border-[#ddd6fe] hover:shadow-sm transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}>
                  <div className="text-xl mb-2">{p.icon}</div>
                  <div className="text-[#1a0a3d] font-semibold text-sm mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</div>
                  <div className="text-[#444] text-sm" style={{ fontFamily: "var(--font-inter)" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
