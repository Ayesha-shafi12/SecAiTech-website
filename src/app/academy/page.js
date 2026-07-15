import Link from "next/link";

const benefits = [
  {
    title: "Project-Based Learning",
    description:
      "You won’t just watch tutorials. You’ll build real features, fix real bugs, and ship real code on actual projects.",
  },
  {
    title: "Industry Workflows",
    description:
      "Git, code reviews, testing, deployment — we teach the workflows real teams use, not just syntax.",
  },
  {
    title: "Mentorship",
    description:
      "Direct guidance from an engineer who builds and ships production software daily.",
  },
];

const onlinePrograms = [
  {
    title: "Playwright Automation with JavaScript + API & SQL",
    mode: "Online",
    description:
      "Kickstart your QA automation career with this beginner-friendly course on Playwright testing using JavaScript. Learn to automate web applications, test APIs with Postman, and validate databases using SQL.",
    duration: "8 Weeks",
    schedule: "Weekend Classes",
    level: "Beginner to Advanced",
    certificate: "Upon Completion",
  },
  {
    title: "Selenium with Java + Postman + SQL",
    mode: "Online",
    description:
      "Master web automation testing using Selenium WebDriver with Java, API testing with Postman, and database validation with SQL. Learn automated tests, dynamic elements, assertions, and real-world projects.",
    duration: "2–3 Months",
    schedule: "Weekend Classes",
    level: "Beginner to Advanced",
    certificate: "Upon Completion",
  },
  {
    title: "Manual Testing & QA Fundamentals",
    mode: "Online",
    description:
      "Learn manual testing, QA workflows, bug tracking, and test case writing. This course also introduces API testing with Postman and basic SQL for database validation.",
    duration: "6–8 Weeks",
    schedule: "Weekend Classes",
    level: "Beginner",
    certificate: "Upon Completion",
  },
];

const offlinePrograms = [
  {
    title: "QA Foundation Program",
    tag: "Offline – Flagship Program",
    description:
      "This program is designed to build strong QA engineers who understand real-world software, not just tools.",
    details: [
      "Level: Beginner → Intermediate",
      "Ideal for: Fresh graduates, career-switchers, non-CS backgrounds",
    ],
  },
  {
    title: "Frontend Foundations Program",
    tag: "HTML, CSS, JavaScript — Offline",
    description:
      "Designed for learners who want to start a career in web development or software engineering.",
    details: [
      "HTML & CSS fundamentals",
      "JavaScript basics",
      "Responsive layouts",
      "Git & project workflow",
      "Building real mini-projects",
    ],
  },
  {
    title: "SQL for QA & Developers",
    tag: "Database Fundamentals — Offline",
    description:
      "A supporting skill program for QA engineers and developers who need database fundamentals.",
    details: [
      "Duration: 4–6 weeks",
      "SQL basics: SELECT, JOIN, GROUP BY",
      "Test-data validation",
      "Bug verification using databases",
      "Working with real application datasets",
    ],
  },
];

const readyPoints = [
  "Industry-Led Training: Learn from professionals working on real software products.",
  "Project-Based Learning: Practice on real systems, not just slides.",
  "Small Batches & Mentorship: Personal guidance and interactive sessions.",
  "Career-Oriented Approach: Resume support, interview preparation, and long-term guidance.",
];

const courseOptions = [
  "Playwright Automation with JS + API & SQL (Online)",
  "Selenium with Java + Postman + SQL (Online)",
  "Manual Testing & QA Fundamentals (Online)",
  "Manual Testing & QA Fundamentals (Offline)",
  "Frontend Foundations Program (HTML, CSS, JavaScript) (Offline)",
  "SQL for QA & Developers (Database Fundamentals) (Offline)",
];

export default function AcademyPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b]">
              SecAITech Academy
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
              Learn. Build. Grow.
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-bold leading-9 text-[#8bd3f7]">
              Practical tech training for students and career-switchers. Real
              projects. Job-ready skills.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              SecAITech Academy is our training initiative. We help learners
              gain hands-on experience through project-based learning, industry
              workflows, and mentorship. Our goal is to prepare you for real
              software teams — not just exams.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#register"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#06111f] transition hover:bg-white"
              >
                Enroll Now
              </a>

              <a
                href="#programs"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]"
              >
                View Programs
              </a>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.6rem] bg-white p-6 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Training Focus
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Real skills for real software teams.
              </h2>

              <p className="mt-4 leading-8 text-[#6b7280]">
                QA automation, manual testing, frontend foundations, SQL, API
                testing, Git workflow, and practical project experience.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Mode</p>
                <h3 className="mt-1 text-xl font-black">Online + Offline</h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Location</p>
                <h3 className="mt-1 text-xl font-black">Kasur</h3>
              </div>

              <div className="rounded-3xl bg-[#0f766e] p-5">
                <p className="text-sm font-bold text-white/70">Seats</p>
                <h3 className="mt-1 text-xl font-black">Limited Batches</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Why Learn With Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Learn the way real teams work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#102d35]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Online Programs */}
      <section id="programs" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Programs at SecAITech Academy
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Structured career tracks instead of random short courses.
            </h2>

            <p className="mt-4 text-xl font-bold text-[#66bee3]">
              Online Programs
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {onlinePrograms.map((course) => (
              <article
                key={course.title}
                className="overflow-hidden rounded-[2rem] bg-[#f6f3ec] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#071226] via-[#102d35] to-[#0f766e] p-6 text-center text-white">
                  <div>
                    <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                      {course.mode}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{course.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="leading-8 text-[#6b7280]">
                    {course.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    <p className="rounded-2xl bg-white p-4 font-bold text-[#102d35]">
                      Duration: {course.duration}
                    </p>
                    <p className="rounded-2xl bg-white p-4 font-bold text-[#102d35]">
                      {course.schedule}
                    </p>
                    <p className="rounded-2xl bg-white p-4 font-bold text-[#102d35]">
                      Level: {course.level}
                    </p>
                    <p className="rounded-2xl bg-white p-4 font-bold text-[#102d35]">
                      Certificate: {course.certificate}
                    </p>
                  </div>

                  <a
                    href="#register"
                    className="mt-7 inline-block rounded-full bg-[#102d35] px-7 py-3 font-black text-white"
                  >
                    Get Course Details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Programs */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Offline / Onsite Programs
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Offline training in Kasur with limited seats.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offlinePrograms.map((program) => (
              <article
                key={program.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="font-black uppercase tracking-[0.15em] text-[#f6b94b]">
                  {program.tag}
                </p>

                <h3 className="mt-4 text-3xl font-black text-[#102d35]">
                  {program.title}
                </h3>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  {program.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {program.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 leading-7 text-[#6b7280]"
                    >
                      <span className="font-black text-[#0f766e]">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className="mt-7 inline-block rounded-full bg-[#102d35] px-7 py-3 font-black text-white"
                >
                  Get Course Details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ready */}
      <section className="bg-[#071226] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
              Ready to Start?
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Build real, job-ready skills with structure.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Whether you’re a student, career-switcher, or self-taught
              developer looking for structure — we’ll help you build real,
              job-ready skills.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#register"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#071226]"
              >
                Enroll Now
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white"
              >
                Ask a Question
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {readyPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl bg-white/10 p-5 leading-8 text-white/85"
              >
                <span className="mr-2 font-black text-[#f6c35b]">✓</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Register for Your Preferred Course
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Fill out the form below to enroll.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6b7280]">
              Our team will contact you shortly with confirmation and payment
              details.
            </p>

            <p className="mt-5 rounded-2xl bg-[#f6f3ec] p-5 font-bold text-[#102d35]">
              Limited seats – applications reviewed manually.
            </p>
          </div>

          <form className="rounded-[2rem] bg-[#f6f3ec] p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">
                  Select Course
                </label>
                <select className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]">
                  {courseOptions.map((course) => (
                    <option key={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Address</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">
                  Preferred Batch
                </label>
                <select className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]">
                  <option>Weekend</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">
                  Experience Level
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              {/* <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">
                  Why do you want to join this course?
                </label>
                <textarea
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                ></textarea>
              </div> */}

              {/* <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">
                  Any prior experience or tools used?
                </label>
                <textarea
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                ></textarea>
              </div> */}

              <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">Message</label>
                <textarea
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-white px-4 py-4 outline-none focus:border-[#0f766e]"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-[#0f766e] px-8 py-4 font-black text-white transition hover:bg-[#102d35]"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
