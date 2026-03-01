"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/35 border-b border-white/20 shadow-sm text-adv-navy antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xl sm:text-2xl font-semibold">RL Associates</div>
          <div className="text-sm text-adv-muted opacity-90 hidden sm:block">Advocates & Legal Consultants</div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-adv-gold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-adv-gold transition-colors">About</Link>
          <Link href="/services" className="hover:text-adv-gold transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-adv-gold transition-colors">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/5 border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/" className="block text-white/90 py-2" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="block text-white/90 py-2" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className="block text-white/90 py-2" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" className="block text-white/90 py-2" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}