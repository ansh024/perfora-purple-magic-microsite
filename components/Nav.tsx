"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/perfora-logo.png" alt="Perfora" width={100} height={32} className="h-8 w-auto object-contain" priority />

        <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-light tracking-wide">
          <a href="#science" className="hover:text-white transition-colors">Science</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </div>

        <a
          href="#buy"
          className="bg-white text-[#1a0a3d] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#ede9fe] hover:text-[#4c1d95] transition-all duration-300"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}
