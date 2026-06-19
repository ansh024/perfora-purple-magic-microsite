"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  { num: "01", icon: "💧", title: "Pump", desc: "2 pumps onto your toothbrush alongside your regular toothpaste." },
  { num: "02", icon: "🪥", title: "Brush", desc: "Brush gently for 2 minutes, twice daily." },
  { num: "03", icon: "✨", title: "Reveal", desc: "Rinse and see the difference from your very first use." },
];

export default function HowToUse() {
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
    <section ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* ── MOBILE: Horizontal image strip + compact steps ── */}
        <div className="md:hidden">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-3 py-1 mb-3">
              <span className="text-[#7c3aed] text-[10px] tracking-[0.12em] uppercase font-semibold">How To Use</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "24px" }}>
              3 Steps. <em className="text-[#7c3aed]">Twice Daily.</em>
            </h2>

            {/* Lifestyle image */}
            <div className="relative rounded-2xl overflow-hidden mb-4 h-72">
              <Image src="/ai-created/bathroom-lifestyle.png" alt="Purple Magic in use" fill className="object-cover object-center" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/50 to-transparent" />
              {/* Floating badge — top right */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                <div className="text-[#7c3aed] text-xs font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Daily Use</div>
                <div className="text-[#888] text-[9px]">Safe every day</div>
              </div>
              {/* Floating stat — bottom left */}
              <div className="absolute bottom-3 left-3 bg-[#1a0a3d]/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                <div className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>60 sec</div>
                <div className="text-white/60 text-[9px]">Visible results</div>
              </div>
            </div>

            {/* Steps — horizontal compact */}
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1a0a3d] flex items-center justify-center text-base flex-shrink-0">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#a78bfa] text-[9px] font-semibold tracking-widest uppercase">{step.num}</span>
                      <span className="text-[#1a0a3d] font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{step.title}</span>
                    </div>
                    <p className="text-[#999] text-[11px] leading-snug mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-8 bg-[#ede9fe] hidden" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Original two-column layout ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image src="/ai-created/bathroom-lifestyle.png" alt="Purple Magic Serum in use" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl px-6 py-4 border border-[#ede9fe] hidden md:block">
              <div className="text-[#7c3aed] text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Daily Use</div>
              <div className="text-[#888] text-xs mt-0.5">Safe every single day</div>
            </div>
          </div>
          <div className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">How To Use</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold mb-3" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)" }}>
              3 Steps.<br /><em className="text-[#7c3aed]">Twice Daily.</em>
            </h2>
            <p className="text-[#888] mb-12 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Fits seamlessly into your existing routine — no extra time needed.
            </p>
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className={`flex gap-6 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a0a3d] flex items-center justify-center text-lg flex-shrink-0">{step.icon}</div>
                    {i < steps.length - 1 && <div className="w-px h-8 bg-[#ede9fe]" />}
                  </div>
                  <div className="pt-2">
                    <div className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-1">{step.num}</div>
                    <h3 className="text-[#1a0a3d] font-semibold text-xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{step.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
