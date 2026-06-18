"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const packs = [
  {
    id: "pack2",
    name: "Starter Pack",
    size: "Pack of 2 · 60ml",
    price: "₹887",
    original: "₹1,098",
    discount: "19% OFF",
    popular: false,
    image: "/product-img/pack-2.png",
    fallback: "/product-img/product-duo.png",
  },
  {
    id: "pack3",
    name: "Best Value",
    size: "Pack of 3 · 90ml",
    price: "₹1,199",
    original: "₹1,500",
    discount: "20% OFF",
    popular: true,
    image: "/product-img/pack-3.png",
    fallback: "/product-img/product-duo-2.png",
  },
];

export default function BuySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("pack3");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activePack = packs.find(p => p.id === selected)!;
  const imgSrc = imgErrors[activePack.id] ? activePack.fallback : activePack.image;

  return (
    <section id="buy" ref={sectionRef} className="bg-[#0a0614] py-10 md:py-36 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-6 md:mb-16 px-5 md:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-4 md:mb-6">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">Get Your Purple Magic</span>
          </div>
          <h2 className="text-white font-bold mb-2 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 5vw, 60px)" }}>
            Your brightest smile<br /><em className="text-[#a78bfa]">starts today.</em>
          </h2>
          <p className="text-white/50 font-light text-sm md:text-base" style={{ fontFamily: "var(--font-inter)" }}>
            Join 6,093 happy customers. Free toothpaste on orders above ₹960.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* ── MOBILE: Full-width 1:1 image, then purchase panel ── */}
          <div className="md:hidden">
            {/* 1:1 square image — edge to edge */}
            <div className="relative w-full aspect-square mb-5 overflow-hidden">
              <div className="absolute inset-0 bg-white" />
              <Image
                key={imgSrc}
                src={imgSrc}
                alt={`Perfora Purple Magic — ${activePack.size}`}
                fill
                className="object-contain object-center transition-opacity duration-300"
                sizes="100vw"
                onError={() => setImgErrors(prev => ({ ...prev, [activePack.id]: true }))}
              />
              {/* Pack toggle overlay at bottom */}
              <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                {packs.map((pack) => (
                  <button key={pack.id} onClick={() => setSelected(pack.id)}
                    className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${selected === pack.id ? "bg-[#7c3aed] text-white" : "bg-white/80 text-[#666] border border-white"}`}
                    style={{ fontFamily: "var(--font-inter)" }}>
                    {pack.size.split(" · ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase panel */}
            <div className="px-5 flex flex-col gap-3">
              {/* Active pack info */}
              <div className="flex items-center justify-between bg-white/5 border border-[#7c3aed]/30 rounded-2xl px-4 py-3">
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{activePack.name}</div>
                  <div className="text-white/50 text-xs">{activePack.size}</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{activePack.price}</div>
                  <div className="text-white/40 text-xs line-through">{activePack.original}</div>
                  <div className="text-[#86efac] text-xs font-semibold">{activePack.discount}</div>
                </div>
              </div>

              {/* Offers row */}
              <div className="flex gap-2">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-sm">🎁</span>
                  <span className="text-white/60 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>Free toothpaste above ₹960</span>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-sm">💳</span>
                  <span className="text-white/60 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>5% off prepaid</span>
                </div>
              </div>

              {/* CTAs */}
              <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm py-3.5 rounded-full text-center transition-all"
                style={{ fontFamily: "var(--font-inter)" }}>
                Add to Cart →
              </a>
              <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                className="w-full border border-white/20 text-white font-medium text-sm py-3.5 rounded-full text-center transition-all"
                style={{ fontFamily: "var(--font-inter)" }}>
                Buy It Now
              </a>

              {/* Trust micro-row */}
              <div className="flex items-center justify-center gap-4 pt-1 pb-2">
                <span className="text-white/40 text-[10px]">⭐ 4.8/5 · 6,093 reviews</span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px]">Peroxide-Free</span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-[10px]">Daily Safe</span>
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Two-column layout ── */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center px-6">
            <div className="relative flex justify-center">
              <div className="relative w-72 md:w-96">
                <div className="absolute inset-0 rounded-full blur-3xl opacity-25"
                  style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
                <Image
                  key={imgSrc}
                  src={imgSrc}
                  alt={`Perfora Purple Magic — ${activePack.size}`}
                  width={500}
                  height={500}
                  className="relative w-full object-contain drop-shadow-2xl transition-opacity duration-300"
                  sizes="45vw"
                  onError={() => setImgErrors(prev => ({ ...prev, [activePack.id]: true }))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {packs.map((pack) => (
                  <button key={pack.id} onClick={() => setSelected(pack.id)}
                    className={`relative text-left rounded-2xl p-5 border-2 transition-all duration-300 ${selected === pack.id ? "border-[#7c3aed] bg-[#7c3aed]/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}>
                    {pack.popular && (
                      <div className="absolute -top-3 left-5 bg-[#7c3aed] text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected === pack.id ? "border-[#7c3aed]" : "border-white/30"}`}>
                            {selected === pack.id && <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />}
                          </div>
                          <span className="text-white font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>{pack.name}</span>
                        </div>
                        <div className="text-white/50 text-sm ml-6">{pack.size}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{pack.price}</div>
                        <div className="text-white/40 text-xs line-through">{pack.original}</div>
                        <div className="text-[#86efac] text-xs font-semibold">{pack.discount}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-green-400 text-lg">🎁</span>
                <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter)" }}>Free toothpaste on orders above ₹960</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-yellow-400 text-lg">💳</span>
                <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter)" }}>Extra 5% off on prepaid orders</span>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-base py-4 rounded-full text-center transition-all hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
                  style={{ fontFamily: "var(--font-inter)" }}>Add to Cart →</a>
                <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                  className="w-full border border-white/20 hover:border-white/40 text-white font-medium text-base py-4 rounded-full text-center transition-all"
                  style={{ fontFamily: "var(--font-inter)" }}>Buy It Now</a>
              </div>
              <div className="flex items-center justify-center gap-6 pt-2 flex-wrap">
                <span className="text-white/50 text-xs">⭐ 4.8/5 · 6,093 reviews</span>
                <span className="text-white/20">·</span>
                <span className="text-white/50 text-xs">Peroxide-Free</span>
                <span className="text-white/20">·</span>
                <span className="text-white/50 text-xs">Daily Safe</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
