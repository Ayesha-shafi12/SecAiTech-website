import Link from "next/link";

const focusAreas = [
  {
    title: "Healthcare Systems",
    description:
      "Our primary specialization. Hospital management, patient records, billing, lab systems, pharmacy, and inventory — all built for the specific demands of medical environments.",
  },
  {
    title: "Business and Retail Software",
    description:
      "POS systems, inventory management, and operational tools for small and mid-sized businesses that need reliable, affordable software.",
  },
  {
    title: "Custom Software Development",
    description:
      "On-demand tools, automation, and internal systems built to your specific requirements.",
  },
];

const stats = [
  {
    value: "1+",
    label: "Dedicated Professionals",
  },
  {
    value: "5.0",
    label: "Star Rating From Customer",
  },
  {
    value: "2+",
    label: "Years Average Length of Customer Relationship",
  },
  {
    value: "1+",
    label: "Delivered Project",
  },
  {
    value: "1+",
    label: "In Progress Project",
  },
  {
    value: "2+",
    label: "Years With Client Support",
  },
];

const buildProcess = [
  {
    title: "Security First",
    description:
      "Structured access control, clean database design, and secure deployment from day one.",
  },
  {
    title: "Precision Over Volume",
    description: "We build fewer systems, but we build them properly.",
  },
  {
    title: "Practical Scalability",
    description: "Our solutions are engineered to grow with your operations.",
  },
  {
    title: "Transparent Communication",
    description: "Clear scope, honest timelines, and no hidden costs.",
  },
  {
    title: "Long-Term Partnership",
    description: "We become your technology partner, not a one-time vendor.",
  },
];

const values = [
  {
    title: "Honesty",
    description:
      "We prioritize clear communication and client trust. No hidden costs, no exaggerations — just honest work and reliable delivery.",
  },
  {
    title: "Involvement",
    description:
      "We collaborate closely with clients and learners alike. By embracing feedback and diverse ideas, we build smarter and more relevant solutions.",
  },
  {
    title: "Growth Through Innovation",
    description:
      "We focus on practical, scalable technologies to help businesses grow — and we grow alongside them with every project delivered.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f6f3ec]">
      `{/* Hero */}
      <section className="relative overflow-hidden bg-[#071226] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2f7df6]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f6c35b]/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.25em] text-[#f6c35b]">
            About SecAITech
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-3xl">
            A solo founded software engineering studio
            <br />
            building secure, production rade healthcare
            <br />
            and business platforms.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            SecAITech specializes in healthcare technology, designing structured
            platforms that improve operational efficiency for hospitals,
            clinics, medical facilities, and growing businesses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-bold text-[#071226] transition hover:bg-white"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#071226]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      `{/* Our Story */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Built from real operational problems.
            </h2>

            <p className="text-lg leading-9 text-[#6b7280] mt-5">
              We have expanded into retail POS systems and are currently
              building the next generation of our healthcare platform with
              AI-powered features and web-based access.
            </p>
          </div>

          <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-lg leading-9 text-[#6b7280]">
              SecAITech was founded by Qasim a full-stack developer and
              detection engineer with a background in both software development
              and cybersecurity.The idea was simple: too many hospitals and
              small businesses in Pakistan rely on broken Excel sheets, paper
              registers, or overpriced software that does not fit their actual
              workflow. We set out to change that.
            </p>
            {/* 
            <p className="text-lg leading-9 text-[#6b7280]">
              The idea was simple: too many hospitals and small businesses in
              Pakistan rely on broken Excel sheets, paper registers, or
              overpriced software that does not fit their actual workflow. We
              set out to change that.
            </p> */}

            {/* <p className="text-lg leading-9 text-[#6b7280]">
              Our first product — the HMS Desktop — was deployed at Khawaja
              Hospital in January 2023. It has been running every single day
              since, managing patient records, billing, lab reports, and
              pharmacy operations. That is not a demo. That is a production
              system serving real patients.
            </p> */}

            {/* <p className="text-lg leading-9 text-[#6b7280]">
              Since then, we have expanded into retail POS systems and are
              currently building the next generation of our healthcare platform
              with AI-powered features and web-based access.
            </p> */}

            <p className="text-lg leading-9 text-[#6b7280]">
              We work as a long-term technology partner. When we deploy a
              system, we stay. Khawaja Hospital has received continuous updates,
              new modules, and on-site support for over 2 years.
            </p>
          </div>
        </div>
      </section>
      {/* Focus Areas */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              What We Focus On
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Practical platforms for healthcare and business operations.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[2rem] bg-[#f6f3ec] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-2xl text-white">
                  ✓
                </div>

                <h3 className="text-2xl font-black text-[#102d35]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[2rem] bg-white/10 p-6 text-center"
              >
                <h3 className="text-4xl font-black text-[#f6c35b]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-6 text-white/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* How We Build */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              How We Build
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Security-focused, practical, and long-term.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6b7280]">
              Our approach is not about shipping random features. We build
              systems that can survive real daily operations.
            </p>
          </div>

          <div className="grid gap-5">
            {buildProcess.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black text-[#102d35]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-[#6b7280]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Founder */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#102d35] p-8 text-white">
            <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 p-8 text-center">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
                  Meet the Founder
                </p>

                <h3 className="mt-4 text-4xl font-black">Muhammad Qasim</h3>

                <p className="mt-3 text-white/70">Founder and Lead Engineer</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Founder Profile
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Muhammad Qasim
            </h2>

            <p className="mt-2 text-xl font-bold text-[#66bee3]">
              Founder and Lead Engineer
            </p>

            <p className="mt-6 text-lg leading-9 text-[#6b7280]">
              Full-stack developer and security engineer. Background in C#/.NET,
              React, detection engineering, and cybersecurity. Built and
              deployed production healthcare software. Currently building
              AI-powered platforms and retail business tools.
            </p>

            <p className="mt-5 text-lg leading-9 text-[#6b7280]">
              Believer in honest work, practical engineering, and building
              things that actually help people.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://qasimqlf.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#102d35] px-7 py-3 text-center font-bold text-white"
              >
                About Me
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-[#102d35] px-7 py-3 text-center font-bold text-[#102d35]"
              >
                Contact SecAITech
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
            <p className="font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              To build secure, reliable healthcare and business systems.
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-9 text-[#6b7280]">
              To build secure, reliable healthcare and business systems that
              improve daily operations and support sustainable digital
              transformation — at pricing that is fair for everyone.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-3xl bg-[#f6f3ec] p-7"
                >
                  <h3 className="text-2xl font-black text-[#102d35]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#6b7280]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Vision */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#f6c35b]">
            Our Vision
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            To become a trusted healthcare technology partner known for
            engineering quality, security-focused design, and long-term
            reliability.
          </h2>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0f766e] px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-black">Want to Work Together?</h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Whether you are modernizing a healthcare facility or need a custom
            business system, we are ready to talk.
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
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 font-bold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
