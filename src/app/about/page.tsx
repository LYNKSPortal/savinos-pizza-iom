import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Savino's Pizza",
  description: "Learn about Savino's Pizza — authentic Italian pizza made fresh in Ballasalla, Isle of Man.",
};

const VALUES = [
  {
    title: "Quality Ingredients",
    description: "San Marzano tomatoes, fresh mozzarella, and locally sourced produce wherever possible.",
  },
  {
    title: "Traditional Technique",
    description: "Slow-fermented dough, hand-stretched and stone-baked for the perfect base.",
  },
  {
    title: "Made With Care",
    description: "Every pizza is made to order — no shortcuts, no compromise.",
  },
];

export default function About() {
  return (
    <div className="bg-[#163b49]">

      {/* Page hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center overflow-hidden">
        <Image
          src="/lots-of-pizzas.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: "brightness(0.2) saturate(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#163b49]" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">Since Day One</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Bringing authentic Italy<br /> to Ballasalla.
          </h2>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              Savino&apos;s Pizza was born from a simple idea: pizza should be made properly,
              with real ingredients, real technique, and real care. No shortcuts.
            </p>
            <p>
              From our kitchen in Ballasalla, we hand-stretch every base, simmer our sauces
              slowly, and bake each pizza fresh to order — the way it&apos;s meant to be done.
            </p>
            <p>
              Whether you&apos;re picking up a quick lunch or ordering for the whole family,
              we treat every pizza with the same attention to detail.
            </p>
          </div>
        </div>
        <div className="relative w-full h-72 sm:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/lots-of-pizzas.jpg"
            alt="Fresh pizzas at Savino's"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0e262f] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">What We Believe In</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {VALUES.map((value, i) => (
              <div key={value.title} className="flex flex-col gap-4">
                <span className="font-display text-white/25 text-4xl font-bold">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-white">{value.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl px-8 sm:px-16 py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Come taste the difference.
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
            Explore our menu and order online for collection or delivery.
          </p>
          <Link
            href="/menu"
            className="px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
          >
            View Menu
          </Link>
        </div>
      </section>

    </div>
  );
}
