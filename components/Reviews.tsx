"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const reviews = [
  {
    name: "Priya M.",
    location: "Mumbai",
    rating: 5,
    text: "I was skeptical about the purple color but after the first use I could see a visible difference. My teeth looked noticeably brighter!",
    verified: true,
    weeks: "Using for 4 weeks",
  },
  {
    name: "Rahul K.",
    location: "Delhi",
    rating: 5,
    text: "Coffee drinker for 10 years and nothing has worked as fast as this. My dentist actually commented on the difference at my last checkup.",
    verified: true,
    weeks: "Using for 8 weeks",
  },
  {
    name: "Ananya S.",
    location: "Bangalore",
    rating: 5,
    text: "Finally a whitening product that doesn't cause sensitivity. I use it every day and the results just keep getting better. Obsessed.",
    verified: true,
    weeks: "Using for 6 weeks",
  },
  {
    name: "Vikram T.",
    location: "Chennai",
    rating: 5,
    text: "The science makes so much sense once you understand it. It actually turned my teeth purple during brushing and then rinsed off perfectly white.",
    verified: true,
    weeks: "Using for 3 weeks",
  },
  {
    name: "Meera J.",
    location: "Pune",
    rating: 5,
    text: "Best investment for my smile. My confidence has gone up so much. Worth every rupee — and the peach mint flavor is absolutely delightful.",
    verified: true,
    weeks: "Using for 5 weeks",
  },
];

const ratingBars = [
  { stars: 5, pct: 83 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#a78bfa]" : "text-[#e5e7eb]"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header + rating block
      gsap.from(".reviews-header", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".reviews-header", start: "top 85%" },
      });

      // Animate rating bars from width 0 to actual %
      gsap.utils.toArray<HTMLElement>(".rating-bar-fill").forEach((bar) => {
        const targetWidth = bar.style.width;
        bar.style.width = "0%";
        gsap.to(bar, {
          width: targetWidth,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: bar, start: "top 90%" },
        });
      });

      // Review cards stagger from bottom
      gsap.from(".review-card", {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".review-card", start: "top 88%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="bg-[#0a0614] py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="reviews-header text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 border border-[#a78bfa]/30 rounded-full px-4 py-1.5 mb-4 md:mb-6">
            <span className="text-[#a78bfa] text-xs tracking-[0.15em] uppercase font-semibold">Social Proof</span>
          </div>
          <h2 className="text-white font-bold mb-2 md:mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px, 4vw, 52px)" }}>
            6,093 smiles <em className="text-[#a78bfa]">later.</em>
          </h2>

          {/* Rating breakdown */}
          <div className="flex items-center justify-center gap-4 mt-4 md:mt-8">
            <div className="text-center">
              <div className="text-white font-bold text-5xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>4.8</div>
              <StarRow count={5} />
              <div className="text-white/40 text-xs mt-1">out of 5</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="flex flex-col gap-1.5">
              {ratingBars.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-white/40 text-xs w-2">{stars}</span>
                  <svg className="w-3 h-3 text-[#a78bfa]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="rating-bar-fill h-full rounded-full bg-[#7c3aed]" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-white/30 text-xs">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="review-card flex-shrink-0 w-[80vw] md:w-auto snap-start bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7c3aed]/50 transition-all duration-300">
              <StarRow count={review.rating} />
              <p className="text-white/80 text-sm leading-relaxed mt-4 mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#a78bfa] text-xs">{review.weeks}</div>
                  {review.verified && <div className="text-white/30 text-xs mt-0.5">✓ Verified</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
