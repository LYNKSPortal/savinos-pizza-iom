import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savino's Pizza — Coming Soon",
  description:
    "Fresh slices, hot ovens, and something delicious are on the way. Sign up to be the first to know when Savino's Pizza opens.",
  openGraph: {
    title: "Savino's Pizza — Coming Soon",
    description: "Fresh slices, hot ovens, and something delicious are on the way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
