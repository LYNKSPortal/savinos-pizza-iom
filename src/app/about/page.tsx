import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Savino's Pizza",
  description: "Learn about Savino's Pizza — authentic Italian pizza made fresh in Ballasalla, Isle of Man.",
};

export default function About() {
  return (
    <div className="bg-[#163b49]">

      {/* Page hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <Image
          src="/about-us/Untitled-2.jpg"
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

      {/* Where it all began */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">Where It All Began</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            The pizza trailer<br /> everyone remembers.
          </h2>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              Years ago, Savino&apos;s Pizza wasn&apos;t a building, it was a trailer. We travelled
              from location to location around the Isle of Man, setting up wherever the next event
              was, cooking pizza for whoever turned up.
            </p>
            <p>
              It took a big team and a lot of hard work, but it built something special: real
              experiences, long queues, and a lot of good memories. If you grew up on the Island,
              there&apos;s a good chance you&apos;ve got a story about the old Savino&apos;s trailer.
            </p>
          </div>
        </div>
        <div className="relative w-full h-72 sm:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/our-story.jpg"
            alt="Savino's Pizza trailer kitchen"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
      </section>

      {/* The crowd / memories */}
      <section className="bg-[#0e262f] px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-72 sm:h-[420px] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/about-us/Untitled-5.jpg"
              alt="Crowds queueing at the Savino's Pizza trailer"
              fill
              className="object-cover"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">A Team, A Following</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Loads of people, loads of memories.
            </h2>
            <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed">
              <p>
                TT week, country shows, festivals, wherever we parked up, people came. The queues
                were part of the fun, and the team behind that trailer poured everything into every
                single pizza that came out of it.
              </p>
              <p>
                That energy, that buzz, those good vibes, that&apos;s the heart of Savino&apos;s, and
                it&apos;s exactly what we&apos;re bringing with us into this next chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The next chapter */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">The Next Chapter</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Now, we&apos;ve got a home<br /> in Ballasalla.
          </h2>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              The trailer gave us something portable and a little scrappy, and it worked. Now
              Savino&apos;s Pizza has a proper venue in Ballasalla, and we want to take all that
              history, all that energy, and build it into something permanent.
            </p>
            <p>
              Same spirit, same care, just somewhere you can always find us.
            </p>
          </div>
        </div>
        <div className="relative w-full h-72 sm:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/about-us/Untitled-4.jpg"
            alt="The original Savino's Pizza trailer"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
      </section>

      {/* What's coming */}
      <section className="bg-[#0e262f] px-6 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-[#fbb22a] tracking-[0.25em] uppercase text-xs mb-4">What&apos;s Coming</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Always something new around the corner.
          </h2>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed mb-10">
            <p>
              Expect pizzas you already know and love, alongside new ones you&apos;ve never tried.
              We&apos;ve got ideas from all over the world that we&apos;re slowly going to introduce,
              test, and refine. Some will stick, some won&apos;t, and that&apos;s half the fun.
            </p>
          </div>
          <blockquote className="font-display text-xl sm:text-2xl text-white italic leading-relaxed border-l-2 border-[#fbb22a] pl-6 text-left max-w-xl mx-auto">
            &ldquo;If there&apos;s one thing you can say about Mike Savino, it&apos;s that he&apos;s
            always chasing the next thing, always experimenting to see what people love.&rdquo;
          </blockquote>
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
