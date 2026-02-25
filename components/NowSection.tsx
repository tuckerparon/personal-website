"use client";

import { motion } from "framer-motion";

const events = [
  { date: "Mar 5", label: "MIT Sloan Sports Analytics Hackathon" },
  { date: "Mar 6–8", label: "MIT Media Lab Hard Mode Hackathon" },
  { date: "Mar 13–15", label: "MIT Hacking Medicine: Grand Hack" },
];

export default function NowSection() {
  return (
    <section id="now" className="py-24">
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
          Now
        </span>
        <h2
          className="font-serif text-2xl font-medium"
          style={{ color: "var(--foreground)" }}
        >
          What I&rsquo;m Thinking About
        </h2>
        <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
          as of February 24, 2026
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 max-w-3xl">
        {/* Reading */}
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
            Reading
          </h3>
          <p
            className="font-serif text-sm leading-relaxed italic"
            style={{ color: "var(--foreground)" }}
          >
            The Way of The Fight
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
            — Georges St. Pierre
          </p>
        </motion.div>

        {/* Training */}
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
            Training
          </h3>
          <p
            className="font-serif text-sm leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            Preparing for the{" "}
            <a
              href="https://haymakersforhope.org/events/boxing/rock-n-rumble-xv-boston-2026/fighters/tucker-paron"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "var(--accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")
              }
            >
              Haymakers4Hope
            </a>{" "}
            Charity Boxing Match — May 7th at MGM Music Hall, Boston, MA.
          </p>
        </motion.div>

        {/* Exploring / Side Projecting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Exploring / Side Projecting
          </h3>
          <div className="space-y-2">
            {[
              "BoxSmarter: Using EMG tech to manage sparring load in boxing",
              "The Walk-On Way: Season 2",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2"
              >
                <span
                  className="font-mono text-xs mt-0.5 shrink-0"
                  style={{ color: "var(--muted)" }}
                >
                  –
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
        </motion.div>

        {/* Writing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Writing
          </h3>
          <span className="font-serif text-sm leading-relaxed italic" style={{ color: "var(--muted)" }}>
            The State of Wearable Technology{" "}
            <span className="not-italic font-mono text-xs">(coming soon)</span>
          </span>
        </motion.div>

        {/* Catch Me At — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-2"
        >
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Catch Me At
          </h3>
          <div className="space-y-2">
            {events.map(({ date, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 border-b py-2.5"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-xs w-20 shrink-0 tabular-nums"
                  style={{ color: "var(--accent)" }}
                >
                  {date}
                </span>
                <span
                  className="font-serif text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
