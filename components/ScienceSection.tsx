"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile: wipe up from bottom
      gsap.from(".science-mobile", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".science-mobile", start: "top 85%" },
      });

      // Desktop: curtain wipe left → right
      gsap.from(".science-desktop", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".science-desktop", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="science" ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-0 overflow-hidden">
      {/* Mobile banner */}
      <div className="science-mobile md:hidden px-5">
        <Image
          src="/ai-created/science-banner-mobile.png"
          alt="Color Correction, Inspired By Beauty Science"
          width={900}
          height={900}
          className="w-full h-auto rounded-2xl"
          sizes="100vw"
        />
      </div>

      {/* Desktop banner — full bleed */}
      <div className="science-desktop hidden md:block">
        <Image
          src="/ai-created/science-banner-desktop.png"
          alt="Color Correction, Inspired By Beauty Science"
          width={1440}
          height={810}
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
