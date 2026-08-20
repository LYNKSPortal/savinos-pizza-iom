import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0e262f] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <Image
            src="/logo/logo-white-ver.png"
            alt="Savino's Pizza"
            width={140}
            height={70}
            className="w-36 sm:w-44 mb-4"
          />
          <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
            Freshly made Italian pizza, baked with authentic ingredients and a whole lot of love.
          </p>
        </div>

        <div>
          <h4 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-4">Explore</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/about" className="font-body text-white/50 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link href="/menu" className="font-body text-white/50 hover:text-white text-sm transition-colors">Our Menu</Link></li>
            <li><Link href="/gallery" className="font-body text-white/50 hover:text-white text-sm transition-colors">Gallery</Link></li>
            <li><Link href="/events" className="font-body text-white/50 hover:text-white text-sm transition-colors">Events</Link></li>
            <li><Link href="/order" className="font-body text-white/50 hover:text-white text-sm transition-colors">Order Online</Link></li>
            <li><Link href="/contact" className="font-body text-white/50 hover:text-white text-sm transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-4">Visit Us</h4>
          <p className="font-body text-white/50 text-sm leading-relaxed">
            Balthane Industrial Estate,<br />
            Optical House, Ballasalla,<br />
            Isle of Man, IM9 2AL
          </p>
        </div>

        <div>
          <h4 className="font-body text-white text-xs tracking-[0.2em] uppercase mb-4">Get In Touch</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="https://wa.me/447624313999" target="_blank" rel="noopener noreferrer" className="font-body text-white/50 hover:text-white text-sm transition-colors">
                +44 7624 313999
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SavinosPizzaIOM/" target="_blank" rel="noopener noreferrer" className="font-body text-white/50 hover:text-white text-sm transition-colors">
                facebook.com/SavinosPizzaIOM
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center font-body text-white/30 text-xs tracking-widest uppercase">
          © 2026 Savino&apos;s Pizza · All rights reserved
        </p>
      </div>
    </footer>
  );
}
