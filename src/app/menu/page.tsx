import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { menu, menuNote, toppings } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu — Savino's Pizza",
  description: "Explore Savino's Pizza menu — freshly made Italian pizzas in 10\" and 14\" sizes.",
};

export default function Menu() {
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
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Fresh Daily</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-4">Our Menu</h1>
          <p className="font-body text-white/50 text-sm sm:text-base">{menuNote}</p>
        </div>
      </section>

      {/* Sides */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
        {menu.filter((category) => category.id !== "pizza-menu").map((category) => (
          <div key={category.id}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">{category.title}</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 text-left font-body text-white/40 text-xs tracking-widest uppercase">Item</th>
                  <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">10&quot;</th>
                  <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">14&quot;</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr key={item.id} className="border-b border-white/10 hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 pr-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">{item.name}</h3>
                      <p className="font-body text-white/45 text-sm leading-relaxed mt-1">
                        {item.description}
                        {item.note && <span className="italic text-white/30"> ({item.note})</span>}
                      </p>
                    </td>
                    {item.singlePrice !== undefined ? (
                      <td colSpan={2} className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">
                        £{item.singlePrice.toFixed(2)}
                      </td>
                    ) : (
                      <>
                        <td className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">£{item.price10.toFixed(2)}</td>
                        <td className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">£{item.price14.toFixed(2)}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Main Menu */}
      {menu.filter((category) => category.id === "pizza-menu").map((category) => (
        <section key={category.id} className="bg-[#0e262f] px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">{category.title}</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 text-left font-body text-white/40 text-xs tracking-widest uppercase">Item</th>
                  <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">10&quot;</th>
                  <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">14&quot;</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr key={item.id} className="border-b border-white/10 hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 pr-4">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">{item.name}</h3>
                      <p className="font-body text-white/45 text-sm leading-relaxed mt-1">
                        {item.description}
                        {item.note && <span className="italic text-white/30"> ({item.note})</span>}
                      </p>
                    </td>
                    {item.singlePrice !== undefined ? (
                      <td colSpan={2} className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">
                        £{item.singlePrice.toFixed(2)}
                      </td>
                    ) : (
                      <>
                        <td className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">£{item.price10.toFixed(2)}</td>
                        <td className="py-4 text-right font-body text-white font-semibold text-sm whitespace-nowrap">£{item.price14.toFixed(2)}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Extra toppings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">Extra Toppings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/20">
              <th className="py-3 text-left font-body text-white/40 text-xs tracking-widest uppercase">Topping</th>
              <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">10&quot;</th>
              <th className="py-3 text-right font-body text-white/40 text-xs tracking-widest uppercase w-20">14&quot;</th>
            </tr>
          </thead>
          <tbody>
            {toppings.map((topping) => (
              <tr key={topping.id} className="border-b border-white/10 hover:bg-white/[0.03] transition-colors">
                <td className="py-3.5 pr-4 font-body text-white text-sm">{topping.name}</td>
                <td className="py-3.5 text-right font-body text-white/70 text-sm whitespace-nowrap">£{topping.price10.toFixed(2)}</td>
                <td className="py-3.5 text-right font-body text-white/70 text-sm whitespace-nowrap">£{topping.price14.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl px-8 sm:px-16 py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready to order?
          </h2>
          <p className="font-body text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
            Choose collection or delivery and we&apos;ll get it started right away.
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
