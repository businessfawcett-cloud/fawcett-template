import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apex Engineering Solutions — Precision Engineering for Complex Challenges",
};

const services = [
  {
    title: "Structural Analysis",
    description:
      "Advanced structural modeling and analysis for buildings, bridges, and industrial facilities. We ensure structural integrity under every load condition.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Civil Infrastructure",
    description:
      "Comprehensive civil engineering services from site development to transportation systems, delivering resilient infrastructure that stands the test of time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0H21m-3.75 0H21" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "End-to-end project delivery with rigorous scheduling, cost control, and quality assurance. We keep your projects on time and on budget.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Environmental Compliance",
    description:
      "Navigate complex environmental regulations with confidence. Our experts ensure your projects meet all local, state, and federal requirements.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Engineers on Staff" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apex-bg via-apex-bg to-apex-accent/5" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-apex-accent">
              Apex Engineering Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Precision Engineering for{" "}
              <span className="text-apex-accent">Complex Challenges</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-apex-text-muted">
              We deliver reliable, innovative engineering solutions across
              structural analysis, civil infrastructure, project management, and
              environmental compliance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-apex-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-apex-accent-hover"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded border border-apex-border px-6 py-3 text-sm font-semibold text-apex-text transition-colors hover:border-apex-accent hover:text-apex-accent"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative grid */}
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-5">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-apex-border bg-apex-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="text-3xl font-bold text-apex-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-apex-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-apex-accent">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering Services
          </h2>
          <p className="mt-4 max-w-2xl text-apex-text-muted">
            Comprehensive engineering solutions tailored to meet the demands of
            modern infrastructure and development projects.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-apex-border bg-apex-bg-light p-6 transition-colors hover:border-apex-accent/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-apex-accent/10 text-apex-accent">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-apex-text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-apex-accent transition-colors hover:text-apex-accent-hover"
            >
              View all services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-apex-border bg-apex-surface py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-apex-accent">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built on precision. Driven by results.
              </h2>
              <p className="mt-6 text-apex-text-muted leading-relaxed">
                Founded in 2011, Apex Engineering Solutions has grown from a
                boutique structural firm into a full-service engineering
                consultancy. Our team of licensed professionals combines deep
                technical expertise with a commitment to sustainable, resilient
                design.
              </p>
              <p className="mt-4 text-apex-text-muted leading-relaxed">
                We serve clients across the public and private sectors, delivering
                projects that shape communities and stand the test of time.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-apex-accent transition-colors hover:text-apex-accent-hover"
              >
                Meet our team
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 rounded-lg bg-apex-bg-lighter" />
                <div className="h-56 rounded-lg bg-apex-bg-lighter" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 rounded-lg bg-apex-bg-lighter" />
                <div className="h-40 rounded-lg bg-apex-bg-lighter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl border border-apex-border bg-gradient-to-br from-apex-accent/10 to-apex-bg-light p-12 text-center sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-apex-text-muted">
              Our team is ready to bring precision and expertise to your
              engineering challenges. Let&apos;s build something exceptional together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-apex-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-apex-accent-hover"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:info@apexengineering.com"
                className="inline-flex items-center justify-center rounded border border-apex-border px-6 py-3 text-sm font-semibold text-apex-text transition-colors hover:border-apex-accent hover:text-apex-accent"
              >
                info@apexengineering.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
