import Link from "next/link";

const capabilities = [
  {
    title: "Patient Management & Records",
    description:
      "Centralized patient database designed for structured data storage and controlled access.",
    points: [
      "Patient registration & demographics",
      "Medical history tracking",
      "Treatment records",
      "Role-based access control",
      "Quick search & retrieval",
    ],
    result: "Reduced paperwork and improved record accuracy.",
  },
  {
    title: "Appointment & Billing Management",
    description:
      "Integrated appointment scheduling and financial tracking system.",
    points: [
      "Appointment scheduling & rescheduling",
      "Automated invoice generation",
      "Consultation & procedure billing",
      "Pharmacy billing integration",
      "Revenue reporting & transaction history",
    ],
    result: "Improved administrative efficiency and financial transparency.",
  },
  {
    title: "Laboratory Management",
    description: "Streamlined lab workflow and report tracking.",
    points: [
      "Test registration",
      "Report storage",
      "Historical test data access",
      "Patient-linked diagnostics",
    ],
    result: "Faster reporting and structured data retention.",
  },
];

const stack = [
  {
    label: "Frontend",
    value: "C# Windows Forms",
  },
  {
    label: "Backend",
    value: ".NET Framework",
  },
  {
    label: "Database",
    value: "Microsoft SQL Server",
  },
];

const architecture = [
  "SQL Server relational database",
  "Role-based authentication",
  "Modular architecture",
  "Secure local deployment",
  "Multi-user access environment",
];

const designedFor = [
  "Small to mid-size hospitals",
  "Multi-department clinics",
  "Diagnostic laboratories",
  "Medical centers requiring on-premise systems",
];

const customization = [
  "Advanced reporting dashboards",
  "Additional workflow modules",
  "Integration with new departments",
  "Gradual feature expansion",
];

export default function HMSDesktopPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071226] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f7df6]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#f6c35b]/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#f6c35b]">
              Hospital Management System (Desktop)
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Structured Digital Infrastructure for Hospitals & Clinics
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              A production-grade desktop-based Hospital Information Management
              System engineered to digitize and streamline hospital operations
              with precision and reliability. Developed and deployed in a live
              hospital environment, this platform centralizes patient data,
              billing, laboratory operations, and pharmacy management into a
              structured and secure system.
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
                Book a System Demo
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8bd3f7]">
              Deployment Overview
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white p-5 text-[#102d35]">
                <p className="text-sm font-bold text-[#6b7280]">Client</p>
                <h3 className="mt-1 text-2xl font-black">
                  Khawaja Hospital, Kahna
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-5 text-[#102d35]">
                <p className="text-sm font-bold text-[#6b7280]">Platform</p>
                <h3 className="mt-1 text-2xl font-black">
                  Windows Desktop Application
                </h3>
              </div>

              <div className="rounded-2xl bg-[#0f766e] p-5 text-white">
                <p className="text-sm font-bold text-white/70">Status</p>
                <h3 className="mt-1 text-xl font-black">
                  Currently deployed, actively maintained, and supported by the
                  SecAITech engineering team.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              About the Project
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Built to automate and optimize hospital operations.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-lg leading-9 text-[#6b7280]">
              The Hospital Information Management System is a C# .NET-based
              desktop application developed to automate and optimize hospital
              operations. It provides an all in one solution for managing
              patient data, appointments, billing, and pharmacy inventory.
            </p>

            <p className="mt-5 text-lg leading-9 text-[#6b7280]">
              With secure database integration and user-friendly interfaces,
              this system improves administrative workflows, reduces errors, and
              ensures better patient care.
            </p>
          </div>
        </div>
      </section>

      {/* System Capabilities */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              System Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Everything hospitals need for daily operations.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#dde3e8] bg-[#f6f3ec] p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-2xl text-white">
                  ✓
                </div>

                <h3 className="text-2xl font-black text-[#102d35]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3 text-[#31545d]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="font-black text-[#0f766e]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-2xl bg-white p-4">
                  <p className="text-sm font-bold text-[#0f766e]">Result</p>
                  <p className="mt-1 text-sm leading-6 text-[#6b7280]">
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#102d35] p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
                  Technology Stack
                </p>
                <h2 className="mt-4 text-4xl font-black">
                  Reliable desktop architecture for on premise hospital systems.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {stack.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white p-6 text-[#102d35]"
                  >
                    <p className="text-sm font-black uppercase text-[#6b7280]">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{item.value}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white/10 p-6">
              <p className="font-bold text-white/70">Database Note</p>
              <p className="mt-2 leading-8 text-white/80">
                SQL Server database schema designed for products, stock
                transactions, and inventory transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture + Designed For */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#f6f3ec] p-8">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              System Architecture & Security
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#102d35]">
              Built with structured engineering practices.
            </h2>

            <ul className="mt-8 grid gap-4">
              {architecture.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-white p-4 font-semibold text-[#31545d]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 leading-8 text-[#6b7280]">
              Designed for reliability and operational continuity.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#102d35] p-8 text-white">
            <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
              Designed For
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Healthcare facilities that need secure on premise systems.
            </h2>

            <ul className="mt-8 grid gap-4">
              {designedFor.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 font-semibold text-white/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Real Deployment + Feedback */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
              Real-World Deployment
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Actively deployed at Khawaja Hospital.
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/75">
              This system supports daily hospital operations including patient
              flow, billing, laboratory processing, and pharmacy management.
            </p>

            <Link
              href="/case-studies/khawaja-hospital"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#071226]"
            >
              Read Full Case Study →
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#102d35]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Client Feedback
            </p>

            <p className="mt-5 text-lg leading-9 text-[#31545d]">
              “We had a great experience working with SecAITech on the HIMS
              desktop application for Khajawa Hospital. Their team delivered a
              high quality, user friendly, and efficient solution that has
              greatly improved our patient management and hospital operations.
              Their professionalism, technical expertise, and timely delivery
              were impressive, and their ongoing support has been exceptional.”
            </p>

            <div className="mt-8 border-t border-[#dde3e8] pt-6">
              <h3 className="text-xl font-black">Nazar Hussain</h3>
              <p className="text-[#6b7280]">Manager, Khajawa Hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                Customization & Expansion
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#102d35]">
                Built with scalability in mind.
              </h2>

              <p className="mt-5 leading-8 text-[#6b7280]">
                The system can be customized or extended based on your hospital
                workflow and future requirements.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {customization.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-6 font-bold text-[#102d35] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0f766e] px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-black">
            Interested in a Structured Hospital System?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            If you operate a healthcare facility and require a secure,
            structured, and reliable hospital management platform, our
            engineering team is ready to assist.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-bold text-[#0f766e]"
            >
              Request a Consultation
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 font-bold text-white"
            >
              Book a System Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
