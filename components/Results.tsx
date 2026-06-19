"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className={`text-center mb-6 md:mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-3 md:mb-6">
            <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">Real Results</span>
          </div>
          <h2 className="text-[#1a0a3d] font-bold"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 52px)" }}>
            See the Transformation.
          </h2>
        </div>

        {/* Transformation banner */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Mobile banner */}
          <div className="md:hidden rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/ai-created/transformation-banner-mobile.png"
              alt="Before, During and After using Perfora Purple Magic Whitening Serum"
              width={900}
              height={900}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
          {/* Desktop banner */}
          <div className="hidden md:block rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/ai-created/transformation-banner-desktop.png"
              alt="Before, During and After using Perfora Purple Magic Whitening Serum"
              width={1536}
              height={600}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
