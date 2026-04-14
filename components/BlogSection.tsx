"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section id="media" className="py-24">
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
          Media
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Writing & Podcasting
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 max-w-3xl">
        {/* The Walk-On Way */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            The Walk-On Way
          </h3>
          <div className="flex items-start gap-4 mb-4">
            <div
              className="shrink-0 w-16 h-16 overflow-hidden rounded"
              style={{ backgroundColor: "#b5541c" }}
            >
              <Image
                src="/assets/walkonway_logo.png"
                alt="The Walk-On Way Podcast"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="font-serif text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Interviewing people who took the road less traveled or took on
              something others said they couldn&rsquo;t do.
            </p>
          </div>
          <p
            className="font-mono text-xs mb-4"
            style={{ color: "var(--muted)" }}
          >
            Season 2 in progress
          </p>
          <div className="flex gap-3">
            <a
              href="https://open.spotify.com/show/14kLFiHhRkmDVe0SSFFbde?si=245820bbb15b4c94"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border px-3 py-2 transition-all"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
              }}
            >
              Spotify ↗
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PL5YUCl8SUJC6AJk7I_63q-hBqana3QqQE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border px-3 py-2 transition-all"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
              }}
            >
              YouTube ↗
            </a>
            <a
              href="https://www.instagram.com/thewalkonway/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border px-3 py-2 transition-all"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
              }}
            >
              Instagram ↗
            </a>
          </div>
        </motion.div>

        {/* Blog */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Blog
          </h3>
          <p
            className="font-serif text-sm leading-relaxed mb-6"
            style={{ color: "var(--muted)" }}
          >
            Occasionally writing about my work, life, and philosophy.
          </p>
          <a
            href="https://tuckerparon.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs inline-flex items-center gap-2 border px-4 py-2.5 transition-all"
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
      </div>
    </section>
  );
}
