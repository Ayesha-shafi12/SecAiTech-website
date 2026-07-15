import Link from "next/link";

const results = [
  "Paper registers fully replaced with digital records",
  "Billing errors eliminated through automated invoicing",
  "OPD processing time significantly reduced",
  "Lab, pharmacy, and inventory operations centralized",
  "Full diagnostic reports module added in Year 2",
  "Running continuously for 2+ years with zero critical downtime",
];

const modules = [
  "Patient Registration",
  "OPD Scheduling",
  "Billing",
  "Lab Reports",
  "Pharmacy Management",
  "Inventory",
  "Role-Based Access Control",
];

const timeline = [
  {
    year: "Before SecAITech",
    title: "Manual and unstable workflow",
    text: "Outdated software kept crashing, staff maintained backup registers, and reporting was unreliable.",
  },
  {
    year: "January 2023",
    title: "HMS deployment started",
    text: "SecAITech deployed a C# .NET desktop hospital management system for Khawaja Hospital.",
  },
  {
    year: "Year 2",
    title: "Diagnostic reports expanded",
    text: "A full diagnostic reports module was added after the system had already been running in production.",
  },
  {
    year: "Today",
    title: "Live with continuous support",
    text: "The system continues to support daily hospital operations with zero critical downtime.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b]">
              Case Studies
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
              Real-world implementations. Real results.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              See how our software performs in production environments.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/case-studies/khawaja-hospital"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#06111f] transition hover:bg-white"
              >
                Read Full Case Study
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]"
              >
                Want Similar Results?
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-6 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Featured Case Study
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Khawaja Hospital, Lahore
              </h2>

              <p className="mt-4 leading-8 text-[#6b7280]">
                A complete Hospital Management System deployment that
                transformed daily operations from paper based processes to a
                fully digital workflow.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Industry</p>
                <h3 className="mt-1 text-xl font-black">Healthcare</h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Live Since</p>
                <h3 className="mt-1 text-xl font-black">January 2023</h3>
              </div>

              <div className="rounded-3xl bg-[#0f766e] p-5">
                <p className="text-sm font-bold text-white/70">Status</p>
                <h3 className="mt-1 text-xl font-black">2+ Years Live</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Card */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#102d35] p-8 text-white md:p-12">
                <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                  Healthcare Live Since January 2023
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                  Khawaja Hospital, Lahore
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/75">
                  A production healthcare system built to replace unreliable
                  software, paper backup registers, billing errors, and
                  disconnected workflows.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm font-bold text-white/60">System</p>
                    <h3 className="mt-1 text-xl font-black">HMS Desktop</h3>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm font-bold text-white/60">
                      Built With
                    </p>
                    <h3 className="mt-1 text-xl font-black">C# .NET</h3>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm font-bold text-white/60">Support</p>
                    <h3 className="mt-1 text-xl font-black">Continuous</h3>
                  </div>

                  <div className="rounded-3xl bg-[#f6c35b] p-5 text-[#102d35]">
                    <p className="text-sm font-black text-[#102d35]/70">
                      Downtime
                    </p>
                    <h3 className="mt-1 text-xl font-black">Zero Critical</h3>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div>
                  <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                    The Challenge
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-[#102d35]">
                    Outdated software was slowing down hospital operations.
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-[#6b7280]">
                    Khawaja Hospital was using outdated software that kept
                    crashing, forcing staff to redo work and maintain paper
                    backup registers. Billing errors were common, reporting was
                    unreliable, and there was no centralized way to manage
                    patient records, lab reports, and pharmacy stock.
                  </p>
                </div>

                <div className="mt-10 border-t border-[#dde3e8] pt-10">
                  <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                    What We Built
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-[#102d35]">
                    One integrated system for core hospital operations.
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-[#6b7280]">
                    SecAITech built a C# .NET desktop application covering
                    patient registration, OPD scheduling, billing, lab reports,
                    pharmacy management, and inventory all in one integrated
                    system with role-based access control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              System Modules
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              One platform. Multiple hospital workflows.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, index) => (
              <div
                key={module}
                className="rounded-[2rem] bg-[#f6f3ec] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102d35] font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-black text-[#102d35]">
                  {module}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                Results
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                Real improvements inside daily hospital operations.
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                The system moved Khawaja Hospital from disconnected processes to
                a centralized digital workflow.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {results.map((result) => (
                <div
                  key={result}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 leading-8 text-white/85"
                >
                  <span className="mr-2 font-black text-[#f6c35b]">✓</span>
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Implementation Timeline
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              From unstable workflow to long-term production support.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {timeline.map((item) => (
              <article
                key={item.year}
                className="rounded-[2rem] bg-white p-7 shadow-sm"
              >
                <p className="font-black text-[#f6b94b]">{item.year}</p>

                <h3 className="mt-3 text-2xl font-black text-[#102d35]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#102d35] p-8 text-white shadow-xl md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
            Testimonial
          </p>

          <blockquote className="mt-6 text-2xl font-semibold leading-10 text-white/90">
            “Before this system, our daily reporting was a mess. Since SecAITech
            built this for us, everything runs from one place. Patient records,
            billing, lab reports all connected. It has been more than two years
            now and we use it every day.”
          </blockquote>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-2xl font-black">Nazar Hussain</h4>
            <p className="mt-1 text-white/60">Manager, Khawaja Hospital</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0f766e] text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black">
                Want similar results? Contact us.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                If your hospital, clinic, or business still depends on manual
                processes, SecAITech can help you move to a structured digital
                system.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-center font-black text-[#0f766e]"
              >
                Contact Us
              </Link>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
