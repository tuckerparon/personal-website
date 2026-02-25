"use client";

import { motion } from "framer-motion";

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

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-32 lg:py-0">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="mb-8">
            <span
              className="font-mono text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              About
            </span>
          </div>

          {/* Display headline */}
          <h2
            className="font-serif text-4xl lg:text-5xl font-medium leading-[1.2] mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Helping early- and growth-stage health tech companies build
            solutions for preventative care and restoration of function.
          </h2>

          <p
            className="font-serif text-base leading-relaxed mb-4"
            style={{ color: "var(--muted)" }}
          >
            I&rsquo;ve worked across consumer neurotech, metabolic wellness,
            and medical diagnostics — bringing rigor from the elite sports world
            into healthcare. My work spans everything from harmonizing 300M+
            healthcare records to building brain-computer interface demos for
            investors.
          </p>

          <p
            className="font-serif text-base leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
          >
            I spend the rest of my time playing sports, biking, reading, and
            exploring new places.
          </p>

          <div className="flex flex-wrap gap-3">
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
