import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Savino's Pizza",
  description: "A look at the pizzas made fresh daily at Savino's Pizza, Ballasalla, Isle of Man.",
};

const IMAGES = Array.from({ length: 24 }, (_, i) => i);

export default function Gallery() {
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
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Fresh From the Oven</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">Gallery</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {IMAGES.map((i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/lots-of-pizzas.jpg"
                alt="Savino's Pizza"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
