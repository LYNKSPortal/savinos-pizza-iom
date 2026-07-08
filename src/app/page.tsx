import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117]">

      {/* Background photo — heavily darkened */}
      <Image
        src="/lots-of-pizzas.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center scale-105"
        style={{ filter: "brightness(0.18) saturate(0.6)" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-10 sm:py-16 flex flex-col items-center">

        {/* Logo */}
        <div
          className="animate-fade-in animation-fill-both mb-10 opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <Image
            src="/logo/logo-white-ver.png"
            alt="Savino's Pizza"
            width={280}
            height={140}
            priority
            className="w-48 sm:w-72 md:w-96"
          />
        </div>

        {/* Thin rule */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 w-px h-8 sm:h-10 bg-white/20 mb-8 sm:mb-10"
          style={{ animationDelay: "150ms" }}
        />

        {/* Headline */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 text-center mb-4"
          style={{ animationDelay: "250ms" }}
        >
          <p className="font-body text-white tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[13px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-5">
            Coming Soon
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Something<br />
            <span className="italic font-normal text-white/70">delicious</span> awaits.
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in animation-fill-both opacity-0 font-body font-light text-white text-[14px] sm:text-[17px] md:text-[18px] text-center max-w-xs leading-relaxed mt-4 sm:mt-6 mb-8 sm:mb-12"
          style={{ animationDelay: "350ms" }}
        >
          Fresh slices, hot ovens, and something delicious are on the way.
        </p>

        {/* Countdown */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 w-full mb-8 sm:mb-12"
          style={{ animationDelay: "450ms" }}
        >
          <CountdownTimer />
        </div>

        {/* Location */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 flex items-start gap-3 w-full max-w-xs sm:max-w-none sm:justify-center mt-8 sm:mt-6"
          style={{ animationDelay: "700ms" }}
        >
          <svg className="w-4 h-4 text-white/50 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="font-body font-light text-white text-[14px] sm:text-[17px] md:text-[18px] leading-relaxed">
            Savino&apos;s Pizza, Balthane Industrial Estate, Optical House,<br className="hidden sm:block" /> Ballasalla, Isle of Man, IM9 2AL
          </p>
        </div>

        {/* Phone / WhatsApp */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 flex items-center gap-3 w-full max-w-xs sm:max-w-none sm:justify-center mt-2"
          style={{ animationDelay: "750ms" }}
        >
          <svg className="w-4 h-4 text-white/50 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.428a.75.75 0 00.921.921l5.57-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 01-4.953-1.355l-.355-.212-3.31.877.877-3.31-.212-.355A9.707 9.707 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          <a
            href="https://wa.me/447624313999"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-light text-white text-[14px] sm:text-[17px] md:text-[18px] tracking-wide hover:text-white/70 transition-colors duration-200"
          >
            Call or WhatsApp: +44 7624 313999
          </a>
        </div>

        {/* Facebook */}
        <div
          className="animate-fade-in animation-fill-both opacity-0 flex items-center gap-3 w-full max-w-xs sm:max-w-none sm:justify-center mt-2"
          style={{ animationDelay: "780ms" }}
        >
          <svg className="w-4 h-4 text-white/50 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.252h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          <a
            href="https://www.facebook.com/SavinosPizzaIOM/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-light text-white text-[14px] sm:text-[17px] md:text-[18px] tracking-wide hover:text-white/70 transition-colors duration-200"
          >
            facebook.com/SavinosPizzaIOM
          </a>
        </div>

        {/* Footer */}
        <p
          className="animate-fade-in animation-fill-both opacity-0 font-body text-white text-[11px] sm:text-[14px] md:text-[16px] tracking-widest uppercase mt-10 sm:mt-14"
          style={{ animationDelay: "800ms" }}
        >
          © 2026 Savino&apos;s Pizza · All rights reserved
        </p>

      </div>
    </main>
  );
}
