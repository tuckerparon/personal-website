"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "work", label: "Work" },
  { id: "consulting", label: "Consulting" },
  { id: "now", label: "Now" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const allIds = ["about", ...sections.map((s) => s.id)];
    const observers: IntersectionObserver[] = [];

    allIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -55% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="hidden lg:flex fixed left-0 top-0 h-screen w-52 flex-col justify-between z-50 border-r overflow-hidden"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
      >
        <div>
          {/* Headshot flush to top */}
          <div className="w-full" style={{ lineHeight: 0 }}>
            <Image
              src="/assets/headshot_tuckerparon.jpg"
              alt="Tucker Paron"
              width={208}
              height={260}
              className="w-full"
              style={{ height: "auto", display: "block" }}
              priority
            />
          </div>

          <div className="px-8 pt-6">
          <button onClick={() => scrollTo("about")} className="text-left block mb-8">
            <h1
              className="font-mono font-semibold text-sm tracking-tight leading-snug"
              style={{ color: "var(--foreground)" }}
            >
              Tucker Paron
            </h1>
            <p
              className="font-mono text-xs mt-2 leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              vermonter.
              <br />
              athlete.
              <br />
              tech for good.
            </p>
          </button>

          <nav className="space-y-0.5">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="group flex items-center w-full text-left font-mono text-xs py-1.5 transition-colors"
                style={{
                  color: activeSection === id ? "var(--accent)" : "var(--muted)",
                }}
              >
                <motion.span
                  animate={{ opacity: activeSection === id ? 1 : 0, x: activeSection === id ? 0 : -4 }}
                  transition={{ duration: 0.15 }}
                  className="mr-2"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </motion.span>
                <span
                  className="group-hover:text-foreground transition-colors"
                  style={{
                    color: activeSection === id ? "var(--accent)" : "var(--muted)",
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </nav>
          </div>
        </div>

        <p className="font-mono text-xs px-8 pb-8" style={{ color: "var(--muted)" }}>
          © 2026
        </p>
      </nav>

      {/* Mobile header */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b px-6 py-4 flex items-center justify-between backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(245,244,240,0.95)",
          borderColor: "var(--border)",
        }}
      >
        <button onClick={() => scrollTo("about")}>
          <span
            className="font-mono font-semibold text-sm"
            style={{ color: "var(--foreground)" }}
          >
            Tucker Paron
          </span>
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="font-mono text-xs transition-colors"
          style={{ color: "var(--muted)" }}
        >
          {mobileOpen ? "close" : "menu"}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed top-[57px] left-0 right-0 z-50 border-b px-6 py-4"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
            }}
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left font-mono text-sm py-2 transition-colors"
                style={{
                  color: activeSection === id ? "var(--accent)" : "var(--muted)",
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
