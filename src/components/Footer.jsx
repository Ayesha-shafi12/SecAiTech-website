import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071226] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">SecAITech</h2>

          <p className="mt-5 max-w-lg leading-8 text-white/70">
            SecAITech is a software engineering studio building secure
            healthcare platforms, POS systems, and custom business software.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              Threads
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              Upwork
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-bold">Our Products</h3>

          <div className="mt-5 flex flex-col gap-3 text-white/70">
            <Link href="/products/hms-desktop" className="hover:text-white">
              HMS Desktop
            </Link>
            <Link href="/products/hms-web" className="hover:text-white">
              HMS Web
            </Link>
            <Link href="/products/pos-system" className="hover:text-white">
              POS System
            </Link>
            <Link href="/case-studies" className="hover:text-white">
              Case Studies
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold">Contact Info</h3>

          <div className="mt-5 space-y-3 text-white/70">
            <p>hello@secaitech.com</p>
            <p>Kasur, Punjab, Pakistan (55050)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/60">
        Copyright © 2026 SecAITech Software Engineering Studio |{" "}
        <Link href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms-and-conditions" className="hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
