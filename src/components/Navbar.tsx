"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#163b49]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/logo-white-ver.png"
            alt="Savino's Pizza"
            width={140}
            height={70}
            className="w-36 sm:w-44"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {/* Desktop links */}
          <ul className="flex items-center gap-10">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-body text-sm tracking-wide uppercase transition-colors duration-200 relative ${
                      active ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#fbb22a]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h.01M11 15h.01M16 16h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
            </svg>
            Order Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span
            className={`block w-6 h-px bg-white transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5 bg-[#163b49]">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-base tracking-wide uppercase ${
                    active ? "text-white" : "text-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h.01M11 15h.01M16 16h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
              </svg>
              Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
