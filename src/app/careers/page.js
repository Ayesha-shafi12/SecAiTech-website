import Link from "next/link";

const jobs = [
  {
    title: "Remote AI Engineer (Fresh/Entry-Level)",
    description:
      "We are looking for a passionate AI Engineer (Fresh/Entry-Level) to join our remote team. This is a great opportunity for individuals eager to gain hands-on experience.",
    status: "Deadline Closed",
    type: "Full Time",
    location: "Remote",
    experience: "Fresh / Entry-Level",
    category: "AI Engineer",
  },
  {
    title: "Junior .NET Developer",
    description:
      "At SecAITech, we’re looking for a fresh or junior .NET Developer with 0–1 year experience to assist with our projects. This is a great opportunity to gain hands-on experience and work on real software.",
    status: "Deadline Closed",
    type: "Part Time",
    location: "Remote",
    experience: "0–1 Year",
    category: ".NET Developer",
  },
];

const filters = [
  {
    label: "Job Category",
    items: [
      "All Job Category",
      "Accounting & Finance",
      "App Developer",
      "Web Developer",
    ],
  },
  {
    label: "Job Type",
    items: ["All Job Type", "Full Time", "Part Time"],
  },
  {
    label: "Job Location",
    items: ["All Job Location", "Remote"],
  },
];

const culture = [
  {
    title: "Real Production Work",
    description:
      "You won’t build throwaway projects. Everything we ship runs in production, serving real users.",
  },
  {
    title: "Learn Constantly",
    description:
      "We work with modern stacks, AI integration, and security-first practices. You’ll grow fast.",
  },
  {
    title: "Flexible and Remote",
    description:
      "We’re remote-friendly and flexible on hours. What matters is the quality of your work, not when you do it.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b]">
              Careers at SecAITech
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
              Work With Us
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              We’re a small, focused studio. When we hire, we look for people
              who want to build real things and grow with us.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@secaitech.com"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#06111f] transition hover:bg-white"
              >
                Send Your Profile
              </a>

              <a
                href="#jobs"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]"
              >
                View Jobs
              </a>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-6 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Current Hiring Status
              </p>

              <h2 className="mt-4 text-3xl font-black">
                No Open Positions Right Now
              </h2>

              <p className="mt-4 leading-8 text-[#6b7280]">
                We don’t have active openings at the moment, but we’re always
                interested in hearing from talented people. If you’re a
                developer, designer, or QA engineer who wants to work on
                production healthcare and business software, send us your
                portfolio.
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-[#0f766e] p-6">
              <p className="text-sm font-bold text-white/70">Portfolio Email</p>
              <a
                href="mailto:hello@secaitech.com"
                className="mt-2 block text-2xl font-black text-white"
              >
                hello@secaitech.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Jobs */}
      <section id="jobs" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* Filters */}
            <aside className="rounded-[2rem] bg-white p-8 shadow-sm lg:sticky lg:top-32">
              <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Job Filters
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#102d35]">
                Browse opportunities.
              </h2>

              <div className="mt-8 space-y-5">
                {filters.map((filter) => (
                  <div key={filter.label}>
                    <label className="font-bold text-[#102d35]">
                      {filter.label}
                    </label>

                    <select className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 font-semibold text-[#31545d] outline-none focus:border-[#0f766e]">
                      {filter.items.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-[#f6f3ec] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Jobs Found
                </p>
                <h3 className="mt-2 text-4xl font-black text-[#102d35]">
                  2 Jobs
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                  Displayed Here: 1 - 2 Jobs
                </p>
              </div>
            </aside>

            {/* Job Cards */}
            <div>
              <div className="mb-8">
                <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                  Available Listings
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#102d35]">
                  Previous job openings.
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-[#6b7280]">
                  These roles are currently closed, but they show the kind of
                  talent SecAITech looks for when hiring.
                </p>
              </div>

              <div className="grid gap-6">
                {jobs.map((job) => (
                  <article
                    key={job.title}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                      <div className="p-8">
                        <div className="flex flex-wrap gap-3">
                          <span className="rounded-full bg-[#f6f3ec] px-4 py-2 text-sm font-black text-[#0f766e]">
                            {job.category}
                          </span>

                          <span className="rounded-full bg-[#ffe8e8] px-4 py-2 text-sm font-black text-[#b42318]">
                            {job.status}
                          </span>
                        </div>

                        <h3 className="mt-6 text-3xl font-black text-[#102d35]">
                          {job.title}
                        </h3>

                        <p className="mt-4 max-w-3xl leading-8 text-[#6b7280]">
                          {job.description}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl bg-[#f6f3ec] p-4">
                            <p className="text-xs font-black uppercase text-[#6b7280]">
                              Job Type
                            </p>
                            <p className="mt-1 font-black text-[#102d35]">
                              {job.type}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-[#f6f3ec] p-4">
                            <p className="text-xs font-black uppercase text-[#6b7280]">
                              Location
                            </p>
                            <p className="mt-1 font-black text-[#102d35]">
                              {job.location}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-[#f6f3ec] p-4">
                            <p className="text-xs font-black uppercase text-[#6b7280]">
                              Experience
                            </p>
                            <p className="mt-1 font-black text-[#102d35]">
                              {job.experience}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center bg-[#102d35] p-8 text-white lg:w-64">
                        <div className="text-center">
                          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                            Status
                          </p>
                          <h4 className="mt-3 text-2xl font-black">Closed</h4>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Why Work With SecAITech
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Small team. Real projects. Fast learning.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {culture.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] bg-[#f6f3ec] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#102d35]">
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

      {/* CTA */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0f766e] text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black">
                Want to work with SecAITech in the future?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Send your portfolio, GitHub, LinkedIn, or resume. We’ll keep it
                for future openings in development, design, QA, AI, and software
                engineering roles.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@secaitech.com"
                className="rounded-full bg-white px-8 py-4 text-center font-black text-[#0f766e]"
              >
                Send Profile
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
