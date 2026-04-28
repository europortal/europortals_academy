"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Courses", href: "/courses" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const pathname              = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#0B1F3A] border-t-[3px] border-[#F0A500] py-4 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16 flex-shrink-0 transition-transform hover:scale-105">
            <img src="/logo.png" alt="Europortals Academy Logo" className="object-contain w-full h-full drop-shadow-md scale-110" />
          </div>
          <div>
            <p className="font-display font-bold text-base leading-tight text-white">
              Europortals
            </p>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#F0A500]">
              Academy
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium transition-all duration-150 ${
                pathname === l.href
                  ? "text-white border-b-2 border-[#F0A500]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:8606348848"
            className="ml-3 bg-[#F0A500] hover:bg-[#d99400] text-[#0B1F3A] font-bold rounded-lg text-sm py-2 px-5 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-slate-800 shadow-xl px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-[#F0A500] bg-white/5"
                  : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:8606348848"
            className="block w-full text-center bg-[#F0A500] hover:bg-[#d99400] text-[#0B1F3A] font-bold rounded-lg py-3 mt-2 transition-all"
          >
            📞 Call: 8606348848
          </a>
        </div>
      )}
    </header>
  );
}
