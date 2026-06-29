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
