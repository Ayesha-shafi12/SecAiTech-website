import Link from "next/link";

const features = [
  {
    title: "Patient Management",
    description:
      "Securely record patient demographics, histories, treatment plans, and visit logs.",
  },
  {
    title: "Appointment Scheduling",
    description:
      "Enable online appointment booking, calendar management, and automated reminders.",
  },
  {
    title: "Doctor & Staff Management",
    description:
      "Assign roles, manage shifts, and track staff performance inside the system.",
  },
  {
    title: "Medication & Pharmacy",
    description:
      "Inventory tracking, prescription management, and low-stock alerts for pharmacy operations.",
  },
  {
    title: "Billing & Finance",
    description:
      "Generate invoices, track payments, and produce detailed financial reports.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards and downloadable reports for smarter decision-making.",
  },
];

const reasons = [
  "Need for multi-location access",
  "Simplified maintenance and updates",
  "Integration with cloud backups and analytics",
  "Modern, user-friendly interfaces accessible on any device",
];

const stack = [
  {
    title: "Frontend",
    detail: "ASP.NET MVC",
    description: "UI and reporting dashboard under development.",
  },
  {
    title: "Backend",
    detail: "C# (.NET Core)",
    description: "Backend logic implemented for real-time stock updates.",
  },
  {
    title: "Database",
    detail: "SQL Server",
    description:
      "Database schema designed for products, stock transactions, and inventory transactions.",
  },
];

export default function HMSWebPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071226] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2f7df6]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6c35b]/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#f6c35b]">
              Health Care HIMS AI Powered
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              AI-Powered Hospital Management System
            </h1>

            <p className="mt-5 text-2xl font-bold text-[#8bd3f7]">
              Modern Hospital Management Solution for the Digital Era
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              The AI Powered Health Care Hospital Information Management System
              is a web application built to streamline every aspect of hospital
              operations. Unlike desktop based solutions, this platform provides
              secure, real time access from anywhere.
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
                Become an Early Tester
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8bd3f7]">
              Project Status
            </p>

            <div className="mt-6 rounded-3xl bg-white p-6 text-[#102d35]">
              <h3 className="text-3xl font-black">In Progress</h3>

              <p className="mt-4 leading-8 text-[#6b7280]">
                Core modules such as patient records, appointment scheduling,
                doctor management, and medication tracking are developed.
                Further enhancements and refinements are underway.
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-[#0f766e] p-6 text-white">
              <p className="text-sm font-bold text-white/70">Purpose</p>
              <h3 className="mt-2 text-xl font-black">
                Cloud ready, browser accessible healthcare management system.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Project Overview
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Built for hospitals that need access from anywhere.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-lg leading-9 text-[#6b7280]">
              This project was initiated after realizing that many hospitals and
              clinics prefer cloud-based or browser accessible systems for
              easier deployment and scalability.
            </p>

            <p className="mt-5 text-lg leading-9 text-[#6b7280]">
              The goal is to create a flexible, high demand hospital management
              solution that healthcare providers can adopt easily while keeping
              operations secure, structured, and modern.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Technology Stack
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Modern web technologies for scalable healthcare systems.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stack.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#dde3e8] bg-[#f6f3ec] p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                  {item.title}
                </p>

                <h3 className="mt-4 text-3xl font-black text-[#102d35]">
                  {item.detail}
                </h3>

                <p className="mt-5 leading-8 text-[#6b7280]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Building */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Why We&apos;re Building This
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Solving the limits of desktop only hospital systems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6b7280]">
              After successfully delivering a C# WinForms desktop application
              for Khawaja Hospital, SecAITech identified key challenges that
              web-based solutions can solve.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl bg-white p-6 font-bold text-[#102d35] shadow-sm"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Key Features Under Development
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Core modules for complete hospital management.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] bg-[#f6f3ec] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-2xl text-white">
                  ✓
                </div>

                <h3 className="text-2xl font-black text-[#102d35]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Early Tester CTA */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
            Want to Stay Updated or Become an Early Tester?
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Help shape the future of hospital management software.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            SecAITech is actively seeking feedback from healthcare providers to
            shape this system into the most effective hospital management
            solution.
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
