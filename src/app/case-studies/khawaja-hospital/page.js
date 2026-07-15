import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Database,
  FileText,
  HeartPulse,
  Layers,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from "lucide-react";

const challengePoints = [
  "No centralized patient management system",
  "Outdated report-generation software with frequent inaccuracies",
  "Manual appointment handling and documentation",
  "Fragmented record-keeping for doctors and medicines",
  "Lack of technical maintenance and long-term support",
];

const coreAreas = [
  {
    title: "Patient & Appointment Management",
    points: [
      "Automated patient registration with MR number generation",
      "Appointment scheduling for general and emergency visits",
      "Structured appointment slip printing",
      "Centralized patient record storage",
    ],
  },
  {
    title: "Doctor & Medicine Records",
    points: [
      "Doctor database management",
      "Medicine inventory tracking",
      "Linked operational workflows",
    ],
  },
  {
    title: "Dashboard & Reporting",
    points: [
      "Daily and monthly operational summaries",
      "Financial and administrative overview panels",
    ],
  },
  {
    title: "User Experience",
    points: [
      "Simplified interface design",
      "Workflow-based navigation",
      "Continuous UI refinements based on staff feedback",
    ],
  },
];

const reportModule = [
  "Diagnostic test result management",
  "Structured patient-linked test history",
  "Separate forms for different report categories",
  "Customizable test fields",
  "Printable slips and standardized report outputs",
];

const impact = [
  "All patient records digitized — manual paper registers fully eliminated",
  "Billing errors reduced through automated invoice generation and validation",
  "Appointment slips now printed automatically — OPD queue management improved",
  "Lab diagnostic reports module added in Year 2 — separate legacy reporting software fully retired",
  "Pharmacy and medicine inventory tracked in real time within the same system",
  "Role-based access deployed for admin, doctors, and reception staff",
  "System running continuously for 2+ years — maintained, updated, and expanded throughout",
];

const support = [
  "Ongoing technical support",
  "UI improvements",
  "Feature enhancements",
  "Bug resolution",
  "System optimization",
];

const stack = [
  { label: "Frontend", value: "C# Windows Forms" },
  { label: "Backend", value: ".NET Framework" },
  { label: "Database", value: "Microsoft SQL Server" },
  { label: "Deployment Model", value: "On-Premise" },
];

export default function KhawajaHospitalPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b]">
              Khawaja Hospital Case Study
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-5xl">
              Hospital Management System Implementation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              SecAITech designed and deployed a custom Hospital Information
              Management System to centralize operations, reduce errors, and
              establish a scalable digital foundation for long-term growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#06111f] transition hover:bg-white"
              >
                Book a Free Demo
              </Link>

              <Link
                href="/products/hms-desktop"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]"
              >
                View Hospital Management System
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-6 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Project Snapshot
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-bold text-[#6b7280]">Client</p>
                  <h2 className="text-2xl font-black">Khawaja Hospital</h2>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#6b7280]">Industry</p>
                  <h2 className="text-2xl font-black">Healthcare</h2>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#6b7280]">
                    Project Type
                  </p>
                  <h2 className="text-2xl font-black">
                    Desktop-Based Hospital Information Management System
                  </h2>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-[#0f766e] p-6">
              <p className="text-sm font-bold text-white/70">Status</p>
              <h3 className="mt-2 text-2xl font-black">
                Live & Actively Maintained — Deployed for 2+ Years
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#102d35] text-white">
                <FileText className="h-8 w-8 text-[#f6c35b]" />
              </div>

              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                  Executive Summary
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#102d35]">
                  A structured digital system replacing outdated reporting
                  software.
                </h2>

                <p className="mt-6 text-lg leading-9 text-[#6b7280]">
                  Khawaja Hospital required a reliable and structured digital
                  system to replace outdated and error-prone reporting software.
                  Their existing processes were fragmented, partially manual,
                  and lacked centralized data control.
                </p>

                <p className="mt-5 text-lg leading-9 text-[#6b7280]">
                  SecAITech designed and deployed a custom Hospital Information
                  Management System to centralize operations, reduce errors, and
                  establish a scalable digital foundation for long-term growth.
                  Today, the system remains actively deployed and supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff2d6]">
              <AlertTriangle className="h-8 w-8 text-[#f6b94b]" />
            </div>

            <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#0f766e]">
              The Challenge
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Fragmented operations were causing delays and inaccuracies.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6b7280]">
              Prior to implementation, the hospital faced several operational
              limitations that created administrative inefficiencies, reporting
              inconsistencies, and workflow delays.
            </p>
          </div>

          <div className="grid gap-4">
            {challengePoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl bg-[#f6f3ec] p-6 font-bold leading-8 text-[#102d35]"
              >
                <span className="mr-3 text-[#f6b94b]">!</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Layers className="h-8 w-8 text-[#f6c35b]" />
              </div>

              <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                The Solution
              </p>

              <h2 className="mt-4 text-4xl font-black">
                A structured C# .NET desktop HIMS tailored to hospital workflow.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                The system was engineered to unify operations into a
                centralized, secure platform with role-based workflows and
                continuous improvements after deployment.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {coreAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[2rem] bg-white p-7 text-[#102d35]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102d35]">
                    <Stethoscope className="h-6 w-6 text-[#f6c35b]" />
                  </div>

                  <h3 className="text-2xl font-black">{area.title}</h3>

                  <ul className="mt-5 space-y-3">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-7 text-[#6b7280]"
                      >
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year 2 */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#102d35] p-8 text-white md:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <BarChart3 className="h-8 w-8 text-[#f6c35b]" />
                </div>

                <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                  Year 2 Expansion
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  The hospital came back for more.
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/75">
                  After one year of successful daily operation, Khawaja Hospital
                  returned to SecAITech to expand the platform. This is the
                  strongest validation of a software project — a client who paid
                  for more.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-black text-[#102d35]">
                  Dedicated Reports Module
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  SecAITech expanded the platform with a dedicated Reports
                  Module that eliminated reliance on legacy reporting software
                  and consolidated operations within one reliable system.
                </p>

                <div className="mt-8 grid gap-4">
                  {reportModule.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f6f3ec] p-5 font-bold text-[#102d35]"
                    >
                      <CheckCircle className="mr-3 inline h-5 w-5 text-[#0f766e]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102d35]">
              <CheckCircle className="h-8 w-8 text-[#f6c35b]" />
            </div>

            <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Measurable Impact
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Clear improvements after implementation and expansion.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {impact.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] bg-[#f6f3ec] p-6 leading-8 text-[#31545d]"
              >
                <CheckCircle className="mr-3 inline h-5 w-5 text-[#0f766e]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Partnership */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
              <Wrench className="h-8 w-8 text-[#0f766e]" />
            </div>

            <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Long-Term Partnership
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              More than one-time project delivery.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6b7280]">
              Khawaja Hospital continues to operate using the SecAITech HIMS
              platform. This engagement reflects a sustained technology
              partnership rather than one-time project delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 font-bold text-[#102d35] shadow-sm"
              >
                <ShieldCheck className="mb-4 h-7 w-7 text-[#0f766e]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Tech Stack */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] bg-white p-8 text-[#102d35] md:p-12">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Client Testimonial
            </p>

            <blockquote className="mt-6 text-xl leading-10 text-[#31545d]">
              “We had old software that was always giving problems — wrong
              reports, staff had to repeat work, everything was slow. Qasim’s
              team built a proper system for us. From patient registration to
              billing to lab reports, everything is in one place now. What I
              appreciate most is that whenever we needed something added or
              fixed, they came and handled it properly. We expanded the system
              in the second year to handle our diagnostic reports as well. More
              than two years later, the hospital runs on this system every
              single day. I would recommend it to any hospital that is still
              running on manual processes.”
            </blockquote>

            <div className="mt-8 border-t border-[#dde3e8] pt-6">
              <h3 className="text-2xl font-black">Nazar Hussain</h3>
              <p className="text-[#6b7280]">Manager, Khawaja Hospital</p>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white/10 p-8 md:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Database className="h-8 w-8 text-[#f6c35b]" />
            </div>

            <p className="mt-6 font-black uppercase tracking-[0.2em] text-[#f6c35b]">
              Technology Stack
            </p>

            <div className="mt-8 grid gap-4">
              {stack.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white p-5 text-[#102d35]"
                >
                  <p className="text-sm font-black uppercase text-[#6b7280]">
                    {item.label}
                  </p>
                  <h3 className="mt-1 text-xl font-black">{item.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0f766e] text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-4xl font-black">
                Looking to Modernize Your Hospital Operations?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Khawaja Hospital has been running on our HMS for over 2 years.
                If your clinic or hospital is still on paper registers or
                outdated software, we can show you exactly what a transition
                looks like — with zero disruption to your daily operations.
              </p>

              <p className="mt-4 font-bold text-white">
                Request a 20-minute demo. No commitment required.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-center font-black text-[#0f766e]"
              >
                Book a Free Demo
              </Link>

              <Link
                href="/products/hms-desktop"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white"
              >
                View Hospital Management System
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
