"use client";

import { motion } from "framer-motion";

const nowItems = [
  { label: "role", value: "Technical Lead @ NuOnc + ML Engineer @ Neurable" },
  { label: "reading", value: "The Body Keeps the Score — Bessel van der Kolk" },
  { label: "training", value: "Half marathon prep + pick-up soccer in Burlington" },
  { label: "building", value: "Anticipatory health data systems for oncology patients" },
  { label: "last updated", value: "February 2026" },
];

const writingItems = [
  {
    title: "Coming soon",
    description: "Writing on health data systems, sports analytics, and building at the edge of medicine.",
    href: null,
    date: "2026",
  },
];

export default function WritingSection() {
  return (
    <section id="writing" className="py-24">
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
          Writing & Now
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          What I&rsquo;m Thinking About
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-3xl">
        {/* Now */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-5"
            style={{ color: "var(--accent)" }}
          >
            /now
          </h3>
          <div className="space-y-3">
            {nowItems.map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-4 border-b pb-3"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-xs w-24 shrink-0 pt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </span>
                <span
                  className="font-serif text-sm leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Writing */}
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
            Writing
          </h3>
          <div className="space-y-4">
            {writingItems.map((item) => (
              <div
                key={item.title}
                className="border-b pb-4"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between mb-1">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-medium transition-colors"
                      style={{ color: "var(--foreground)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--foreground)")
                      }
                    >
                      {item.title} ↗
                    </a>
                  ) : (
                    <span
                      className="font-mono text-sm font-medium"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.title}
                    </span>
                  )}
                  <span
                    className="font-mono text-xs ml-4 shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.date}
                  </span>
                </div>
                <p
                  className="font-serif text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-mono text-xs mt-6 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Health data. Sports analytics. The messy middle of building with AI
            in regulated industries. Writing forthcoming — follow on{" "}
            <a
              href="https://linkedin.com/in/tucker-paron"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "var(--accent)" }}
            >
              LinkedIn
            </a>{" "}
            for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
