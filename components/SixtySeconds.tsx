"use client";

import { useEffect, useRef, useState } from "react";

export default function SixtySeconds() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(60);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !visible) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    let n = 60;
    const interval = setInterval(() => {
      n -= 1;
      setCount(n);
      if (n <= 0) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [visible]);

  const stats = [
    { num: "60s", label: "Visible results" },
    { num: "4×", label: "Shades brighter" },
    { num: "2–8", label: "Weeks to peak" },
    { num: "6K+", label: "Happy smiles" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#1a0a3d] py-10 md:py-36 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#a78bfa] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#a78bfa] opacity-10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 text-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-4 md:mb-10">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">Instant Science</span>
          </div>
        </div>

        {/* Countdown number */}
        <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div
            className="font-bold text-white leading-none mb-1 md:mb-2 tabular-nums"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(72px, 20vw, 220px)",
              background: "linear-gradient(135deg, #fff 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {count === 0 ? "✓" : count}
          </div>
          <p className="text-[#a78bfa] text-base md:text-xl font-light tracking-widest uppercase mb-3 md:mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            {count === 0 ? "Whiter. Done." : "seconds"}
          </p>
        </div>

        {/* Headline */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-white font-bold mb-2 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px, 4vw, 40px)" }}>
            Visible results from the very first use.
          </h2>
          <p className="text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed mb-6 md:mb-16 hidden md:block" style={{ fontFamily: "var(--font-inter)" }}>
            The purple pigment neutralizes yellow stains on contact. Brush for 60 seconds — see the difference immediately.
          </p>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-4 gap-px bg-white/10 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-[#1a0a3d] px-2 md:px-6 py-4 md:py-8">
              <div className="font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px, 4vw, 44px)" }}>
                {num}
              </div>
              <div className="text-white/40 text-[9px] md:text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
