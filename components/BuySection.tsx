"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const packs = [
  { id: "pack2", name: "Starter Pack", size: "Pack of 2 · 60ml", price: "₹887",  original: "₹1,098", discount: "19% OFF", popular: false, image: "/ai-created/pack-2.png" },
  { id: "pack3", name: "Best Value",   size: "Pack of 3 · 90ml", price: "₹1,199", original: "₹1,500", discount: "20% OFF", popular: true,  image: "/ai-created/pack-3.png" },
];

export default function BuySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState("pack3");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".buy-header", {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".buy-header", start: "top 85%" },
      });
      gsap.from(".buy-image", {
        scale: 1.08, opacity: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: ".buy-image", start: "top 85%" },
      });
      gsap.from(".buy-pack-card", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".buy-pack-card", start: "top 90%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activePack = packs.find(p => p.id === selected)!;

  return (
    <section id="buy" ref={sectionRef} className="relative py-10 md:py-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f0ff 0%, #fdfcff 40%, #f0ebff 100%)" }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(167,139,250,0.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="buy-header text-center mb-6 md:mb-12 px-5 md:px-6">
          <div className="inline-flex items-center gap-2 bg-[#ede9fe] border border-[#ddd6fe] rounded-full px-4 py-1.5 mb-4 md:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
            <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">Purple Magic Whitening Serum</span>
          </div>
          <h2 className="text-[#1a0a3d] font-bold mb-2 md:mb-3"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 5vw, 56px)" }}>
            The upgrade <em className="text-[#7c3aed]">your teeth deserve.</em>
          </h2>
          <p className="text-[#1a0a3d] font-light text-base md:text-lg" style={{ fontFamily: "var(--font-inter)" }}>
            Join 6,093 happy customers. Free toothpaste on orders above ₹960.
          </p>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden">
          <div className="buy-image relative w-full aspect-square mb-5 overflow-hidden bg-white">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #ede9fe 0%, white 70%)" }} />
            <Image key={activePack.id} src={activePack.image} alt={`Perfora Purple Magic — ${activePack.size}`} fill className="object-contain object-center transition-opacity duration-300 p-6" sizes="100vw" priority />
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              {packs.map((pack) => (
                <button key={pack.id} onClick={() => setSelected(pack.id)}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm ${selected === pack.id ? "bg-[#7c3aed] text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)]" : "bg-white text-[#1a0a3d] border border-[#e5e7eb]"}`}
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {pack.size.split(" · ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 flex flex-col gap-3">
            <div className="buy-pack-card flex items-center justify-between bg-white border-2 border-[#7c3aed] rounded-2xl px-4 py-3 shadow-sm">
              <div>
                <div className="text-[#1a0a3d] font-semibold text-base" style={{ fontFamily: "var(--font-playfair)" }}>{activePack.name}</div>
                <div className="text-[#1a0a3d] text-sm mt-0.5">{activePack.size}</div>
              </div>
              <div className="text-right">
                <div className="text-[#1a0a3d] font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{activePack.price}</div>
                <div className="text-[#666] text-sm line-through">{activePack.original}</div>
                <div className="text-[#16a34a] text-sm font-semibold">{activePack.discount}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-[#f5f0ff] border border-[#ddd6fe] rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="text-sm">🎁</span>
                <span className="text-[#6d28d9] text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>Free toothpaste above ₹960</span>
              </div>
              <div className="flex-1 bg-[#f5f0ff] border border-[#ddd6fe] rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="text-sm">💳</span>
                <span className="text-[#6d28d9] text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>5% off prepaid</span>
              </div>
            </div>
            <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-sm py-4 rounded-full text-center transition-all shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_28px_rgba(124,58,237,0.55)]"
              style={{ fontFamily: "var(--font-inter)" }}>Add to Cart →</a>
            <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
              className="w-full border-2 border-[#7c3aed] text-[#7c3aed] font-semibold text-sm py-3.5 rounded-full text-center transition-all hover:bg-[#f5f0ff]"
              style={{ fontFamily: "var(--font-inter)" }}>Buy It Now</a>
            <div className="flex items-center justify-center gap-3 pt-1 pb-2 flex-wrap">
              <span className="text-[#1a0a3d] text-xs">⭐ 4.8/5 · 6,093 reviews</span>
              <span className="text-[#aaa]">·</span>
              <span className="text-[#1a0a3d] text-xs">Peroxide-Free</span>
              <span className="text-[#aaa]">·</span>
              <span className="text-[#1a0a3d] text-xs">Daily Safe</span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="buy-image relative flex justify-center">
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 100%, #ede9fe 0%, white 75%)" }} />
              <div className="relative bg-white rounded-3xl shadow-[0_8px_40px_rgba(124,58,237,0.12)] border border-[#ede9fe] overflow-hidden p-10">
                <Image key={activePack.id} src={activePack.image} alt={`Perfora Purple Magic — ${activePack.size}`} width={480} height={480} className="w-full object-contain transition-opacity duration-300" sizes="45vw" priority />
              </div>
              <div className="absolute -top-3 -right-3 bg-[#7c3aed] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">{activePack.discount}</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {packs.map((pack) => (
                <button key={pack.id} onClick={() => setSelected(pack.id)}
                  className={`buy-pack-card relative text-left rounded-2xl p-5 border-2 transition-all duration-300 ${selected === pack.id ? "border-[#7c3aed] bg-white shadow-[0_4px_24px_rgba(124,58,237,0.15)]" : "border-[#e5e7eb] bg-white/60 hover:border-[#c4b5fd] hover:bg-white"}`}>
                  {pack.popular && (
                    <div className="absolute -top-3.5 left-5 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md" style={{ background: "linear-gradient(90deg, #7c3aed, #a855f7)" }}>✦ Most Popular</div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selected === pack.id ? "border-[#7c3aed]" : "border-[#d1d5db]"}`}>
                        {selected === pack.id && <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />}
                      </div>
                      <div>
                        <div className="font-semibold text-base text-[#1a0a3d]" style={{ fontFamily: "var(--font-playfair)" }}>{pack.name}</div>
                        <div className="text-[#1a0a3d] text-sm mt-0.5">{pack.size}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-[#1a0a3d]" style={{ fontFamily: "var(--font-playfair)" }}>{pack.price}</div>
                      <div className="text-[#666] text-sm line-through">{pack.original}</div>
                      <div className="text-[#16a34a] text-sm font-semibold">{pack.discount}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#f5f0ff] border border-[#ddd6fe] rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-base">🎁</span>
                <span className="text-[#6d28d9] text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>Free toothpaste on orders above ₹960</span>
              </div>
              <div className="bg-[#f5f0ff] border border-[#ddd6fe] rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-base">💳</span>
                <span className="text-[#6d28d9] text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>Extra 5% off on prepaid orders</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-1">
              <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-base py-4 rounded-full text-center transition-all shadow-[0_6px_24px_rgba(124,58,237,0.4)] hover:shadow-[0_10px_36px_rgba(124,58,237,0.55)]"
                style={{ fontFamily: "var(--font-inter)" }}>Add to Cart →</a>
              <a href="https://perforacare.com/products/purple-magic-whitening-serum" target="_blank" rel="noopener noreferrer"
                className="w-full border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#f5f0ff] font-semibold text-base py-3.5 rounded-full text-center transition-all"
                style={{ fontFamily: "var(--font-inter)" }}>Buy It Now</a>
            </div>
            <div className="flex items-center justify-center gap-4 pt-1 flex-wrap">
              <span className="text-[#1a0a3d] text-sm">⭐ 4.8/5 · 6,093 reviews</span>
              <span className="text-[#ccc]">·</span>
              <span className="text-[#1a0a3d] text-sm">Peroxide-Free</span>
              <span className="text-[#ccc]">·</span>
              <span className="text-[#1a0a3d] text-sm">Daily Safe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
