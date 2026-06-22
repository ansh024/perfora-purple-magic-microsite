"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How does the Purple Serum whiten teeth?",
    a: "It uses corrective colour technology — purple cancels out yellow on the colour wheel. Combined with bromelain and papain enzymes that break down protein-bound stains, your teeth appear visibly whiter from the very first use.",
  },
  {
    q: "How long does it take to see results?",
    a: "You'll notice a difference from day one. Consistent use over 2–8 weeks can deliver up to 4 shades whiter teeth.",
  },
  {
    q: "Are there any side effects?",
    a: "None. The serum is peroxide-free, enamel-safe, SLS-free, vegan, and 100% vegetarian. No harsh chemicals, no sensitivity.",
  },
  {
    q: "What does it taste like?",
    a: "A delicious blend of apple, peach, and mint. Clean ingredients, great flavour.",
  },
  {
    q: "Can it replace my regular toothpaste?",
    a: "No — use it as an add-on to your regular brushing routine, not a replacement. Apply 2 pumps on your toothbrush alongside your toothpaste, brush for 30–60 seconds, and rinse.",
  },
  {
    q: "Can children use it?",
    a: "Yes, the Purple Magic Whitening Serum is safe for children above the age of 10.",
  },
  {
    q: "How do I dispense it from the bottle?",
    a: "The serum comes in an airless vacuum bottle. If it's your first use, pump 2–4 times to get it flowing. After that, 2 pumps per use is all you need.",
  },
  {
    q: "What if it's accidentally swallowed?",
    a: "No harmful effects — the formula uses only safe, non-toxic ingredients. Just rinse thoroughly. It's certified non-toxic and dentist-formulated.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0614] py-10 md:py-16 overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className={`mb-8 md:mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-3 md:mb-5">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">FAQ</span>
          </div>
          <h2 className="text-white font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 48px)" }}>
            Questions? <em className="text-[#a78bfa]">Answered.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className={`flex flex-col gap-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${open === i ? "border-[#7c3aed]/60 bg-white/5" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={`font-semibold text-sm md:text-base transition-colors ${open === i ? "text-white" : "text-white/70"}`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-[#7c3aed] rotate-45" : "bg-white/10"}`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
