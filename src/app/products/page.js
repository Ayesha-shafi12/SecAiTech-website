import Link from "next/link";

const products = [
  {
    title: "HMS Desktop",
    text: "A complete Hospital Management System built with C# and .NET. Live at Khawaja Hospital for 2+ years.",
    href: "/products/hms-desktop",
  },
  {
    title: "HMS Web",
    text: "The next generation browser-based healthcare platform with analytics, multi-location support, and cloud-ready architecture.",
    href: "/products/hms-web",
  },
  {
    title: "POS System",
    text: "A modern Point of Sale system for retail shops, pharmacies, and small businesses.",
    href: "/products/pos-system",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f6f3ec] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
          Our Products
        </p>

        <h1 className="mt-4 text-4xl font-black text-[#102d35] md:text-6xl">
          Production grade software built for daily operations.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-black text-[#66bee3]">
                {product.title}
              </h2>

              <p className="mt-5 leading-8 text-[#6b7280]">{product.text}</p>

              <Link
                href={product.href}
                className="mt-8 inline-block rounded-full bg-[#102d35] px-6 py-3 font-bold text-white"
              >
                View Product
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
