"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { menu, toppings } from "@/data/menu";

export type Size = "10" | "14";
export type Base = "regular" | "spicy";

export interface CartLine {
  lineId: string;
  itemId: string;
  size: Size;
  base: Base;
  toppings: string[];
}

interface CartContextValue {
  lines: CartLine[];
  sizeChoice: Record<string, Size>;
  getSize: (id: string) => Size;
  setSize: (id: string, size: Size) => void;
  getDefaultCount: (itemId: string, size: Size) => number;
  updateQty: (itemId: string, delta: number) => void;
  duplicateLine: (lineId: string) => void;
  updateLine: (lineId: string, updates: Partial<Pick<CartLine, "size" | "base" | "toppings">>) => void;
  removeLine: (lineId: string) => void;
  lineUnitPrice: (line: CartLine) => number;
  itemCount: number;
  subtotal: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const allItems = menu.flatMap((c) => c.items);

export function isPizzaItem(itemId: string) {
  const category = menu.find((c) => c.items.some((i) => i.id === itemId));
  return category?.id === "pizza-menu";
}

let lineIdCounter = 0;
function nextLineId() {
  lineIdCounter += 1;
  return `line-${Date.now()}-${lineIdCounter}`;
}

function isDefaultLine(line: CartLine, itemId: string, size: Size) {
  return line.itemId === itemId && line.size === size && line.base === "regular" && line.toppings.length === 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [sizeChoice, setSizeChoice] = useState<Record<string, Size>>({});

  function getSize(id: string): Size {
    return sizeChoice[id] ?? "10";
  }

  function setSize(id: string, size: Size) {
    setSizeChoice((prev) => ({ ...prev, [id]: size }));
  }

  function getDefaultCount(itemId: string, size: Size) {
    return lines.filter((l) => isDefaultLine(l, itemId, size)).length;
  }

  function updateQty(itemId: string, delta: number) {
    const size = getSize(itemId);
    setLines((prev) => {
      if (delta > 0) {
        const additions = Array.from({ length: delta }, () => ({
          lineId: nextLineId(),
          itemId,
          size,
          base: "regular" as Base,
          toppings: [] as string[],
        }));
        return [...prev, ...additions];
      }
      let remaining = -delta;
      const next = [...prev];
      for (let i = next.length - 1; i >= 0 && remaining > 0; i--) {
        if (isDefaultLine(next[i], itemId, size)) {
          next.splice(i, 1);
          remaining--;
        }
      }
      return next;
    });
  }

  function duplicateLine(lineId: string) {
    setLines((prev) => {
      const line = prev.find((l) => l.lineId === lineId);
      if (!line) return prev;
      return [...prev, { ...line, lineId: nextLineId() }];
    });
  }

  function updateLine(lineId: string, updates: Partial<Pick<CartLine, "size" | "base" | "toppings">>) {
    setLines((prev) => prev.map((l) => (l.lineId === lineId ? { ...l, ...updates } : l)));
  }

  function removeLine(lineId: string) {
    setLines((prev) => prev.filter((l) => l.lineId !== lineId));
  }

  function clearCart() {
    setLines([]);
  }

  function lineUnitPrice(line: CartLine) {
    const item = allItems.find((i) => i.id === line.itemId);
    if (!item) return 0;
    const base = item.singlePrice ?? (line.size === "10" ? item.price10 : item.price14);
    const toppingsPrice = line.toppings.reduce((sum, tId) => {
      const topping = toppings.find((t) => t.id === tId);
      if (!topping) return sum;
      return sum + (line.size === "10" ? topping.price10 : topping.price14);
    }, 0);
    return base + toppingsPrice;
  }

  const itemCount = useMemo(() => lines.length, [lines]);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + lineUnitPrice(l), 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    sizeChoice,
    getSize,
    setSize,
    getDefaultCount,
    updateQty,
    duplicateLine,
    updateLine,
    removeLine,
    lineUnitPrice,
    itemCount,
    subtotal,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
