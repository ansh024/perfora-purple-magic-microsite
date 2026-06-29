"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const videos = [
  { id: 1, reviewer: "Priya M.",   location: "Mumbai",    rating: 5, price: "₹887",   label: "Pack of 2", img: "/ai-created/model-holding.png", gradient: null },
  { id: 2, reviewer: "Ananya S.",  location: "Bangalore", rating: 5, price: "₹1,199", label: "Pack of 3", img: null, gradient: "from-[#3b0764] via-[#6d28d9] to-[#a855f7]" },
  { id: 3, reviewer: "Meera J.",   location: "Pune",      rating: 5, price: "₹887",   label: "Pack of 2", img: "/ai-created/model-holding.png", gradient: null },
  { id: 4, reviewer: "Rahul K.",   location: "Delhi",     rating: 5, price: "₹1,199", label: "Pack of 3", img: null, gradient: "from-[#1e1b4b] via-[#4338ca] to-[#7c3aed]" },
  { id: 5, reviewer: "Vikram T.",  location: "Chennai",   rating: 5, price: "₹887",   label: "Pack of 2", img: null, gradient: "from-[#4c1d95] via-[#7c3aed] to-[#c084fc]" },
  { id: 6, reviewer: "Shreya P.",  location: "Hyderabad", rating: 5, price: "₹1,199", label: "Pack of 3", img: null, gradient: "from-[#2e1065] via-[#5b21b6] to-[#8b5cf6]" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-[#f59e0b]" : "text-[#e5e7eb]"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function VideoReviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vr-header", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".vr-header", start: "top 85%" },
      });
      gsap.from(".vr-card", {
        x: 80, opacity: 0, stagger: 0.09, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".vr-card", start: "top 90%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0614] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="vr-header px-5 md:px-6 mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-3 md:mb-5">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">Video Reviews</span>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-white font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 48px)" }}>
              Real people.<br className="md:hidden" />{" "}
              <em className="text-[#a78bfa]">Real results.</em>
            </h2>
            <span className="text-white/40 text-xs md:text-sm hidden md:block" style={{ fontFamily: "var(--font-inter)" }}>6,093+ verified buyers</span>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-5 md:px-6 scrollbar-hide snap-x snap-mandatory">
          {videos.map((v) => (
            <div key={v.id} className="vr-card flex-shrink-0 w-[192px] md:w-[240px] snap-start">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3 cursor-pointer group">
                {v.img ? (
                  <Image src={v.img} alt={v.reviewer} fill className="object-cover object-top" sizes="200px" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-b ${v.gradient}`} />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1a0a3d] text-[9px] font-semibold">Verified</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#7c3aed] ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5">
                  <div className="text-[#1a0a3d] font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{v.price}</div>
                  <div className="text-[#666] text-[9px]">{v.label}</div>
                </div>
              </div>
              <StarRating count={v.rating} />
              <div className="text-white/60 text-[10px] mt-1" style={{ fontFamily: "var(--font-inter)" }}>Verified review · {v.location}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
