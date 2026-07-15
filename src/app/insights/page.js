import Link from "next/link";

const featuredPost = {
  title: "Why Hospitals Need Production-Ready Software, Not Just Demos",
  category: "Healthcare Software",
  date: "Featured Insight",
  description:
    "Hospitals need systems that work every day: patient records, billing, lab reports, pharmacy, inventory, and role-based access. SecAITech focuses on software that can survive real daily operations.",
  href: "/products/hms-desktop",
};

const insights = [
  {
    title: "Hospital Management System: What a Real HMS Should Include",
    category: "HMS",
    description:
      "A practical overview of patient records, OPD scheduling, billing, lab reports, pharmacy, inventory, and access control inside a hospital system.",
    href: "/products/hms-desktop",
  },
  {
    title: "Desktop HMS vs Web-Based HMS: Which One Should You Choose?",
    category: "Healthcare Technology",
    description:
      "Desktop systems are powerful for on-premise operations, while web systems provide easier access, scalability, and cloud-ready workflows.",
    href: "/products/hms-web",
  },
  {
    title: "Why Inventory Management Matters for Pharmacies and Retail Stores",
    category: "Inventory",
    description:
      "Manual stock registers can cause losses, wrong counts, and slow reporting. A digital inventory system improves visibility and control.",
    href: "/products/pos-system",
  },
  {
    title: "How SecAITech Builds Long-Term Client Relationships",
    category: "Company",
    description:
      "We do not disappear after deployment. Our approach includes updates, new modules, support, and long-term improvement.",
    href: "/about",
  },
  {
    title: "What Students Should Learn Before Joining Software Teams",
    category: "Academy",
    description:
      "Project-based learning, Git workflow, testing, deployment basics, SQL, APIs, and real team habits matter more than only watching tutorials.",
    href: "/academy",
  },
  {
    title: "From Paper Registers to Digital Workflows",
    category: "Case Study",
    description:
      "Khawaja Hospital moved from unreliable reporting and manual backup registers to a centralized digital hospital workflow.",
    href: "/case-studies",
  },
];

const topics = [
  "Healthcare Software",
  "Hospital Management System",
  "Inventory Management",
  "Custom Software",
  "QA & Testing",
  "SecAITech Academy",
];

export default function InsightsPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b] ">
              Insights
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl ">
              Ideas lessons and practical notes from building real software.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              Read about healthcare software, hospital systems, inventory
              management, custom platforms, QA, and practical technology
              training from SecAITech.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#latest"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#06111f] transition hover:bg-white"
              >
                Read Insights
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]"
              >
                Discuss a Project
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-6 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Featured Insight
              </p>

              <h2 className="mt-4 text-3xl font-black">{featuredPost.title}</h2>

              <p className="mt-4 leading-8 text-[#6b7280]">
                {featuredPost.description}
              </p>

              <Link
                href={featuredPost.href}
                className="mt-6 inline-block rounded-full bg-[#102d35] px-6 py-3 font-black text-white"
              >
                Read More
              </Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Focus</p>
                <h3 className="mt-1 text-xl font-black">Production Systems</h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Topics</p>
                <h3 className="mt-1 text-xl font-black">HMS, POS, QA</h3>
              </div>

              <div className="rounded-3xl bg-[#0f766e] p-5">
                <p className="text-sm font-bold text-white/70">Goal</p>
                <h3 className="mt-1 text-xl font-black">Practical Learning</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[#dde3e8] bg-white px-5 py-3 text-sm font-black text-[#102d35] shadow-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section id="latest" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Latest Insights
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#102d35]">
                Practical articles for real operations.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#6b7280]">
              These article cards are static data for now. Later, we can move
              them into a JSON file and render them dynamically for your
              assignment requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-[2rem] bg-[#f6f3ec] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#071226] via-[#102d35] to-[#0f766e] p-6 text-center text-white">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                      {post.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">
                      SecAITech Insight
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-[#102d35]">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#6b7280]">
                    {post.description}
                  </p>

                  <Link
                    href={post.href}
                    className="mt-7 inline-block rounded-full bg-[#102d35] px-6 py-3 font-black text-white transition hover:bg-[#0f766e]"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] bg-[#071226] p-8 text-white shadow-xl md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
              Stay Connected
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Want insights or a software consultation?
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Reach out to SecAITech for healthcare software, inventory systems,
              custom development, or training guidance.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#071226]"
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
      </section>
    </main>
  );
}
