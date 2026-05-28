import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Apex Engineering Solutions",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-apex-border bg-apex-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-apex-accent">
            Get in Touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-apex-text-muted">
            Tell us about your project. Our team will respond within one
            business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                action="#"
                method="POST"
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-apex-text"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="mt-2 block w-full rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text placeholder-apex-text-muted outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-apex-text"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      className="mt-2 block w-full rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text placeholder-apex-text-muted outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-apex-text"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text placeholder-apex-text-muted outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-apex-text"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="mt-2 block w-full rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text placeholder-apex-text-muted outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-apex-text"
                  >
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    className="mt-2 block w-full rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                  >
                    <option value="">Select a service</option>
                    <option value="structural">Structural Analysis</option>
                    <option value="civil">Civil Infrastructure</option>
                    <option value="project">Project Management</option>
                    <option value="environmental">
                      Environmental Compliance
                    </option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-apex-text"
                  >
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="mt-2 block w-full resize-none rounded border border-apex-border bg-apex-bg-light px-4 py-3 text-sm text-apex-text placeholder-apex-text-muted outline-none transition-colors focus:border-apex-accent focus:ring-1 focus:ring-apex-accent"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded bg-apex-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-apex-accent-hover sm:w-auto"
                  >
                    Submit Inquiry
                  </button>
                  <p className="mt-3 text-xs text-apex-text-muted">
                    By submitting this form, you agree to our privacy policy. We
                    will never share your information.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold">Office</h3>
                  <p className="mt-2 text-sm text-apex-text-muted leading-relaxed">
                    1200 Innovation Drive, Suite 400
                    <br />
                    Austin, TX 78701
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <div className="mt-2 space-y-1 text-sm text-apex-text-muted">
                    <p>
                      <a
                        href="mailto:info@apexengineering.com"
                        className="transition-colors hover:text-apex-accent"
                      >
                        info@apexengineering.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+15559876543"
                        className="transition-colors hover:text-apex-accent"
                      >
                        +1 (555) 987-6543
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Hours</h3>
                  <div className="mt-2 space-y-1 text-sm text-apex-text-muted">
                    <p>Monday – Friday: 8:00 AM – 6:00 PM CT</p>
                    <p>Saturday – Sunday: Closed</p>
                  </div>
                </div>

                <div className="rounded-lg border border-apex-border bg-apex-bg-light p-6">
                  <h3 className="text-sm font-semibold text-apex-accent">
                    Emergency Engineering Support
                  </h3>
                  <p className="mt-2 text-xs text-apex-text-muted leading-relaxed">
                    For urgent structural or infrastructure emergencies, call our
                    24/7 line.
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    +1 (555) 911-0000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
