"use client";

import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase mb-2 block"
          style={{ color: "var(--accent)" }}
        >
          Blog
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Writing
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-md"
      >
        <p
          className="font-serif text-base leading-relaxed mb-6"
          style={{ color: "var(--muted)" }}
        >
          Occasionally writing about my work, life, and philosophy.
        </p>

        <a
          href="https://tuckerparon.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm inline-flex items-center gap-2 border px-5 py-3 transition-all"
          style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
          }}
        >
          Read on WordPress ↗
        </a>
      </motion.div>
    </section>
  );
}
