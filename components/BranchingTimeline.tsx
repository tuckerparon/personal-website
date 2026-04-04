"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Entry {
  id: string;
  company: string;
  url?: string;
  logo?: string;
  logoBg?: string;
  role: string;
  dateRange: string;
  description: string;
  deliverable: string;
  type?: string;
  viaLabel?: string;
  badges?: string[];
}

const entries: Entry[] = [
  {
    id: "nuonc",
    company: "NuOnc",
    url: "https://nuonc.online",
    logo: "/assets/nuonc.jpg",
    logoBg: "#ffffff",
    role: "Technical Lead",
    dateRange: "Jan 2026 – Mar 2026",
    type: "Contract",
    viaLabel: "via Drever Data",
    description:
      "Built full web and mobile app infrastructure (React, TypeScript, Vite, Tailwind, Supabase, PostgreSQL, Deno) enabling metabolic insights for oncology patients on ketogenic therapy. Integrated KetoMojo API and OpenAI API. Ensured compliance with FTC Act wellness guidelines and HIPAA data storage requirements.",
    deliverable:
      "Integrated KetoMojo API and led technical launch — onboarded first paying users.",
    badges: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "LLM", "API Integrations", "UI/UX", "Compliance", "GTM"],
  },
  {
    id: "neurable",
    company: "Neurable",
    url: "https://neurable.com",
    logo: "/assets/neurable.png",
    logoBg: "#ffffff",
    role: "Machine Learning Engineer",
    dateRange: "Aug 2025 – Feb 2026",
    type: "Contract",
    viaLabel: "via Drever Data",
    description:
      "Developed EEG signal processing pipelines (FFT, FIR/IIR, feature extraction) and built ML models for novel brain metrics including cognitive speed and brain age. Worked directly with CEO and Lead ML Engineer to prototype a Large Brain Model using autoencoder and transformer architectures. Built and packaged internal Python desktop applications using GitHub Actions, Briefcase, AWS OIDC, and uv.",
    deliverable:
      "Built two investor demo applications used directly in Series A and Series B fundraising presentations.",
    badges: ["EEG", "Signal Processing", "Machine Learning", "Python", "Wearable Technology", "CI/CD", "Project Management"],
  },
  {
    id: "biocogniv",
    company: "Biocogniv",
    url: "https://biocogniv.com",
    logo: "/assets/biocogniv.jpg",
    logoBg: "#12161d",
    role: "Data Scientist",
    dateRange: "May 2023 – Jul 2025",
    type: "Full-Time",
    description:
      "Designed and maintained internal database processing 300M+ healthcare records. Implemented ETL pipelines with dbt, SQL, and Python to harmonize clinical data into Google Cloud Storage within HIPAA- and SOC 2-controlled environments. Collaborated with clinical and engineering teams to define logic for derived clinical endpoints for sepsis and AKI early detection. Regularly produced analyses used to inform FDA communications and submissions.",
    deliverable:
      "Biocogniv achieved Breakthrough Device Designation (BDD) for the sepsis diagnostic tool developed during my tenure. Built the AKI equivalent for a second BDD.",
    badges: ["FDA", "Y-Combinator", "HIPAA", "dbt", "Data Engineering", "Data Science"],
  },
  {
    id: "uvm",
    company: "University of Vermont Men's Soccer",
    logo: "/assets/uvm.jpg",
    logoBg: "#007A33",
    role: "Lead Data Analyst & Student-Athlete",
    dateRange: "Mar 2021 – May 2024",
    type: "Full-Time",
    description:
      "Walk-on student-athlete who earned a starting role. Served as lead data analyst for four seasons — constructed and presented pre-match and post-match statistical reports to coaching staff and players in addition to full player responsibilities.",
    deliverable:
      "Program rose from unranked to #4 nationally during my tenure, including a 2021 AE Championship and NCAA Tournament runs to the Elite 8 and Sweet 16. Six months after my departure, the program won the 2024 National Championship.",
    badges: ["NCAA", "Wyscout", "Data Presentation", "Teamwork", "Communication"],
  },
  {
    id: "spurs",
    company: "San Antonio Spurs",
    url: "https://nba.com/spurs",
    logo: "/assets/spurs.png",
    logoBg: "#ffffff",
    role: "Data Scientist",
    dateRange: "Jun 2022 – Jan 2023",
    type: "Contract",
    description:
      "Built ticket sales forecasting models for the marketing team to inform ticketing, concession, and parking decisions. Analysis incorporated geographic data, customer purchase behavior, and game-level variables. Presented forecasting reports to the ticketing team to inform price setting.",
    deliverable:
      "Forecasting model adopted by the marketing team for ongoing pricing and inventory decisions.",
    badges: ["NBA", "Ticketing", "Machine Learning", "Sports Business"],
  },
  {
    id: "hartford",
    company: "Hartford Athletic",
    logo: "/assets/hartford.png",
    logoBg: "#000000",
    role: "Performance Analyst",
    dateRange: "May 2021 – Sep 2021",
    type: "Internship",
    description:
      "Live-tagged events in training and matches using Spiideo. Constructed and presented opposition analyses to coaching staff. Occasionally served as a training player.",
    deliverable:
      "Team was consistently ranked in the top 3 of the USL Championship during my time with the club.",
    badges: ["USL Championship", "Spiideo", "Wyscout", "Performance Analysis", "Opposition Analysis"],
  },
];

// ── Animation variants ────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

// ── Sub-components ────────────────────────────────────────────────────────

function CompanyLogo({ entry }: { entry: Entry }) {
  if (!entry.logo) {
    return (
      <div
        className="w-10 h-10 shrink-0 flex items-center justify-center font-mono text-xs font-bold"
        style={{ backgroundColor: "#007A33", color: "#ffffff" }}
      >
        UVM
      </div>
    );
  }
  return (
    <div
      className="w-10 h-10 shrink-0 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: entry.logoBg ?? "#ffffff" }}
    >
      <Image
        src={entry.logo}
        alt={entry.company}
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-xs px-2 py-0.5 border"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      {label}
    </span>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <motion.div variants={cardVariants} className="relative flex gap-6 group">
      {/* Left: date */}
      <div className="hidden sm:block w-36 shrink-0 pt-1.5 text-right">
        <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          {entry.dateRange}
        </span>
      </div>

      {/* Center: spine */}
      <div className="relative flex flex-col items-center">
        <div
          className="w-2 h-2 rounded-full mt-2 shrink-0 z-10"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div className="w-px flex-1 mt-1" style={{ backgroundColor: "var(--border)" }} />
      </div>

      {/* Right: card */}
      <div
        className="flex-1 border p-5 mb-4"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
      >
        {/* Logo + info block */}
        <div className="flex items-start gap-3 mb-3">
          <CompanyLogo entry={entry} />
          <div className="flex-1 min-w-0">
            {/* Company name */}
            {entry.url ? (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-semibold transition-colors leading-tight block"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)")
                }
              >
                {entry.company}
              </a>
            ) : (
              <span className="font-mono text-sm font-semibold leading-tight block" style={{ color: "var(--foreground)" }}>
                {entry.company}
              </span>
            )}
            {/* Role + type badge inline */}
            <div className="flex items-center gap-2 flex-wrap mt-0.5">
              <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                {entry.role}
              </span>
              {entry.type && (
                <span
                  className="font-mono text-xs px-1.5 py-0.5 border shrink-0"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {entry.type}
                </span>
              )}
            </div>
            {/* via label */}
            {entry.viaLabel && (
              <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                {entry.viaLabel}
              </p>
            )}
            {/* Date (mobile only — desktop shows date in left column) */}
            <div className="sm:hidden mt-1">
              <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                {entry.dateRange}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-serif text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          {entry.description}
        </p>

        {/* Deliverable block */}
        <div
          className="pl-3 mb-4"
          style={{ borderLeft: "2px solid var(--accent)" }}
        >
          <p className="font-mono text-xs mb-1" style={{ color: "var(--accent)" }}>
            → outcome
          </p>
          <p className="font-serif text-xs leading-relaxed" style={{ color: "var(--foreground)" }}>
            {entry.deliverable}
          </p>
        </div>

        {/* Badges */}
        {entry.badges && (
          <div className="flex flex-wrap gap-1.5">
            {entry.badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────

export default function WorkTimeline() {
  return (
    <section id="work" className="py-24">
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
          Work
        </span>
        <h2 className="font-serif text-2xl font-medium" style={{ color: "var(--foreground)" }}>
          Experience
        </h2>
      </motion.div>

      <motion.div
        className="max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {entries.map((entry) => (
          <EntryRow key={entry.id} entry={entry} />
        ))}
      </motion.div>
    </section>
  );
}
