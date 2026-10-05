"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ORDER_URL } from "@/data/constants";

const LINKS = [
  { href: "/", label: "Homepage" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Our Menu" },
  { href: ORDER_URL, label: "Order Now", external: true },
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
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
            </svg>
            Contact Us
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
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 justify-center mt-2 px-5 py-2.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
              </svg>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
