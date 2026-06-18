"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#0a0614]/95 backdrop-blur-md border-t border-white/10 px-5 py-4 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-sm truncate" style={{ fontFamily: "var(--font-playfair)" }}>
            Purple Magic Serum
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 text-[#a78bfa]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-xs">6,093 reviews</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-white/40 text-xs line-through">₹1,098</div>
          <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>from ₹887</div>
        </div>
        <a
          href="#buy"
          className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm px-5 py-2.5 rounded-full flex-shrink-0 transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Shop Now
        </a>
      </div>
      {/* Safe area spacer for phones */}
      <div className="bg-[#0a0614]/95 h-safe-area-inset-bottom" />
    </div>
  );
}
