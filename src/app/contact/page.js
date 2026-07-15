const workAreas = [
  {
    title: "Healthcare",
    description: "Hospital Software – Desktop & Maintenance",
  },
  {
    title: "Retail & Inventory",
    description: "Currently building stock management system",
  },
  {
    title: "Custom Software Development",
    description: "On-demand tools & automation",
  },
  {
    title: "Education & Training",
    description: "Technical training for all levels",
  },
  {
    title: "Coming Soon",
    description: "More services and product updates are coming soon.",
  },
  {
    title: "Coming Soon",
    description: "New solutions will be announced as they are ready.",
  },
];

const subjects = [
  "General Inquiry",
  "Product Demo",
  "Custom Project",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="bg-[#f6f3ec]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06111f] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(246,195,91,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#f6c35b]/30 bg-[#f6c35b]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#f6c35b]">
              Contact SecAITech
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
              Let&apos;s Talk
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              Have a project in mind? Need a demo? Just want to ask a question?
              We&apos;d love to hear from you.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:hello@secaitech.com"
                className="rounded-3xl bg-white p-6 text-[#102d35] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f766e]">
                  Email Us
                </p>
                <h2 className="mt-3 text-2xl font-black">
                  hello@secaitech.com
                </h2>
                <p className="mt-2 text-[#6b7280]">
                  We respond within 24 hours.
                </p>
              </a>

              <a
                href="https://wa.me/923284399233"
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-[#0f766e] p-6 text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/70">
                  WhatsApp
                </p>
                <h2 className="mt-3 text-2xl font-black">+92 328 4399233</h2>
                <p className="mt-2 text-white/75">
                  Quick questions or demo bookings.
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.8rem] bg-white p-7 text-[#102d35]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0f766e]">
                Location
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Kasur, Punjab, Pakistan (55050)
              </h2>

              <p className="mt-4 leading-8 text-[#6b7280]">
                Available for on-site deployment in Punjab and remote work
                globally.
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-[#f6c35b] p-6 text-[#06111f]">
              <p className="text-sm font-black uppercase tracking-[0.18em]">
                Best For
              </p>
              <h3 className="mt-2 text-2xl font-black">
                HMS demos, custom projects, inventory systems, training, and
                long-term software support.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left Info */}
          <aside className="rounded-[2.5rem] bg-[#102d35] p-8 text-white shadow-xl lg:sticky lg:top-32">
            <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
              Contact Info
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Reach out for demos, questions, and project discussions.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">Email</p>
                <a
                  href="mailto:hello@secaitech.com"
                  className="mt-1 block text-xl font-black"
                >
                  hello@secaitech.com
                </a>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-white/60">WhatsApp</p>
                <a
                  href="https://wa.me/923284399233"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-xl font-black"
                >
                  +92 328 4399233
                </a>
              </div>

              <div className="rounded-3xl bg-[#0f766e] p-5">
                <p className="text-sm font-bold text-white/70">Location</p>
                <h3 className="mt-1 text-xl font-black">
                  Kasur, Punjab, Pakistan (55050)
                </h3>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-10">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Send Us a Message
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              Tell us what you need.
            </h2>

            <p className="mt-4 leading-8 text-[#6b7280]">
              Fill the form below and SecAITech will get back to you as soon as
              possible.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="font-bold text-[#102d35]">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 outline-none transition focus:border-[#0f766e] focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 outline-none transition focus:border-[#0f766e] focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 outline-none transition focus:border-[#0f766e] focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-[#102d35]">Subject</label>
                <select className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 outline-none transition focus:border-[#0f766e] focus:bg-white">
                  {subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="font-bold text-[#102d35]">Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-2xl border border-[#dde3e8] bg-[#f6f3ec] px-4 py-4 outline-none transition focus:border-[#0f766e] focus:bg-white"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-[#0f766e] px-8 py-4 font-black text-white transition hover:bg-[#102d35]"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* What We Work On */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#0f766e]">
              Our Experience
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#102d35]">
              What We Work On
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#6b7280]">
              SecAITech works across healthcare software, inventory systems,
              custom development, and technical training.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area, index) => (
              <article
                key={`${area.title}-${index}`}
                className="rounded-[2rem] bg-[#f6f3ec] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102d35] text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#102d35]">
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

      {/* Final CTA */}
      <section className="bg-[#f6f3ec] px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#071226] text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-[#f6c35b]">
                Ready to start?
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Let&apos;s discuss your next software project.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                Whether you need HMS software, inventory management, technical
                training, or a custom platform, SecAITech can help you plan the
                right solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@secaitech.com"
                className="rounded-full bg-[#f6c35b] px-8 py-4 text-center font-black text-[#071226]"
              >
                Email Us
              </a>

              <a
                href="https://wa.me/923284399233"
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
