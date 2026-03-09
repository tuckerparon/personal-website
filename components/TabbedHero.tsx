"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "health-tech",
    label: "Health Tech",
    headline:
      "Helping early- and growth-stage health tech companies build solutions for preventative care and restoration of function.",
    subtext: [
      "I've worked across consumer neurotech, metabolic wellness, and medical diagnostics — bringing rigor from the elite sports world into healthcare. My work spans everything from harmonizing 300M+ healthcare records to building brain-computer interface demos for investors.",
      "I spend the rest of my time playing sports, biking, reading, and exploring new places.",
    ],
  },
  {
    id: "sports-analytics",
    label: "Sports Analytics",
    headline: "Using data to help teams win.",
    subtext: [
      "I've worked as a data analyst and performance analyst at the NCAA D1, NBA, and USL Championship levels — building forecasting models, opposition reports, and statistical tools used directly by coaching and front office staff.",
      "I'm a former D1 student-athlete and lifelong competitor. I bring both the technical and the player's perspective.",
    ],
  },
  {
    id: "coaching",
    label: "Coaching",
    headline:
      "Mentoring young men through sport, hard goals, and the pursuit of excellence.",
    subtext: [
      "Through The Walk-On Way and the Cambridge Spot Lab, I work with young athletes and curious people on building confidence, resilience, and a bias toward action — on the field and off it.",
      "I believe in hard quests, controllable effort, and learning by doing.",
    ],
  },
];

const links = [
  { label: "resume →", href: "/resume.pdf", target: "_blank", primary: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tuckerparon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "GitHub",
    href: "https://github.com/tuckerparon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { label: "Email", href: "mailto:tuckerparon@gmail.com" },
];

export default function TabbedHero() {
  const [activeId, setActiveId] = useState("health-tech");
  const activeTab = tabs.find((t) => t.id === activeId)!;

  return (
    <section id="about" className="min-h-screen flex items-center py-32 lg:py-0">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="mb-6">
            <span
              className="font-mono text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              About
            </span>
          </div>

          {/* Tab nav */}
          <div className="flex gap-6 mb-8 overflow-x-auto pb-1">
            {tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="font-mono text-xs tracking-[0.1em] uppercase whitespace-nowrap pb-1.5 border-b-2 transition-all duration-200"
                  style={{
                    borderColor: isActive ? "var(--accent)" : "transparent",
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2
                className="font-serif text-4xl lg:text-5xl font-medium leading-[1.2] mb-8"
                style={{ color: "var(--foreground)" }}
              >
                {activeTab.headline}
              </h2>

              {activeTab.subtext.map((para, i) => (
                <p
                  key={i}
                  className="font-serif text-base leading-relaxed mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {links.map(({ label, href, target, rel, primary }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={rel}
                className="font-mono text-xs px-4 py-2 border transition-all duration-200"
                style={
                  primary
                    ? { borderColor: "var(--accent)", color: "var(--accent)" }
                    : { borderColor: "var(--border)", color: "var(--muted)" }
                }
                onMouseEnter={(e) => {
                  if (primary) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--background)";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--foreground)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (primary) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                  }
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
