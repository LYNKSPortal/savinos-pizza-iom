import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Savino's Pizza",
  description: "Get in touch with Savino's Pizza in Ballasalla, Isle of Man.",
};

export default function Contact() {
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
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">We&apos;d Love to Hear From You</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* Info */}
        <div className="lg:col-span-1 flex flex-col gap-10">
          <div>
            <h3 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-3">Visit Us</h3>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Savino&apos;s Pizza,<br />
              Balthane Industrial Estate,<br />
              Optical House, Ballasalla,<br />
              Isle of Man, IM9 2AL
            </p>
          </div>
          <div>
            <h3 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-3">Call or WhatsApp</h3>
            <a href="https://wa.me/447624313999" target="_blank" rel="noopener noreferrer" className="font-body text-white/60 hover:text-white text-sm transition-colors">
              +44 7624 313999
            </a>
          </div>
          <div>
            <h3 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-3">Follow Us</h3>
            <a href="https://www.facebook.com/SavinosPizzaIOM/" target="_blank" rel="noopener noreferrer" className="font-body text-white/60 hover:text-white text-sm transition-colors">
              facebook.com/SavinosPizzaIOM
            </a>
          </div>
          <div>
            <h3 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-3">Opening Hours</h3>
            <div className="font-body text-white/60 text-sm leading-relaxed flex flex-col gap-1">
              <div className="flex justify-between max-w-xs"><span>Mon – Thu</span><span>5pm – 10pm</span></div>
              <div className="flex justify-between max-w-xs"><span>Fri – Sat</span><span>12pm – 10pm</span></div>
              <div className="flex justify-between max-w-xs"><span>Sunday</span><span>12pm – 9pm</span></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-80 sm:h-96 relative border-t border-white/10">
        <iframe
          title="Savino's Pizza location"
          src="https://www.google.com/maps?q=Balthane+Industrial+Estate+Ballasalla+Isle+of+Man+IM9+2AL&output=embed"
          className="w-full h-full border-0"
          style={{ filter: "invert(0.9) contrast(0.9)" }}
          loading="lazy"
        />
      </section>

    </div>
  );
}
