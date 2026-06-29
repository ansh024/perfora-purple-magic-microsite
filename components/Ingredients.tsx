"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ingredients = [
  { icon: "🟣", name: "Purple Pigment",       role: "Color Correction",       desc: "Instantly neutralizes yellow tones. Results visible in 60 seconds.", bg: "#f5f3ff", border: "#ddd6fe", label: "#7c3aed" },
  { icon: "🦷", name: "Nano Hydroxyapatite",  role: "Enamel Repair",          desc: "Remineralizes and strengthens enamel with every brush.",            bg: "#f0f9ff", border: "#bae6fd", label: "#0369a1" },
  { icon: "🍍", name: "Bromelain & Papain",   role: "Enzymatic Stain Removal",desc: "Pineapple & Papaya derived enzymes that gently break down protein-bound stains.", bg: "#fefce8", border: "#fef08a", label: "#a16207" },
];

export default function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from(".ing-header", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".ing-header", start: "top 85%" },
      });

      // Cards — subtle rotateX flip-in with stagger
      gsap.from(".ing-card", {
        rotateX: 18, y: 50, opacity: 0, stagger: 0.12, duration: 0.9,
        ease: "power3.out", transformOrigin: "top center",
        scrollTrigger: { trigger: ".ing-card", start: "top 85%" },
      });

      // Image scale reveal
      gsap.from(".ing-image", {
        scale: 1.08, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".ing-image", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f0720] py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="ing-header mb-5 md:mb-10">
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-3 md:mb-5">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">What&apos;s Inside</span>
          </div>
          <h2 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 52px)" }}>
            Science you can see.<br />
            <em className="text-[#a78bfa]">Ingredients you can trust.</em>
          </h2>
          <p className="text-white/40 font-light leading-relaxed text-sm md:text-base" style={{ fontFamily: "var(--font-inter)" }}>
            No fillers.*
          </p>
        </div>

        {/* ── MOBILE: 2-col grid + image ── */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-2.5 mb-4" style={{ perspective: "800px" }}>
            {ingredients.map((ing) => (
              <div key={ing.name} className="ing-card rounded-2xl p-3.5 border" style={{ background: ing.bg, borderColor: ing.border }}>
                <div className="text-xl mb-1.5">{ing.icon}</div>
                <div className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: ing.label }}>{ing.role}</div>
                <div className="font-bold text-[#1a0a3d] text-sm mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{ing.name}</div>
                <p className="text-[#444] text-xs leading-snug" style={{ fontFamily: "var(--font-inter)" }}>{ing.desc}</p>
              </div>
            ))}
          </div>
          <div className="ing-image rounded-2xl overflow-hidden">
            <Image src="/ai-created/why-purple-new.png" alt="Why Purple Works" width={900} height={900} className="w-full h-auto" sizes="100vw" />
          </div>
        </div>

        {/* ── DESKTOP: Two-column ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch" style={{ perspective: "1000px" }}>
          <div className="flex flex-col gap-4">
            {ingredients.map((ing) => (
              <div key={ing.name} className="ing-card flex-1 rounded-2xl p-5 flex gap-4 items-center border" style={{ background: ing.bg, borderColor: ing.border }}>
                <div className="text-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">{ing.icon}</div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: ing.label }}>{ing.role}</div>
                  <h3 className="font-bold text-[#1a0a3d] text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{ing.name}</h3>
                  <p className="text-[#444] text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ing-image rounded-3xl overflow-hidden">
            <Image src="/ai-created/why-purple-new.png" alt="Why Purple Works" width={600} height={600} className="w-full h-full object-cover" sizes="50vw" />
          </div>
        </div>

      </div>
    </section>
  );
}
