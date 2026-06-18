"use client";

import { useEffect, useRef, useState } from "react";

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeWeek, setActiveWeek] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { week: "Day 1", result: "Instantly brighter", shades: 1, desc: "Purple pigment neutralizes yellow tones on your very first brush." },
    { week: "Week 2", result: "Noticeably whiter", shades: 2, desc: "Enzymes begin breaking down deeper surface stains." },
    { week: "Week 4", result: "Visibly transformed", shades: 3, desc: "Consistent users report visible colour shift and compliments." },
    { week: "Week 8", result: "Up to 4 shades", shades: 4, desc: "Full results achieved. Enamel strengthened. Smile at full brightness." },
  ];

  return (
    <section id="results" ref={sectionRef} className="bg-[#faf9f7] py-10 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className={`text-center mb-6 md:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-[#ede9fe] rounded-full px-4 py-1.5 mb-3 md:mb-6">
            <span className="text-[#7c3aed] text-xs tracking-[0.15em] uppercase font-semibold">Real Results</span>
          </div>
          <h2 className="text-[#1a0a3d] font-bold mb-2 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 52px)" }}>
            Before. During. After.
          </h2>
          <p className="text-[#888] font-light max-w-md mx-auto leading-relaxed text-sm md:text-lg" style={{ fontFamily: "var(--font-inter)" }}>
            This is exactly what happens when purple meets yellow.
          </p>
        </div>

        {/* Before / During / After */}
        <div className={`mb-8 md:mb-20 transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto">
            {[
              { label: "Before", color: "#fef9c3", border: "#fde047", textColor: "#854d0e", desc: "Yellow stains", gradient: "from-yellow-200/60 to-yellow-50", emoji: "😐" },
              { label: "During", color: "#ede9fe", border: "#a78bfa", textColor: "#5b21b6", desc: "Purple cancels", gradient: "from-violet-300/60 to-violet-100", emoji: "🟣" },
              { label: "After",  color: "#f0fdf4", border: "#86efac", textColor: "#166534", desc: "60s brighter", gradient: "from-white to-green-50", emoji: "😁" },
            ].map(({ label, color, border, textColor, desc, gradient, emoji }) => (
              <div key={label} className="rounded-2xl overflow-hidden border-2 flex flex-col" style={{ backgroundColor: color, borderColor: border }}>
                <div className={`aspect-square flex items-center justify-center text-4xl md:text-8xl bg-gradient-to-b ${gradient}`}>{emoji}</div>
                <div className="p-2 md:p-4 text-center">
                  <div className="font-bold text-sm md:text-base" style={{ fontFamily: "var(--font-playfair)", color: textColor }}>{label}</div>
                  <div className="text-gray-500 text-[9px] md:text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results timeline */}
        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-center text-[#1a0a3d] font-semibold mb-4 md:mb-8 text-base md:text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Your results over time
          </h3>
          <div className="flex gap-2 justify-center flex-wrap mb-5 md:mb-10">
            {timeline.map((t, i) => (
              <button key={t.week} onClick={() => setActiveWeek(i)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeWeek === i ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-500/30" : "bg-white text-[#666] border border-[#e5e7eb] hover:border-[#7c3aed]"}`}
                style={{ fontFamily: "var(--font-inter)" }}>
                {t.week}
              </button>
            ))}
          </div>
          <div className="max-w-sm md:max-w-lg mx-auto bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl border border-[#f3f4f6] text-center">
            <div className="flex justify-center gap-1.5 mb-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-2.5 w-10 rounded-full transition-all duration-500 ${i < timeline[activeWeek].shades ? "bg-[#7c3aed]" : "bg-[#f3f4f6]"}`} />
              ))}
            </div>
            <div className="text-[#7c3aed] font-bold mb-1.5" style={{ fontFamily: "var(--font-playfair)", fontSize: "20px" }}>
              {timeline[activeWeek].result}
            </div>
            <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              {timeline[activeWeek].desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
