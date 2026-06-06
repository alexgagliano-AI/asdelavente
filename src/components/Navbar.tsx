"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/livre",   label: "Le Livre" },
  { href: "/fitness", label: "Fitness Edition" },
  { href: "/alex",    label: "Alex" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#c0392b] flex items-center justify-center">
            <span className="text-white font-black text-sm">A</span>
          </div>
          <span className="text-white font-black text-lg tracking-tight">
            L&apos;<span className="text-[#c0392b]">As</span> de la Vente
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-red ml-2 !py-2 !px-5 !text-sm">
            Commander
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a2e] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white py-3 border-b border-white/10 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-red mt-4 text-center !block">
            Commander
          </Link>
        </div>
      )}
    </header>
  );
}
