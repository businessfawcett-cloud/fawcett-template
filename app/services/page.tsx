import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Apex Engineering Solutions",
};

const services = [
  {
    id: "structural",
    title: "Structural Analysis",
    subtitle: "Ensuring structural integrity at every scale",
    description:
      "Our structural engineering team provides advanced analysis and design services for buildings, bridges, industrial facilities, and specialty structures. Using state-of-the-art finite element modeling and simulation tools, we evaluate load paths, material behavior, and structural resilience under static, dynamic, and extreme loading conditions.",
    capabilities: [
      "Linear and nonlinear structural analysis",
      "Seismic and wind load evaluation",
      "Foundation design and geotechnical assessment",
      "Retrofit and rehabilitation engineering",
      "Peer review and independent verification",
      "Progressive collapse analysis",
    ],
  },
  {
    id: "civil",
    title: "Civil Infrastructure",
    subtitle: "Building the backbone of communities",
    description:
      "From site development to large-scale transportation systems, our civil engineering practice delivers infrastructure that is resilient, sustainable, and built to last. We manage the full lifecycle of civil projects, ensuring compliance with industry standards and regulatory requirements.",
    capabilities: [
      "Site grading and drainage design",
      "Roadway and highway engineering",
      "Stormwater management and detention",
      "Utility infrastructure planning",
      "Water and wastewater system design",
      "Transportation corridor analysis",
    ],
  },
  {
    id: "project",
    title: "Project Management",
    subtitle: "On time, on budget, on spec",
    description:
      "Our project management team provides rigorous oversight across all phases of delivery. From initial feasibility studies through construction administration, we maintain strict cost control, quality assurance, and schedule adherence to ensure successful outcomes for every engagement.",
    capabilities: [
      "Feasibility studies and cost estimation",
      "Schedule development and monitoring",
      "Risk assessment and mitigation planning",
      "Construction administration and oversight",
      "Quality assurance and quality control",
      "Stakeholder communication and reporting",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Compliance",
    subtitle: "Meeting regulations with confidence",
    description:
      "Environmental regulations are complex and ever-evolving. Our compliance team guides clients through the permitting process, environmental impact assessments, and remediation strategies, ensuring projects proceed without regulatory delays.",
    capabilities: [
      "Environmental impact assessments (EIA)",
      "Phase I and Phase II environmental site assessments",
      "Remedial action planning and implementation",
      "Air and water quality permitting",
      "NEPA compliance documentation",
      "Wetland delineation and mitigation design",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-apex-border bg-apex-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-apex-accent">
            Our Capabilities
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-apex-text-muted">
            Comprehensive solutions across four core disciplines, delivered by
            licensed professionals with deep domain expertise.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid gap-12 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-apex-accent/10 text-apex-accent">
                      <span className="text-xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold">{service.title}</h2>
                    <p className="mt-1 text-sm font-medium text-apex-accent">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-apex-text-muted leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-text">
                        Key Capabilities
                      </h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2 text-sm text-apex-text-muted"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-apex-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-apex-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
