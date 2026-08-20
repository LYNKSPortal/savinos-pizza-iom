export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  tag: "One-Time" | "Weekly" | "Monthly";
  description: string;
}

export const events: Event[] = [
  {
    id: "grand-opening",
    title: "Grand Opening",
    date: "Saturday, 22 August 2026",
    time: "12pm – 10pm",
    tag: "One-Time",
    description:
      "Join us as we officially open our doors in Ballasalla! Free garlic bread with every order, live music, and a few surprises along the way.",
  },
  {
    id: "taste-and-test",
    title: "Come Taste & Test Day",
    date: "Sunday, 23 August 2026",
    time: "12pm – 4pm",
    tag: "One-Time",
    description:
      "Sample slices from across the whole menu before we go fully live — tell us what you think and help shape our specials board.",
  },
  {
    id: "thursday-special",
    title: "Thursday Special Day",
    date: "Every Thursday",
    time: "5pm – 10pm",
    tag: "Weekly",
    description:
      "A different specialty pizza at a special price, every single Thursday. Follow our Facebook page to see what's cooking each week.",
  },
  {
    id: "family-sunday",
    title: "Family Sunday",
    date: "Every Sunday",
    time: "12pm – 9pm",
    tag: "Weekly",
    description:
      "Kids eat free with every adult main on Sundays. The perfect excuse for a relaxed family dinner.",
  },
  {
    id: "pizza-and-pints",
    title: "Pizza & Pints Night",
    date: "First Friday of the Month",
    time: "6pm – 10pm",
    tag: "Monthly",
    description:
      "Team up with a local brewery for a night of pairing craft beer with our specialty pizzas.",
  },
];
