import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060310] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Image src="/perfora-logo.png" alt="Perfora" width={100} height={32} className="h-8 w-auto object-contain" />
          <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>
            Science-backed oral care.
          </p>
        </div>

        <div className="flex gap-6 text-white/30 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
          <a href="https://perforacare.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
            perforacare.com
          </a>
          <span>·</span>
          <span>Peroxide-Free</span>
          <span>·</span>
          <span>Made with 💜 in India</span>
        </div>

        <p className="text-white/20 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
          © 2026 Perfora Care
        </p>
      </div>
    </footer>
  );
}
