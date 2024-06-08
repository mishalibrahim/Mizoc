import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Provider of Energy Equipment & MEP Materials | Mizoc LLC FZ",
  description:
    "Discover Mizoc LLC FZ, a leading provider of energy equipment and MEP materials in Dubai. Specializing in oil & gas and MEP sectors, we offer top-quality products, customized solutions, and exceptional customer service to clients worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="energy equipment, MEP materials, oil and gas equipment, MEP solutions, Dubai, Mizoc LLC FZ, drilling equipment, pipelines, valves, pumps, electrical components, HVAC systems, plumbing fixtures, insulation materials, EV products, automobile spare parts"
        />
        <meta name="author" content="Mizoc LLC FZ" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
