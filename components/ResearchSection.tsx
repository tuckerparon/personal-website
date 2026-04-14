"use client";

import { motion } from "framer-motion";

const papers = [
  {
    title: "Longitudinal analysis of heart rate variability as it pertains to anxiety and readiness",
    authors: "T. Paron",
    venue: "arXiv",
    year: "2025",
    href: "https://arxiv.org/abs/2506.19128",
  },
  {
    title: "Agent-Based Model of Crowd Dynamics in Emergency Situations: A Focus on People With Disabilities",
    authors: "J. Alex, J. Stillerman, N. Fritzhand, T. Paron",
    venue: "arXiv",
    year: "2022",
    href: "https://arxiv.org/abs/2212.08149",
  },
  {
    title: "Analyzing Political Polarization by Topic",
    authors: "T. Paron, H. Thompson",
    venue: "OSF",
    year: null,
    href: "https://scholar.google.com/citations?user=p_dF-KQAAAAJ&hl=en",
  },
  {
    title: "The physiological and cognitive effects of competitive boxing",
    authors: "T. Paron",
    venue: null,
    year: null,
    href: null,
    comingSoon: true,
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase mb-2 block"
          style={{ color: "var(--accent)" }}
        >
          Research
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Pre-prints & Papers
        </h2>
      </motion.div>

      <div className="max-w-2xl space-y-0">
        {papers.map((paper, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-start gap-4 border-b py-5"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex-1 min-w-0">
              {paper.href ? (
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm leading-relaxed transition-colors block mb-1"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)")
                  }
                >
                  {paper.title} ↗
                </a>
              ) : (
                <p
                  className="font-serif text-sm leading-relaxed mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {paper.title}
                </p>
              )}
              <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                {paper.authors}
              </p>
            </div>
            <div className="shrink-0 text-right">
              {paper.comingSoon ? (
                <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                  coming soon
                </span>
              ) : (
                <>
                  {paper.venue && (
                    <span
                      className="font-mono text-xs block"
                      style={{ color: "var(--accent)" }}
                    >
                      {paper.venue}
                    </span>
                  )}
                  {paper.year && (
                    <span
                      className="font-mono text-xs block mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {paper.year}
                    </span>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
