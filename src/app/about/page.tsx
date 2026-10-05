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
              Savino&apos;s has its roots in a family passion for traditional Italian pizza, but the
              Savino&apos;s Pizza story, as most people on the Isle of Man know it, began in 2012.
            </p>
            <p>It started with an A4 sheet of paper, a pencil, a ruler and an idea.</p>
            <p>
              Mike Savino wanted to create something of his own, built around the kind of pizza he
              had grown up knowing and loving.
            </p>
            <p>Savino&apos;s Pizza was born.</p>
            <p>
              Mike designed a purpose-built mobile pizza trailer and had it built from scratch. From
              there, we travelled around the Isle of Man, setting up wherever the next event took us.
            </p>
            <p>
              TT week, shows, festivals, rallies and events, wherever the crowds were, chances are
              the Savino&apos;s trailer wasn&apos;t far away.
            </p>
            <p>
              It was never just about selling pizza. It was about the atmosphere, the people and the
              memories we made along the way.
            </p>
            <p>
              If you&apos;ve been on the Island for a while, there&apos;s a good chance you&apos;ve
              got a story about the old Savino&apos;s trailer.
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
              Loads of people. Loads of pizzas. Loads of memories.
            </h2>
            <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed">
              <p>
                TT week, country shows, festivals and events, wherever we parked up, people came.
              </p>
              <p>
                The queues became part of the experience, helped in no small part by our lovely
                server Donna 😆, and the team behind that little trailer put everything into every
                pizza that came out of it.
              </p>
              <p>There was always a buzz around Savino&apos;s.</p>
              <p>
                People chatting while they waited, music playing, the smell of pizzas cooking and a
                team working flat-out inside the trailer.
              </p>
              <p>
                At some events, we kept the beer tent fed and they kept us topped up with cider. It
                was that kind of operation! At times, I think we were having more fun working inside
                the trailer than the partygoers were having outside.
              </p>
              <p>That energy, that atmosphere and those good times became the heart of Savino&apos;s.</p>
              <p>And that&apos;s exactly what we want to bring into the next chapter.</p>
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
              The trailer was mobile, slightly chaotic at times, but somehow, that was part of its
              charm.
            </p>
            <p>Now Savino&apos;s Pizza has a permanent home in Ballasalla.</p>
            <p>
              We want to take everything people loved about the original Savino&apos;s, the
              atmosphere, the characters, the memories and, most importantly, the pizza, and build
              something around it.
            </p>
            <p>
              A place to meet friends, have a drink, enjoy some great food and hopefully make a few
              more memories.
            </p>
            <p>Same spirit. Same passion for pizza. Just a whole new chapter.</p>
            <p>And somewhere you can always find us.</p>
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
            There&apos;s always something new around the corner.
          </h2>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed mb-10">
            <p>
              You can expect all the pizzas you already know and love, alongside plenty of new ideas
              to come.
            </p>
            <p>
              We&apos;ve taken inspiration from food and flavours from around the world, and over
              time we&apos;ll be introducing new pizzas, specials and probably a few things you
              wouldn&apos;t normally expect from us.
            </p>
            <p>
              We&apos;ll experiment. We&apos;ll try things. Some ideas will become favourites and
              some probably won&apos;t make it past the specials board.
            </p>
            <p>But that&apos;s half the fun.</p>
            <p>Because if there&apos;s one thing you can say about Mike Savino, it&apos;s this:</p>
          </div>
          <blockquote className="font-display text-xl sm:text-2xl text-white italic leading-relaxed border-l-2 border-[#fbb22a] pl-6 text-left max-w-xl mx-auto">
            &ldquo;He&apos;s an all-or-nothing kind of guy. He&apos;s never been afraid to try
            something different, take an idea and run with it, and see what people love.&rdquo;
          </blockquote>
          <div className="flex flex-col gap-4 font-body text-white/50 text-sm sm:text-base leading-relaxed mt-10">
            <p>
              Savino&apos;s might have started with a pencil, a piece of paper and a pizza trailer
              back in 2012, but that was only the beginning.
            </p>
            <p>The Savino&apos;s story is still being written.</p>
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
