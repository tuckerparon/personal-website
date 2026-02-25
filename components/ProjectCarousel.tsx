"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CardSlideshow from "./CardSlideshow";

interface Project {
  id: string;
  name: string;
  subheader?: string;
  description: string;
  url?: string;
  cover: "image" | "svg-network" | "svg-soccer" | "svg-podcast";
  coverSrc?: string;
  coverSrcs?: string[];
  coverBg?: string;
  coverFit?: "cover" | "contain";
  group: "engagement" | "independent";
}

const projects: Project[] = [
  {
    id: "nuonc",
    name: "Metabolic Tracking App",
    subheader: "For NuOnc",
    description:
      "The NuOnc app tracks ketone and glucose data over time for oncology patients on ketogenic therapy. This work is inspired and advised by the Glucose-Ketone Index (GKI) research of Dr. Thomas Seyfried of Boston College. Shown here is the 30-day metabolic dashboard with KetoMojo integration and the AI assistant \"Mito\" for patient guidance.",
    url: "https://nuonc.online",
    cover: "image",
    coverSrc: "/assets/nuonc_demo.png",
    coverBg: "#f5f0eb",
    coverFit: "cover",
    group: "engagement",
  },
  {
    id: "neurable",
    name: "Brain Age and Large Brain Model Demos",
    subheader: "For Neurable",
    description:
      "The Neurable Brain Health and Large Brain Model desktop applications — two of a suite of Python apps built to demonstrate non-invasive BCI utility to investors and partners. The former uses two minutes of EOEC EEG data to predict brain age; the latter tokenizes live EEG using an autoencoder and transformer architecture.",
    cover: "image",
    coverSrcs: ["/assets/neurable_demo_3.png", "/assets/neurable_demo_2.png"],
    coverBg: "#000000",
    coverFit: "cover",
    group: "engagement",
  },
  {
    id: "harmona",
    name: "HarmonaHealth",
    subheader: "For MIT Solve",
    description:
      "HarmonaHealth is a population-based anticipatory health platform prototyped for the MIT Solve competition. The system models health risk across communities to surface intervention opportunities before disease outbreaks and onset.",
    url: "https://harmonahealth.com",
    cover: "image",
    coverSrcs: ["/assets/harmona_demo_1.png", "/assets/harmona_demo_2.png", "/assets/harmona_demo_3.png"],
    coverBg: "#ffffff",
    coverFit: "cover",
    group: "engagement",
  },
  {
    id: "bestxi",
    name: "Best.XI",
    subheader: "Independent",
    description:
      "Recruiting and lineup selection software for NCAA D1 soccer programs. Annual subscription model, sold door-to-door to coaches.",
    url: "https://bestxi.com",
    cover: "image",
    coverSrc: "/assets/best_xi_logo.png",
    coverBg: "#ffffff",
    coverFit: "contain",
    group: "independent",
  },
  {
    id: "podcast",
    name: "The Walk-On Way Podcast",
    subheader: "Independent",
    description:
      "Interviewing people who took the road less traveled or took on something others said they couldn't do. Inspired by my walk-on journey.",
    cover: "image",
    coverSrc: "/assets/walkonway_small.png",
    coverBg: "#2a1a0e",
    coverFit: "cover",
    group: "independent",
  },
];

// ── SVG covers ────────────────────────────────────────────────────────────

function NetworkCover() {
  // Nodes and connections for a population health network visual
  const nodes = [
    { cx: 140, cy: 70, r: 10 },
    { cx: 60,  cy: 40, r: 6  },
    { cx: 220, cy: 40, r: 6  },
    { cx: 40,  cy: 100, r: 5 },
    { cx: 100, cy: 115, r: 7 },
    { cx: 180, cy: 110, r: 6 },
    { cx: 240, cy: 95,  r: 5 },
    { cx: 90,  cy: 30,  r: 4 },
    { cx: 190, cy: 70,  r: 5 },
  ];
  const edges = [
    [0,1],[0,2],[0,4],[0,5],[0,8],
    [1,2],[1,7],[1,4],
    [2,8],[2,6],
    [3,4],[4,5],[5,6],[5,8],
  ];
  return (
    <svg viewBox="0 0 280 140" fill="none" className="w-full h-full" style={{ backgroundColor: "#0d1f1e" }}>
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#2E6E6A"
          strokeWidth="1"
          strokeOpacity={0.5}
          animate={{ strokeOpacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r={n.r}
          fill="#2E6E6A"
          animate={{ r: [n.r * 0.85, n.r, n.r * 0.85], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
      <text x="140" y="133" fill="#2E6E6A" fontSize="7" textAnchor="middle" fontFamily="monospace" opacity="0.7">
        population health · anticipatory · MIT Solve
      </text>
    </svg>
  );
}

// ── Card cover renderer ───────────────────────────────────────────────────

function CardCover({ project }: { project: Project }) {
  if (project.cover === "image") {
    if (project.coverSrcs && project.coverSrcs.length > 1) {
      return (
        <div className="w-full h-full" style={{ backgroundColor: project.coverBg ?? "#111" }}>
          <CardSlideshow images={project.coverSrcs} alt={project.name} />
        </div>
      );
    }
    if (project.coverSrc) {
      return (
        <div
          className="w-full h-full relative"
          style={{ backgroundColor: project.coverBg ?? "#111" }}
        >
          <Image
            src={project.coverSrc}
            alt={project.name}
            fill
            className={project.coverFit === "contain" ? "object-contain p-4" : "object-cover"}
          />
        </div>
      );
    }
  }
  if (project.cover === "svg-network") return <NetworkCover />;
  return <div className="w-full h-full" style={{ backgroundColor: "#111" }} />;
}

// ── Card ─────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasSingleImage = project.cover === "image" && !!project.coverSrc && !project.coverSrcs;

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="carousel-card shrink-0 w-72 lg:w-80 border flex flex-col overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Cover */}
        <div
          className={`h-44 overflow-hidden shrink-0 relative${hasSingleImage ? " cursor-zoom-in" : ""}`}
          onClick={() => hasSingleImage && setLightboxOpen(true)}
        >
          <CardCover project={project} />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5" style={{ backgroundColor: "var(--background)" }}>
          {/* Subheader */}
          {project.subheader && (
            <p className="font-mono text-xs mb-1" style={{ color: "var(--accent)" }}>
              {project.subheader}
            </p>
          )}

          {/* Name + link */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-mono text-sm font-semibold" style={{ color: "var(--foreground)" }}>
              {project.name}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs shrink-0 ml-2 transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")
                }
              >
                ↗
              </a>
            )}
          </div>

          {/* Description */}
          <p className="font-serif text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.description}
          </p>
        </div>
      </motion.div>

      {/* Lightbox for single-image cards */}
      {lightboxOpen && hasSingleImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center font-mono text-xl"
            style={{ color: "#ffffff" }}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.coverSrc!}
              alt={project.name}
              width={1400}
              height={900}
              className="object-contain"
              style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

// ── Divider between groups ────────────────────────────────────────────────

function GroupDivider({ label }: { label: string }) {
  return (
    <div className="shrink-0 flex items-center gap-4 px-2">
      <div className="w-px self-stretch" style={{ backgroundColor: "var(--border)" }} />
      <span
        className="font-mono text-xs tracking-[0.15em] uppercase whitespace-nowrap"
        style={{
          color: "var(--muted)",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────

export default function ConsultingSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  const engagements = projects.filter((p) => p.group === "engagement");
  const independent = projects.filter((p) => p.group === "independent");

  return (
    <section id="consulting" className="py-24">
      {/* ── Header ── */}
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
          Consulting
        </span>
        <div className="flex items-center justify-between">
          {/* Logo + title */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 overflow-hidden shrink-0"
              style={{ backgroundColor: "#f0ece4" }}
            >
              <Image
                src="/assets/drever_data.png"
                alt="Drever Data"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h2 className="font-serif text-2xl font-medium" style={{ color: "var(--foreground)" }}>
              Drever Data
            </h2>
          </div>
          {/* Scroll arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="font-mono text-sm px-3 py-1.5 border transition-all disabled:opacity-30"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="font-mono text-sm px-3 py-1.5 border transition-all disabled:opacity-30"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Intro blurb */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-serif text-sm leading-relaxed mb-10 max-w-xl"
        style={{ color: "var(--muted)" }}
      >
        Drever Data is Tucker&rsquo;s independent consulting practice.
        Engagements focus on early-stage health tech companies that need
        hands-on data science, ML engineering, and regulated systems expertise.
      </motion.p>

      {/* ── Carousel ── */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="carousel-track flex gap-4 overflow-x-auto pb-4"
      >
        {/* Engagements group */}
        <div className="shrink-0">
          <p
            className="font-mono text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Engagements
          </p>
          <div className="flex gap-4">
            {engagements.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <GroupDivider label="Independent" />

        {/* Independent group */}
        <div className="shrink-0 flex gap-4 items-start pt-7">
          {independent.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={engagements.length + i} />
          ))}
        </div>

        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
