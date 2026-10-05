"use client";

import { useMemo } from "react";
import Link from "next/link";
import { menu, toppings } from "@/data/menu";
import { useCart, isPizzaItem, Size, Base } from "@/context/CartContext";
import { ORDER_URL } from "@/data/constants";

const BASE_LABELS: Record<Base, string> = {
  regular: "Regular Tomato Base",
  spicy: "Hot & Spicy Base",
};

export default function BasketEditor() {
  const { lines, updateLine, duplicateLine, removeLine, lineUnitPrice, subtotal } = useCart();
  const allItems = useMemo(() => menu.flatMap((c) => c.items), []);

  if (lines.length === 0) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Your basket is empty</h2>
        <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
          Add some pizza to your basket before checking out.
        </p>
        <Link
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
        >
          Browse the Menu
        </Link>
      </section>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-6">
      {lines.map((line) => {
        const item = allItems.find((i) => i.id === line.itemId);
        if (!item) return null;
        const customizable = isPizzaItem(item.id);
        const hasSizes = item.singlePrice === undefined;
        const unitPrice = lineUnitPrice(line);

        return (
          <div key={line.lineId} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                <p className="font-body text-white/40 text-xs leading-relaxed mt-1">{item.description}</p>
              </div>
              <button
                type="button"
                onClick={() => removeLine(line.lineId)}
                aria-label={`Remove ${item.name}`}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Remove
              </button>
            </div>

            {/* Size */}
            {hasSizes && (
              <div>
                <p className="font-body text-white/50 text-xs uppercase tracking-wide mb-2">Size</p>
                <div className="flex bg-white/5 rounded-full p-0.5 w-fit">
                  {(["10", "14"] as Size[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => updateLine(line.lineId, { size: s })}
                      className={`px-4 py-1.5 rounded-full font-body text-xs transition-colors ${
                        line.size === s ? "bg-white text-[#163b49]" : "text-white/50"
                      }`}
                    >
                      {s}&quot; inch
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Base */}
            {customizable && (
              <div>
                <p className="font-body text-white/50 text-xs uppercase tracking-wide mb-2">Base</p>
                <div className="flex bg-white/5 rounded-full p-0.5 w-fit">
                  {(["regular", "spicy"] as Base[]).map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => updateLine(line.lineId, { base: b })}
                      className={`px-4 py-1.5 rounded-full font-body text-xs transition-colors ${
                        line.base === b ? "bg-white text-[#163b49]" : "text-white/50"
                      }`}
                    >
                      {BASE_LABELS[b]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Toppings */}
            {customizable && (
              <div>
                <p className="font-body text-white/50 text-xs uppercase tracking-wide mb-2">Extra Toppings</p>
                <div className="flex flex-wrap gap-2">
                  {toppings.map((topping) => {
                    const selected = line.toppings.includes(topping.id);
                    const toppingPrice = line.size === "10" ? topping.price10 : topping.price14;
                    return (
                      <button
                        key={topping.id}
                        type="button"
                        onClick={() =>
                          updateLine(line.lineId, {
                            toppings: selected
                              ? line.toppings.filter((t) => t !== topping.id)
                              : [...line.toppings, topping.id],
                          })
                        }
                        className={`px-3 py-1.5 rounded-full font-body text-xs border transition-colors ${
                          selected
                            ? "bg-[#fbb22a] border-[#fbb22a] text-[#163b49]"
                            : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        {topping.name} +£{toppingPrice.toFixed(2)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Duplicate + price */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => duplicateLine(line.lineId)}
                className="font-body text-xs text-white/50 hover:text-white transition-colors underline"
              >
                + Add another like this
              </button>
              <span className="font-body text-white font-bold text-lg">£{unitPrice.toFixed(2)}</span>
            </div>
          </div>
        );
      })}

      <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="font-body text-white/50 text-sm">Subtotal</p>
          <p className="font-display text-2xl font-bold text-white">£{subtotal.toFixed(2)}</p>
        </div>
        <Link
          href="/checkout"
          className="px-7 py-3.5 rounded-full bg-white text-[#163b49] font-body font-semibold text-sm hover:bg-white/90 transition-colors duration-200"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
