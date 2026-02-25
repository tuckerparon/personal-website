"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CardSlideshowProps {
  images: string[];
  alt: string;
}

export default function CardSlideshow({ images, alt }: CardSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = e.clientX - pointerStartX.current;
    if (delta < -40) next();
    pointerStartX.current = null;
  };

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
      <div
        className="relative w-full h-full select-none overflow-hidden cursor-zoom-in"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClick={() => setLightboxOpen(true)}
      >
        {/* Slides */}
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={src}
              alt={`${alt} — slide ${i + 1}`}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Right arrow only */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs"
            style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff" }}
            aria-label="Next slide"
          >
            →
          </button>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{
                  backgroundColor: i === current ? "#ffffff" : "rgba(255,255,255,0.35)",
                  transform: i === current ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
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
          <div
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`${alt} — expanded`}
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
