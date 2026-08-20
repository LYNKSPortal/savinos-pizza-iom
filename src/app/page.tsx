import Image from "next/image";
import Link from "next/link";
import { menu } from "@/data/menu";

const FEATURED_IDS = ["margherita", "pepperoni", "vesuvio", "prosciutto-funghi", "don-antonio", "savinos"];
const featured = menu
  .flatMap((c) => c.items)
  .filter((item) => FEATURED_IDS.includes(item.id));

const FEATURES = [
  {
    title: "Authentic Italian",
    description: "Traditional recipes, imported ingredients, hand-stretched dough.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.5 0-8.25 3.75-8.25 8.25S7.5 21.75 12 21.75s8.25-6.75 8.25-11.25S16.5 2.25 12 2.25z" />
    ),
  },
  {
    title: "Freshly Made",
    description: "Every pizza is made to order and baked fresh in our ovens.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3.75M6.75 6.75l2.15 2.15M17.25 6.75l-2.15 2.15M3 12h3.75M17.25 12H21M6.75 17.25l2.15-2.15M17.25 17.25l-2.15-2.15M12 17.25V21" />
    ),
  },
  {
    title: "Collection & Delivery",
    description: "Order online for fast collection or delivery across the island.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18.75 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.75 6.75h10.5v9.75H4.5a.75.75 0 01-.75-.75V6.75zM14.25 9.75h3l3 3.75v3a.75.75 0 01-.75.75h-1.5" />
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-[#163b49]">

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.4) saturate(0.7)" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#163b49]" />

        <div className="relative z-10 h-full w-full max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center">
          {/* Top + middle: kicker, heading, description, buttons — centered as a group */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="animate-fade-in animation-fill-both opacity-0 font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-5" style={{ animationDelay: "100ms" }}>
              Est. Ballasalla, Isle of Man
            </p>
            <h1 className="animate-fade-in animation-fill-both opacity-0 font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight w-full" style={{ animationDelay: "200ms" }}>
              Something<br />
              <span className="italic font-normal text-white/70">delicious</span>, always.
            </h1>
            <p className="animate-fade-in animation-fill-both opacity-0 font-body font-light text-white text-base sm:text-lg max-w-xl leading-relaxed mt-6 mb-10" style={{ animationDelay: "300ms" }}>
              Fresh slices, hot ovens, and authentic Italian recipes — made to order, every single day.
            </p>
            <div className="animate-fade-in animation-fill-both opacity-0 flex flex-wrap justify-center gap-4" style={{ animationDelay: "400ms" }}>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h.01M11 15h.01M16 16h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                </svg>
                Order Now
              </Link>
              <Link
                href="/menu"
                className="px-7 py-3.5 rounded-full border border-white/30 text-white font-body font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Bottom: feature strip */}
          <div className="hidden sm:grid animate-fade-in animation-fill-both opacity-0 grid-cols-3 gap-10 w-full" style={{ animationDelay: "500ms" }}>
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center gap-3 text-center">
                <svg className="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  {feature.icon}
                </svg>
                <h3 className="font-display text-lg font-bold text-white">{feature.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/lots-of-pizzas.jpg"
            alt="Savino's Pizza kitchen"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
        <div>
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">Our Story</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Handmade pizza,<br /> made with heart.
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Savino&apos;s brings authentic Italian pizza to Ballasalla — hand-stretched dough,
            slow-simmered sauces, and the finest ingredients, baked fresh every day.
          </p>
          <Link
            href="/about"
            className="font-body text-white text-sm font-semibold tracking-wide border-b border-white/40 hover:border-white pb-1 transition-colors duration-200"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="bg-[#0e262f] px-6 py-20">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">Fan Favourites</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">From the Oven</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div key={item.id} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
                <span className="font-body text-white/70 text-sm whitespace-nowrap">
                  £{item.price10.toFixed(2)} / £{item.price14.toFixed(2)}
                </span>
              </div>
              <p className="font-body text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-7 py-3.5 rounded-full border border-white/30 text-white font-body font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
          >
            View Full Menu
          </Link>
        </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl px-8 sm:px-16 py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Hungry? Let&apos;s fix that.
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
            Order online for collection or delivery — fresh, hot, and ready when you are.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h.01M11 15h.01M16 16h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
            </svg>
            Order Now
          </Link>
        </div>
      </section>

    </div>
  );
}
