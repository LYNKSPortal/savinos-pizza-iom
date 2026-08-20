"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";
import { useCart, isPizzaItem, Base } from "@/context/CartContext";

type Fulfilment = "collection" | "delivery";
type Status = "idle" | "loading" | "success" | "error";

const BASE_LABELS: Record<Base, string> = {
  regular: "Regular Tomato Base",
  spicy: "Hot & Spicy Base",
};

export default function CheckoutForm() {
  const { lines, subtotal, lineUnitPrice, clearCart } = useCart();
  const [fulfilment, setFulfilment] = useState<Fulfilment>("collection");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const allItems = useMemo(() => menu.flatMap((c) => c.items), []);

  const deliveryFee = fulfilment === "delivery" && subtotal > 0 ? 2.5 : 0;
  const total = subtotal + deliveryFee;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (lines.length === 0 || !name.trim() || !phone.trim() || (fulfilment === "delivery" && !address.trim())) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    clearCart();
  }

  if (status === "success") {
    return (
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <svg className="w-12 h-12 text-white/70 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <h2 className="font-display text-3xl font-bold text-white mb-4">Order Received!</h2>
        <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          Thanks, {name}. We&apos;ve got your {fulfilment} order for £{total.toFixed(2)}.
          We&apos;ll call {phone} shortly to confirm — or reach us directly on{" "}
          <a href="https://wa.me/447624313999" target="_blank" rel="noopener noreferrer" className="text-white underline">
            WhatsApp
          </a>.
        </p>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Your basket is empty</h2>
        <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
          Add some pizza to your basket before checking out.
        </p>
        <Link
          href="/order"
          className="inline-flex px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
        >
          Browse the Menu
        </Link>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
        <h2 className="font-display text-xl font-bold text-white">Your Order</h2>

        {/* Fulfilment toggle */}
        <div className="flex bg-white/5 rounded-full p-1">
          {(["collection", "delivery"] as Fulfilment[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFulfilment(option)}
              className={`flex-1 py-2 rounded-full font-body text-sm font-semibold capitalize transition-colors duration-200 ${
                fulfilment === option ? "bg-white text-[#163b49]" : "text-white/60"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Cart items */}
        <div className="flex flex-col gap-3">
          {lines.map((line) => {
            const item = allItems.find((i) => i.id === line.itemId)!;
            const unitPrice = lineUnitPrice(line);
            const toppingLabel = line.toppings.length > 0 ? ` + ${line.toppings.length} topping${line.toppings.length > 1 ? "s" : ""}` : "";
            return (
              <div key={line.lineId} className="flex justify-between font-body text-sm text-white/70">
                <span>
                  {item.name}
                  {item.singlePrice === undefined ? ` (${line.size}")` : ""}
                  {toppingLabel}
                  {isPizzaItem(item.id) && ` · ${BASE_LABELS[line.base]}`}
                </span>
                <span>£{unitPrice.toFixed(2)}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
          <div className="flex justify-between font-body text-sm text-white/50">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          {fulfilment === "delivery" && (
            <div className="flex justify-between font-body text-sm text-white/50">
              <span>Delivery fee</span>
              <span>£{deliveryFee.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-body text-base font-bold text-white">
            <span>Total</span>
            <span>£{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Customer details */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          {fulfilment === "delivery" && (
            <input
              type="text"
              placeholder="Delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-white/30 transition-colors"
            />
          )}
          <textarea
            placeholder="Order notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
          />
        </div>

        {status === "error" && (
          <p className="font-body text-red-400/80 text-xs">
            Please add at least one item and fill in your name, phone{fulfilment === "delivery" ? ", and address" : ""}.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200 disabled:opacity-60"
        >
          {status === "loading" ? "Placing order…" : `Place Order · £${total.toFixed(2)}`}
        </button>

        <p className="font-body text-white/30 text-xs text-center leading-relaxed">
          Prefer to order by phone? Call or WhatsApp us on{" "}
          <a href="https://wa.me/447624313999" target="_blank" rel="noopener noreferrer" className="text-white/60 underline">
            +44 7624 313999
          </a>
        </p>
      </div>
    </form>
  );
}
