"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "tuckerparon@gmail.com",
    href: "mailto:tuckerparon@gmail.com",
    description: "Direct line",
  },
  {
    label: "LinkedIn",
    value: "/in/tuckerparon",
    href: "https://linkedin.com/in/tuckerparon",
    description: "Professional updates",
  },
  {
    label: "GitHub",
    value: "/tuckerparon",
    href: "https://github.com/tuckerparon",
    description: "Code & projects",
  },
];

const openTo = [
  "Consulting / fractional work with early-stage startups",
  "Full-time roles in preventative health tech",
  "Volunteer work in housing, education, and youth sports",
  "Conversations with anyone and everyone",
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t" style={{ borderColor: "var(--border)" }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase mb-2 block"
          style={{ color: "var(--accent)" }}
        >
          Contact
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Get in Touch
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-3xl">
        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="space-y-2">
            {contactLinks.map(({ label, value, href, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between p-4 border transition-all"
                style={{ borderColor: "var(--border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                }}
              >
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                    {label}
                  </p>
                  <p className="font-mono text-sm" style={{ color: "var(--foreground)" }}>
                    {value}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {description}
                  </p>
                </div>
                <span className="font-mono text-lg" style={{ color: "var(--border)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Open to */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-5"
            style={{ color: "var(--accent)" }}
          >
            Open to
          </h3>
          <div className="space-y-2">
            {openTo.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 py-2 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-xs mt-0.5 shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
                <span
                  className="font-serif text-sm leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-mono text-xs mt-8 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Based in Cambridge, MA. Roots in VT and CT. Open to relocation,
            travel, and remote engagements.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 pt-8 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          Tucker Paron · 2026
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          Built with Next.js
        </span>
      </motion.div>
    </section>
  );
}
