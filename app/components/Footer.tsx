import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Structural Analysis", href: "/services#structural" },
    { label: "Civil Infrastructure", href: "/services#civil" },
    { label: "Project Management", href: "/services#project" },
    { label: "Environmental Compliance", href: "/services#environmental" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-apex-border bg-apex-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-apex-accent text-xs font-black text-white">
                A
              </span>
              Apex Engineering
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-apex-text-muted">
              Precision engineering solutions for complex challenges across
              structural, civil, and environmental domains.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-text">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-apex-text-muted transition-colors hover:text-apex-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-text">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-apex-text-muted transition-colors hover:text-apex-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-text">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-apex-text-muted">
              <li>info@apexengineering.com</li>
              <li>+1 (555) 987-6543</li>
              <li>
                1200 Innovation Drive, Suite 400
                <br />
                Austin, TX 78701
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-apex-border pt-8 text-xs text-apex-text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Apex Engineering Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-apex-text cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-apex-text cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
