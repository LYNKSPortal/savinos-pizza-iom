"use client";

import Image from "next/image";
import { menu } from "@/data/menu";
import { useCart, Size } from "@/context/CartContext";

export default function OrderMenu() {
  const { getDefaultCount, getSize, setSize, updateQty } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-14">
      {menu.map((category) => (
        <div key={category.id}>
          <h2 className="font-display text-2xl font-bold text-white mb-6">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {category.items.map((item) => {
              const size = getSize(item.id);
              const qty = getDefaultCount(item.id, size);
              const price = item.singlePrice ?? (size === "10" ? item.price10 : item.price14);
              return (
                <div
                  key={item.id}
                  className="flex flex-col rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="relative aspect-square">
                    <Image src={item.image ?? "/lots-of-pizzas.jpg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      <h3 className="font-display text-base font-bold text-white leading-snug">{item.name}</h3>
                      <p className="font-body text-white/40 text-xs leading-relaxed mt-1 line-clamp-2">{item.description}</p>
                    </div>

                    {item.singlePrice === undefined && (
                      <div className="flex bg-white/5 rounded-full p-0.5 w-fit">
                        {(["10", "14"] as Size[]).map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSize(item.id, s)}
                            className={`px-3 py-1 rounded-full font-body text-xs transition-colors ${
                              size === s ? "bg-white text-[#163b49]" : "text-white/50"
                            }`}
                          >
                            {s}&quot; inch
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-1">
                      <span className="font-body text-white font-bold text-lg">£{price.toFixed(2)}</span>
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          aria-label={`Add ${item.name}`}
                          className="w-9 h-9 rounded-full bg-[#fbb22a] text-[#163b49] flex items-center justify-center font-bold text-lg hover:bg-[#fbb22a]/90 transition-colors"
                        >
                          +
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            −
                          </button>
                          <span className="font-body text-white text-sm w-4 text-center tabular-nums">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-[#fbb22a] text-[#163b49] flex items-center justify-center hover:bg-[#fbb22a]/90 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
