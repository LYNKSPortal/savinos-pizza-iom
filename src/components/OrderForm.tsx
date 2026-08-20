"use client";

import { useMemo, useState } from "react";
import { menu } from "@/data/menu";

type Fulfilment = "collection" | "delivery";
type Status = "idle" | "loading" | "success" | "error";
type Size = "10" | "14";

function cartKey(id: string, size: Size) {
  return `${id}__${size}`;
}

export default function OrderForm() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [sizeChoice, setSizeChoice] = useState<Record<string, Size>>({});
  const [fulfilment, setFulfilment] = useState<Fulfilment>("collection");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const allItems = useMemo(() => menu.flatMap((c) => c.items), []);

  const cartEntries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const subtotal = cartEntries.reduce((sum, [key, qty]) => {
    const [id, size] = key.split("__") as [string, Size];
    const item = allItems.find((i) => i.id === id);
    if (!item) return sum;
    const price = item.singlePrice ?? (size === "10" ? item.price10 : item.price14);
    return sum + price * qty;
  }, 0);
  const deliveryFee = fulfilment === "delivery" && subtotal > 0 ? 2.5 : 0;
  const total = subtotal + deliveryFee;

  function getSize(id: string): Size {
    return sizeChoice[id] ?? "10";
  }

  function setSize(id: string, size: Size) {
    setSizeChoice((prev) => ({ ...prev, [id]: size }));
  }

  function updateQty(id: string, delta: number) {
    const size = getSize(id);
    const key = cartKey(id, size);
    setCart((prev) => {
      const next = Math.max(0, (prev[key] ?? 0) + delta);
      return { ...prev, [key]: next };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (cartEntries.length === 0 || !name.trim() || !phone.trim() || (fulfilment === "delivery" && !address.trim())) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
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

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

      {/* Menu selection */}
      <div className="lg:col-span-2 flex flex-col gap-14">
        {menu.map((category) => (
          <div key={category.id}>
            <h2 className="font-display text-2xl font-bold text-white mb-6">{category.title}</h2>
            <div className="flex flex-col gap-4">
              {category.items.map((item) => {
                const size = getSize(item.id);
                const qty = cart[cartKey(item.id, size)] ?? 0;
                const price = item.singlePrice ?? (size === "10" ? item.price10 : item.price14);
                return (
                  <div key={item.id} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold text-white">{item.name}</h3>
                      <p className="font-body text-white/40 text-xs leading-relaxed mt-1 line-clamp-1">{item.description}</p>
                      <span className="font-body text-white/70 text-sm mt-1 inline-block">£{price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {item.singlePrice === undefined && (
                        <div className="flex bg-white/5 rounded-full p-0.5">
                          {(["10", "14"] as Size[]).map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSize(item.id, s)}
                              className={`px-2.5 py-1 rounded-full font-body text-xs transition-colors ${
                                size === s ? "bg-white text-[#163b49]" : "text-white/50"
                              }`}
                            >
                              {s}&quot;
                            </button>
                          ))}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        disabled={qty === 0}
                        className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center disabled:opacity-30 hover:bg-white/10 transition-colors"
                      >
                        −
                      </button>
                      <span className="font-body text-white text-sm w-4 text-center tabular-nums">{qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-28 bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
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
          {cartEntries.length === 0 ? (
            <p className="font-body text-white/40 text-sm">Your cart is empty. Add items from the menu.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {cartEntries.map(([key, qty]) => {
                const [id, size] = key.split("__") as [string, Size];
                const item = allItems.find((i) => i.id === id)!;
                const price = item.singlePrice ?? (size === "10" ? item.price10 : item.price14);
                return (
                  <div key={key} className="flex justify-between font-body text-sm text-white/70">
                    <span>{qty}× {item.name}{item.singlePrice === undefined ? ` (${size}")` : ""}</span>
                    <span>£{(price * qty).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>
          )}

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
      </div>
    </form>
  );
}
