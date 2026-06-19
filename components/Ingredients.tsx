"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ingredients = [
  { icon: "🟣", name: "Purple Pigment", role: "Color Correction", desc: "Instantly neutralizes yellow tones. Results visible in 60 seconds.", bg: "#f5f3ff", border: "#ddd6fe", label: "#7c3aed" },
  { icon: "🦷", name: "Nano Hydroxyapatite", role: "Enamel Repair", desc: "Remineralizes and strengthens enamel with every brush.", bg: "#f0f9ff", border: "#bae6fd", label: "#0369a1" },
  { icon: "🍍", name: "Bromelain", role: "Stain Removal", desc: "Pineapple-derived enzyme that breaks down protein-bound stains.", bg: "#fefce8", border: "#fef08a", label: "#a16207" },
  { icon: "🌿", name: "Papain", role: "Plaque Defense", desc: "Papaya enzyme for gentle stain removal and lasting cleanliness.", bg: "#f0fdf4", border: "#bbf7d0", label: "#15803d" },
];

export default function Ingredients() {
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
    <section ref={sectionRef} className="bg-[#0f0720] py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className={`mb-5 md:mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-3 md:mb-5">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">What&apos;s Inside</span>
          </div>
          <h2 className="text-white font-bold mb-2"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 52px)" }}>
            Science you can see.<br />
            <em className="text-[#a78bfa]">Ingredients you can trust.</em>
          </h2>
          <p className="text-white/40 font-light leading-relaxed text-sm md:text-base" style={{ fontFamily: "var(--font-inter)" }}>
            No filler. No harsh chemicals. Just what works.
          </p>
        </div>

        {/* ── MOBILE: 2×2 ingredient grid + image ── */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className={`rounded-2xl p-3.5 border transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ background: ing.bg, borderColor: ing.border, transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-xl mb-1.5">{ing.icon}</div>
                <div className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: ing.label }}>{ing.role}</div>
                <div className="font-bold text-[#1a0a3d] text-sm mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{ing.name}</div>
                <p className="text-[#444] text-xs leading-snug" style={{ fontFamily: "var(--font-inter)" }}>{ing.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Purple Works image */}
          <div className={`rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <Image
              src="/ai-created/why-purple-new.png"
              alt="Why Purple Works"
              width={900}
              height={900}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>

        {/* ── DESKTOP: Two-column, image height matches cards ── */}
        <div className={`hidden md:grid md:grid-cols-2 gap-8 items-stretch transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Left: ingredient cards */}
          <div className="flex flex-col gap-4">
            {ingredients.map((ing, i) => (
              <div key={ing.name}
                className={`rounded-2xl p-5 flex gap-4 items-start border transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ background: ing.bg, borderColor: ing.border, transitionDelay: `${i * 100}ms` }}>
                <div className="text-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">{ing.icon}</div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: ing.label }}>{ing.role}</div>
                  <h3 className="font-bold text-[#1a0a3d] text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{ing.name}</h3>
                  <p className="text-[#444] text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: image fills the full height of the cards column */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/ai-created/why-purple-new.png"
              alt="Why Purple Works"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
