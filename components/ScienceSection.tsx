"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScienceSection() {
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
    <section id="science" ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-0 overflow-hidden">
      <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        {/* Mobile banner */}
        <div className="md:hidden px-5">
          <Image
            src="/ai-created/science-banner-mobile.png"
            alt="Color Correction, Inspired By Beauty Science"
            width={900}
            height={900}
            className="w-full h-auto rounded-2xl"
            sizes="100vw"
          />
        </div>

        {/* Desktop banner — full bleed, no container, no rounded corners */}
        <div className="hidden md:block">
          <Image
            src="/ai-created/science-banner-desktop.png"
            alt="Color Correction, Inspired By Beauty Science"
            width={1440}
            height={810}
            className="w-full h-auto block"
            sizes="100vw"
          />
        </div>

      </div>
    </section>
  );
}
