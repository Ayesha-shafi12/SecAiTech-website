"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#071226] text-white shadow-lg">
      {/* Top Bar */}
      <div className="border-b border-white/10 bg-[#050b18]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm">
          <p className="text-xs font-semibold text-white/80 sm:text-sm">
            Empowering Healthcare Through Secure Software
          </p>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://www.facebook.com/SecAITech/"
              className="text-white/70 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/secaitech/"
              className="text-white/70 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/@secaitech"
              className="text-white/70 hover:text-white"
            >
              Threads
            </a>
            <a
              href="https://www.linkedin.com/company/secaitech/"
              className="text-white/70 hover:text-white"
            >
              LinkedIn
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              Upwork
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" onClick={closeMenu} className="text-2xl font-black">
          SecAITech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
          <Link href="/" className="text-[#f6c35b]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#f6c35b]">
            About
          </Link>

          <div className="group relative">
            <Link href="/products" className="hover:text-[#f6c35b]">
              Products ▾
            </Link>

            <div className="invisible absolute left-0 top-full w-60 translate-y-3 rounded-xl bg-white p-3 text-[#122c34] opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/products/hms-desktop"
                className="block rounded-lg px-4 py-3 hover:bg-[#f6f3ec]"
              >
                HMS Desktop
              </Link>
              <Link
                href="/products/hms-web"
                className="block rounded-lg px-4 py-3 hover:bg-[#f6f3ec]"
              >
                HMS Web
              </Link>
              <Link
                href="/products/pos-system"
                className="block rounded-lg px-4 py-3 hover:bg-[#f6f3ec]"
              >
                POS System
              </Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/case-studies" className="hover:text-[#f6c35b]">
              Case Studies ▾
            </Link>

            <div className="invisible absolute left-0 top-full w-60 translate-y-3 rounded-xl bg-white p-3 text-[#122c34] opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/case-studies/khawaja-hospital"
                className="block rounded-lg px-4 py-3 hover:bg-[#f6f3ec]"
              >
                Khawaja Hospital
              </Link>
            </div>
          </div>

          <Link href="/insights" className="hover:text-[#f6c35b]">
            Insights
          </Link>

          <Link href="/academy" className="hover:text-[#f6c35b]">
            Academy
          </Link>

          <Link href="/careers" className="hover:text-[#f6c35b]">
            Careers
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-[#2f7df6] px-6 py-3 font-bold text-[#6aa4ff] transition hover:bg-[#2f7df6] hover:text-white"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#2f7df6] px-6 py-3 font-bold text-[#6aa4ff] transition hover:bg-[#2f7df6] hover:text-white"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-2xl font-bold lg:hidden"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#071226] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4 font-bold">
            <Link href="/" onClick={closeMenu} className="text-[#f6c35b]">
              Home
            </Link>

            <Link href="/about" onClick={closeMenu}>
              About
            </Link>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="mb-3 text-[#f6c35b]">Products</p>

              <div className="flex flex-col gap-3 pl-3 text-white/80">
                <Link href="/products/hms-desktop" onClick={closeMenu}>
                  HMS Desktop
                </Link>

                <Link href="/products/hms-web" onClick={closeMenu}>
                  HMS Web
                </Link>

                <Link href="/products/pos-system" onClick={closeMenu}>
                  POS System
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="mb-3 text-[#f6c35b]">Case Studies</p>

              <div className="flex flex-col gap-3 pl-3 text-white/80">
                <Link href="/case-studies/khawaja-hospital" onClick={closeMenu}>
                  Khawaja Hospital
                </Link>
              </div>
            </div>

            <Link href="/insights" onClick={closeMenu}>
              Insights
            </Link>

            <Link href="/academy" onClick={closeMenu}>
              Academy
            </Link>

            <Link href="/careers" onClick={closeMenu}>
              Careers
            </Link>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-full bg-[#2f7df6] px-6 py-3 text-center text-white"
              >
                Contact
              </Link>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#2f7df6] px-6 py-3 text-center text-[#6aa4ff]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
