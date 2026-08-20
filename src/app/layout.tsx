import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Savino's Pizza — Freshly Made Italian Pizza",
  description:
    "Authentic Italian pizza freshly made in Ballasalla, Isle of Man. Order online for collection or delivery.",
  openGraph: {
    title: "Savino's Pizza — Freshly Made Italian Pizza",
    description: "Authentic Italian pizza freshly made in Ballasalla, Isle of Man.",
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
      <body className="antialiased bg-[#163b49]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
