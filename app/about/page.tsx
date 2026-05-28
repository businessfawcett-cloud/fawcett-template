import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Apex Engineering Solutions",
};

const team = [
  {
    name: "Sarah Mitchell",
    role: "Principal & Founder",
    bio: "Licensed Professional Engineer with 20+ years of experience in structural and civil engineering. Sarah founded Apex to deliver the rigor and precision that complex projects demand.",
  },
  {
    name: "James Ortega",
    role: "Director of Engineering",
    bio: "A structural specialist with deep expertise in seismic design and forensic analysis. James leads our technical practice and oversees quality assurance across all projects.",
  },
  {
    name: "Priya Sharma",
    role: "Project Management Lead",
    bio: "PMP-certified project manager with a track record of delivering multi-million-dollar infrastructure projects on time and within budget.",
  },
  {
    name: "David Chen",
    role: "Environmental Practice Lead",
    bio: "Environmental scientist and compliance specialist. David navigates clients through complex regulatory frameworks, from NEPA to state-level permitting.",
  },
  {
    name: "Rachel Torres",
    role: "Senior Civil Engineer",
    bio: "Expert in site development, stormwater management, and utility design. Rachel has led civil engineering for developments across the Southwest.",
  },
  {
    name: "Michael Brooks",
    role: "Structural Engineer",
    bio: "Specializes in finite element analysis and retrofit design. Michael brings analytical precision to every structural engagement.",
  },
];

const values = [
  {
    title: "Precision",
    description:
      "Every calculation, every model, every deliverable is held to the highest standard of accuracy. Precision is not negotiable.",
  },
  {
    title: "Integrity",
    description:
      "We provide honest assessments and transparent communication. Our clients trust us because we tell them what they need to hear, not what they want to hear.",
  },
  {
    title: "Resilience",
    description:
      "We design for the long term. Our solutions account for extreme conditions, climate change, and evolving standards.",
  },
  {
    title: "Collaboration",
    description:
      "Great engineering requires great partnerships. We integrate seamlessly with architects, contractors, and stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-apex-border bg-apex-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-apex-accent">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Built on Precision
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-apex-text-muted">
            Apex Engineering Solutions was founded on a simple principle:
            engineering excellence is non-negotiable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="mt-6 text-apex-text-muted leading-relaxed">
                Founded in 2011 in Austin, Texas, Apex Engineering Solutions
                began as a boutique structural consultancy serving local
                developers and municipal clients. Our early work on seismic
                retrofit projects established our reputation for technical rigor
                and meticulous attention to detail.
              </p>
              <p className="mt-4 text-apex-text-muted leading-relaxed">
                Over the past fifteen years, we have expanded our capabilities
                to encompass civil infrastructure, project management, and
                environmental compliance. Today, our team of over 50 licensed
                professionals serves clients across the public and private
                sectors, delivering projects that shape communities and endure
                for generations.
              </p>
              <p className="mt-4 text-apex-text-muted leading-relaxed">
                Our growth has been driven by a single philosophy: do the work
                right, every time. No shortcuts. No compromises. That commitment
                is why 98% of our clients return for subsequent engagements.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-48 rounded-lg bg-apex-surface" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded-lg bg-apex-surface" />
                <div className="h-48 rounded-lg bg-apex-surface" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-apex-border bg-apex-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-apex-border bg-apex-bg-light p-6"
              >
                <h3 className="text-lg font-semibold text-apex-accent">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-apex-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Leadership Team</h2>
          <p className="mt-2 max-w-xl text-apex-text-muted">
            Our leadership combines deep technical expertise with a commitment to
            client service and operational excellence.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-apex-border bg-apex-bg-light p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apex-accent/10 text-sm font-bold text-apex-accent">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-apex-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-apex-text-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
