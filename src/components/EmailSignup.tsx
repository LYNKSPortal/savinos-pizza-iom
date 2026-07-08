"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 font-body animate-fade-in">
        <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <p className="text-sm font-light text-white/60 tracking-wide">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="relative flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email address"
          aria-label="Email address"
          className={`
            w-full pl-5 pr-36 py-4 rounded-full
            bg-white/[0.07] border
            ${status === "error" ? "border-red-500/60" : "border-white/10"}
            text-white placeholder-white/25
            font-body text-sm
            focus:outline-none focus:border-white/25 focus:bg-white/10
            transition-all duration-300
          `}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            absolute right-1.5
            px-5 py-2.5 rounded-full
            bg-white text-[#0d1117]
            font-body font-semibold text-sm tracking-wide
            transition-all duration-200
            hover:bg-white/90
            active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            whitespace-nowrap
          "
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-black/20 border-t-black/60 rounded-full animate-spin inline-block" />
              Saving
            </span>
          ) : (
            "Notify Me"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400/80 font-body text-center">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
