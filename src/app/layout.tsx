import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "L'As de la Vente — Alexandre Gagliano",
  description:
    "Le guide ultime de la vente et de la scalabilité pour entrepreneurs et Personal Trainers. Deux livres, une mission : faire de vous un champion des affaires.",
  openGraph: {
    title: "L'As de la Vente — Alexandre Gagliano",
    description: "Vendre mieux. Scaler plus vite. Devenir inarrêtable.",
    url: "https://asdelavente.fr",
    siteName: "L'As de la Vente",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col text-[#1a1a2e]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
