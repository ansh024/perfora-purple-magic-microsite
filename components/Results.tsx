"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wipe up from bottom
      gsap.from(".results-banner", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: ".results-banner", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="results-banner">
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
