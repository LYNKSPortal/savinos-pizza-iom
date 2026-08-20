import type { Metadata } from "next";
import OrderForm from "@/components/OrderForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Order — Savino's Pizza",
  description: "Order Savino's Pizza online for collection or delivery in Ballasalla, Isle of Man.",
};

export default function Order() {
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
          <p className="font-body text-[#fbb22a] tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Collection & Delivery</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">Order Online</h1>
        </div>
      </section>

      <OrderForm />
    </div>
  );
}
