import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events — Savino's Pizza",
  description: "Upcoming events at Savino's Pizza — Grand Opening, Taste & Test Day, Thursday Specials and more.",
};

const TAG_STYLES: Record<string, string> = {
  "One-Time": "text-white bg-white/15",
  Weekly: "text-white/80 bg-white/10",
  Monthly: "text-white/80 bg-white/10",
};

export default function Events() {
  return (
    <div className="bg-[#163b49]">

      {/* Page hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
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
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">What&apos;s On</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">Upcoming Events</h1>
        </div>
      </section>

      {/* Events list */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
          >
            <div className="shrink-0 sm:w-40">
              <p className="font-body text-white text-sm font-semibold">{event.date}</p>
              <p className="font-body text-white/40 text-xs mt-1">{event.time}</p>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">{event.title}</h2>
                <span className={`font-body text-[10px] uppercase tracking-wide rounded-full px-2.5 py-1 ${TAG_STYLES[event.tag]}`}>
                  {event.tag}
                </span>
              </div>
              <p className="font-body text-white/50 text-sm leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl px-8 sm:px-16 py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Don&apos;t miss out.
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
            Follow us on Facebook for event updates, or get in touch to book a table for something special.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.facebook.com/SavinosPizzaIOM/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
            >
              Follow on Facebook
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white font-body font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
