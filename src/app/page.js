import Link from "next/link";

const products = [
  {
    title: "HMS Desktop",
    description:
      "A complete Hospital Management System built with C# and .NET. Live at Khawaja Hospital for 2+ years. Patient records, billing, lab reports, pharmacy, and inventory in one platform.",
    href: "/products/hms-desktop",
    button: "View Product",
  },
  {
    title: "HMS Web (In Development)",
    description:
      "The next generation of our healthcare platform. Browser-based, AI-powered analytics, multi-location support, and cloud-ready architecture. Built with React and .NET Core.",
    href: "/products/hms-web",
    button: "Learn More",
  },
  {
    title: "POS System",
    description:
      "A modern Point of Sale system for retail shops, pharmacies, and small businesses. Fast billing, real-time inventory tracking, sales reporting, and multi-user support.",
    href: "/products/pos-system",
    button: "Learn More",
  },
];

const whySecAITech = [
  {
    title: "2+ Years in Production",
    description:
      "Our HMS has been running for 2+ years at a real hospital. Thousands of records, daily transactions, zero critical downtime.",
  },
  {
    title: "Secure by Design",
    description:
      "Role-based access, structured data architecture, and audit trails built from day one. Security is in the foundation.",
  },
  {
    title: "Built Around Your Workflow",
    description:
      "We configure every system around your actual operations, including custom modules built to exact specifications.",
  },
  {
    title: "Long-Term Partner, Not a Vendor",
    description:
      "We provide continuous updates, new features, and support after deployment. We stay with you long term.",
  },
  {
    title: "Honest Pricing",
    description:
      "Enterprise-quality engineering at fair pricing. No inflated costs, no hidden fees, and no fake promises.",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Consultation",
    description:
      "We understand your workflow, operations, and pain points before writing a single line of code.",
  },
  {
    step: "Step 2",
    title: "Product Demo",
    description:
      "We demo our products so you see exactly what you're getting before any commitment.",
  },
  {
    step: "Step 3",
    title: "Planning & Pricing",
    description:
      "Clear scope, features, timeline, and pricing. No hidden costs.",
  },
  {
    step: "Step 4",
    title: "Deployment & Training",
    description:
      "We install, configure, and train your staff on-site. You're operational from day one.",
  },
  {
    step: "Step 5",
    title: "Ongoing Support",
    description:
      "Continuous maintenance, updates, feature expansions, and technical support for as long as you need.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#102d35] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8ee7df]">
            SecAITech Software Engineering Studio
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            We Build Healthcare Software That Actually Runs in Production
          </h1>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-[#8bd3f7] md:text-2xl md:leading-10">
            Our Hospital Management System has been live at a real hospital for
            over 2 years managing patients, billing, lab reports, and pharmacy
            operations daily. We don&apos;t build demos. We build systems that
            work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-[#102d35] transition hover:bg-[#f6c35b]"
            >
              Request a Consultation
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#102d35]"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#f6b94b]">Our Products</h2>

            <p className="mt-4 text-xl font-bold text-[#66bee3]">
              Production grade software built for daily operations — not pitch
              decks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-3xl border border-[#dde3e8] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-3xl font-black text-[#66bee3]">
                  {product.title}
                </h3>

                <p className="mt-5 leading-8 text-[#6b7280]">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="mt-8 inline-block rounded-full border-2 border-[#2563eb] px-7 py-3 font-bold text-[#2563eb] transition hover:bg-[#2563eb] hover:text-white"
                >
                  {product.button} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#102d35] p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
              Flagship Product
            </p>

            <h2 className="mt-4 text-4xl font-black">
              HMS Desktop Live for 2+ Years
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              A production-grade Hospital Management System built with C# and
              .NET. Deployed at Khawaja Hospital, managing thousands of patient
              records, billing transactions, and lab reports every single day.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/case-studies/khawaja-hospital"
                className="rounded-full bg-[#f6c35b] px-7 py-3 text-center font-bold text-[#102d35]"
              >
                View Case Study
              </Link>

              <a
                href="https://wa.me/"
                target="_blank"
                className="rounded-full border border-white/30 px-7 py-3 text-center font-bold text-white"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-7">
            <h3 className="text-xl font-bold">Feature list:</h3>

            <ul className="mt-5 space-y-3 text-white/80">
              <li>• Patient registration and records</li>
              <li>• OPD appointment scheduling</li>
              <li>• Lab and diagnostic reports</li>
              <li>• Pharmacy and medicine stock</li>
              <li>• Inventory across departments</li>
              <li>• Automated billing and invoicing</li>
              <li>• Analytics dashboards</li>
              <li>• Role-based access control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why SecAITech */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
            Why SecAITech
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#102d35]">
            Built for production, security, and long-term support.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whySecAITech.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-black text-[#102d35]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#102d35]">How We Work</h2>

            <p className="mt-4 text-lg font-semibold text-[#6b7280]">
              A structured 5-step process from consultation to ongoing support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-[#dde3e8] p-6"
              >
                <p className="font-black text-[#f6b94b]">{item.step}</p>
                <h3 className="mt-3 text-xl font-black text-[#102d35]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#102d35] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
              Case Study
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Khawaja Hospital Lahore
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              We designed and deployed a Hospital Management System that
              digitized the entire operation.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Paper registers replaced with digital patient records</li>
              <li>• Billing errors eliminated through automated invoicing</li>
              <li>• OPD processing faster with automated scheduling</li>
              <li>• Lab reports, pharmacy, and inventory centralized</li>
              <li>• New diagnostic reports module added in Year 2</li>
              <li>• Running live for 2+ years with continuous support</li>
            </ul>

            <Link
              href="/case-studies/khawaja-hospital"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#102d35]"
            >
              Read Full Case Study
            </Link>
          </div>

          <div className="rounded-3xl bg-white/10 p-8">
            <p className="text-xl leading-9 text-white/85">
              “Before this system, our daily reporting was a mess. Since
              SecAITech built this for us, everything runs from one place.
              Patient records, billing, lab reports — all connected. It has been
              more than two years now and we use it every day.”
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-black">Nazar Hussain</h3>
              <p className="text-white/60">Manager, Khawaja Hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black text-[#102d35]">Who We Are</h2>

          <p className="mt-6 text-lg leading-9 text-[#6b7280]">
            SecAITech is a software engineering studio founded and run by Qasim
            a full-stack developer and security engineer based in Punjab,
            Pakistan. We specialize in healthcare software and business
            platforms for retail and enterprise.
          </p>

          <p className="mt-5 text-lg leading-9 text-[#6b7280]">
            Our approach is simple: build fewer things, but build them properly.
            Every system we ship is engineered for daily production use, not
            just a demo.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-full bg-[#102d35] px-7 py-3 font-bold text-white"
          >
            Click here
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0f766e] px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-black">
            Ready to Modernize Your Operations?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Whether you’re running a hospital, clinic, or retail business —
            we’ll build the software that fits your workflow.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-bold text-[#0f766e]"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
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
