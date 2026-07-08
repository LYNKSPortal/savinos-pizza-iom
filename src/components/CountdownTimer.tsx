"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTargetDate(): Date {
  return new Date("2026-08-19T00:00:00+01:00");
}

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <span className="font-display font-bold text-5xl sm:text-5xl md:text-6xl text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-body text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white font-light">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [target] = useState<Date>(getTargetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile: 2×2 grid */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:hidden">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Tablet+: single row */}
      <div className="hidden sm:flex gap-10 md:gap-14 justify-center items-start">
        <TimeUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </>
  );
}

function Separator() {
  return (
    <div className="text-white/20 font-display text-4xl md:text-5xl font-light leading-none mt-0.5 select-none">
      /
    </div>
  );
}
