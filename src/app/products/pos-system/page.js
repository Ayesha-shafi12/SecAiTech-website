import Link from "next/link";

const galleryItems = [
  {
    title: "Inventory Dashboard",
    description:
      "Overview of stock levels, alerts, transactions, and business activity.",
  },
  {
    title: "Product Management",
    description:
      "Manage product details, categories, pricing, and available quantity.",
  },
  {
    title: "Stock Transactions",
    description:
      "Track purchases, sales, transfers, adjustments, and write-offs.",
  },
  {
    title: "Inventory Valuation",
    description:
      "View cost tracking, stock value, and financial inventory impact.",
  },
  {
    title: "Reports & Insights",
    description:
      "Generate stock reports, low-stock alerts, and transaction history.",
  },
  {
    title: "Business Analysis",
    description:
      "Understand stock movement and reduce manual operational errors.",
  },
];

const stack = [
  {
    title: "Frontend",
    value: "ASP.NET MVC",
    description: "UI and reporting dashboard under development.",
  },
  {
    title: "Backend",
    value: "C# (.NET Core)",
    description: "Backend logic implemented for real-time stock updates.",
  },
  {
    title: "Database",
    value: "SQL Server",
    description:
      "Database schema designed for products, stock transactions, and inventory transactions.",
  },
];

const features = [
  {
    title: "Stock Transactions",
    subtitle: "Physical Stock Movement",
    points: [
      "Tracks inward and outward movement of stock.",
      "Supports purchases, sales, transfers, stock adjustments, and write-offs.",
      "Automatically updates real-time stock levels for each product.",
    ],
  },
  {
    title: "Inventory Transactions",
    subtitle: "Financial & Cost Tracking",
    points: [
      "Records unit costs and total inventory value.",
      "Maintains accurate cost calculations using FIFO/LIFO methods.",
      "Provides financial impact analysis for profit and loss calculations.",
    ],
  },
  {
    title: "Reporting & Insights",
    subtitle: "Stock Reports & Business Analysis",
    points: [
      "Real-time stock reports including low-stock alerts and stock adjustments.",
      "Inventory valuation reports with total stock value and cost tracking.",
      "Transaction history tracking for audits and business analysis.",
    ],
  },
];

const businessTypes = [
  "Retail Store",
  "Pharmacy",
  "Warehouse",
  "Small Business",
  "Inventory Team",
  "Operations Department",
];

export default function POSSystemPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071226] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2f7df6]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6c35b]/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#f6c35b]">
              Inventory & Stock Management System
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Modern Inventory Management Solution
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              A modern, robust web-based solution designed to help businesses
              efficiently track inventory levels, manage transactions, and
              maintain accurate financial records. This system streamlines
              operations by integrating physical stock movement with financial
              tracking, reducing manual errors and enhancing decision-making.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-bold text-[#071226] transition hover:bg-white"
              >
                Schedule a Free Consultation
              </Link>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#071226]"
              >
                Want Early Access?
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8bd3f7]">
              Project Overview
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-[#102d35]">
                <p className="text-sm font-bold text-[#6b7280]">Status</p>
                <h3 className="mt-1 text-2xl font-black">In Development</h3>
              </div>

              <div className="rounded-2xl bg-white p-5 text-[#102d35]">
                <p className="text-sm font-bold text-[#6b7280]">Platform</p>
                <h3 className="mt-1 text-2xl font-black">Web Application</h3>
              </div>

              <div className="rounded-2xl bg-[#0f766e] p-5 text-white">
                <p className="text-sm font-bold text-white/70">Purpose</p>
                <h3 className="mt-1 text-xl font-black">
                  Real-time stock tracking with financial inventory visibility.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Project Gallery
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Visual modules for inventory operations.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#6b7280]">
              These gallery cards represent the key screens and modules of the
              inventory management workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#071226] via-[#102d35] to-[#0f766e] p-6 text-center text-white">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
                      Screen {index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-[#6b7280]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#102d35] p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
                  Technology Stack
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Built with a reliable .NET and SQL Server architecture.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {stack.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl bg-white p-6 text-[#102d35]"
                  >
                    <p className="text-sm font-black uppercase text-[#6b7280]">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">{item.value}</h3>

                    <p className="mt-4 text-sm leading-6 text-[#6b7280]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Core Features
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Stock movement, cost tracking, and reporting in one system.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-2xl text-white">
                  ✓
                </div>

                <p className="font-bold uppercase tracking-[0.15em] text-[#0f766e]">
                  {feature.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#102d35]">
                  {feature.title}
                </h3>

                <ul className="mt-6 space-y-4 text-[#6b7280]">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="font-black text-[#0f766e]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Building */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Why We&apos;re Building This Solution
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Built for businesses struggling with manual stock registers.
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#6b7280]">
              After working with businesses that struggled with manual stock
              registers and fragmented tools, SecAITech set out to create an
              affordable, scalable inventory management platform.
            </p>

            <p className="mt-5 text-lg leading-9 text-[#6b7280]">
              Whether you run a retail store, pharmacy, or warehouse, this
              system empowers you to maintain clarity over stock, reduce losses,
              and improve operational efficiency.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessTypes.map((type) => (
              <div
                key={type}
                className="rounded-3xl bg-[#f6f3ec] p-6 text-center text-xl font-black text-[#102d35]"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
            Want Early Access or a Demo?
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Test or customize this system for your business.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            If you’re interested in testing this system or customizing it for
            your business, reach out today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#f6c35b] px-8 py-4 font-bold text-[#071226]"
            >
              Schedule a Free Consultation
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 font-bold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
