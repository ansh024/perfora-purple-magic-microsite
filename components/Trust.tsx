"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const promises = [
  { icon: "🚫", title: "Zero Peroxide",  desc: "No bleaching agents. Ever." },
  { icon: "🦷", title: "Enamel-Safe",    desc: "Strengthens as it whitens." },
  { icon: "🔁", title: "Daily Safe",     desc: "Built for everyday use." },
  { icon: "🌱", title: "100% Vegan",     desc: "Cruelty-free formula." },
  { icon: "✓",  title: "SLS-Free",       desc: "No harsh surfactants." },
  { icon: "🔬", title: "Science-Backed", desc: "Color correction technology." },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Model image parallax (scrub)
      gsap.to(".trust-image", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: ".trust-image", start: "top bottom", end: "bottom top", scrub: true },
      });

      // Header
      gsap.from(".trust-header", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".trust-header", start: "top 85%" },
      });

      // Promise cards stagger
      gsap.from(".promise-card", {
        y: 40, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".promise-card", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* ── MOBILE ── */}
        <div className="md:hidden">
          <div className="trust-header">
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-3 py-1 mb-3">
              <span className="text-[#7c3aed] text-[10px] tracking-[0.12em] uppercase font-semibold">The Perfora Promise</span>
            </div>
            <h2 className="text-[#1a0a3d] font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "22px" }}>
              Safe enough for <em className="text-[#7c3aed]">every smile.</em>
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-4 h-80">
            <div className="trust-image absolute inset-0 scale-110">
              <Image src="/ai-created/model-holding.png" alt="Perfora Purple Magic" fill className="object-cover object-top" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/60 to-transparent" />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
              <span className="text-[#1a0a3d] text-[10px] font-semibold">Peroxide-Free</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>Confidence starts here.</div>
                <div className="text-white/60 text-[10px]">Results you can see. Science you can trust.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {promises.map((p) => (
              <div key={p.title} className="promise-card bg-white border border-[#f3f4f6] rounded-xl p-3">
                <div className="text-lg mb-1">{p.icon}</div>
                <div className="text-[#1a0a3d] font-semibold text-[10px] leading-tight mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</div>
                <div className="text-[#444] text-xs" style={{ fontFamily: "var(--font-inter)" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
            <div className="trust-image absolute inset-0 scale-110">
              <Image src="/ai-created/model-holding.png" alt="Perfora Purple Magic" fill className="object-cover object-top" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3d]/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Confidence starts here.</div>
              <div className="text-white/60 text-sm">Results you can see. Science you can trust.</div>
            </div>
          </div>

          <div>
            <div className="trust-header">
              <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">The Perfora Promise</span>
              </div>
              <h2 className="text-[#1a0a3d] font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)" }}>
                Safe enough for<br /><em className="text-[#7c3aed]">every smile.</em>
              </h2>
              <p className="text-[#444] mb-10 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Formulated with care for sensitive teeth, daily users, and anyone let down by harsh whitening before.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {promises.map((p) => (
                <div key={p.title} className="promise-card bg-white border border-[#f3f4f6] rounded-2xl p-4 hover:border-[#ddd6fe] hover:shadow-sm transition-all duration-300">
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
