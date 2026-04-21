"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";
import { Footer } from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const updateHeight = () => {
      const scrollWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      wrapper.style.height = `${scrollWidth - viewportWidth + viewportHeight}px`;
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", updateHeight);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          container.style.transform = `translate3d(-${window.scrollY}px, 0, 0)`;

          if (progressRef.current) {
            const scrollMax = wrapper.scrollHeight - window.innerHeight;
            const progress = scrollMax > 0 ? (window.scrollY / scrollMax) * 100 : 0;
            progressRef.current.style.width = `${progress}%`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-background text-foreground">
      <Navbar />

      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <main
          ref={containerRef}
          className="flex h-screen w-max will-change-transform"
        >
          <Hero />
          <Projects />
          <Tools />
          <Footer />
        </main>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80vw] sm:w-[50vw] max-w-2xl h-1 bg-border/40 z-50 rounded-full overflow-hidden pointer-events-none">
          <div ref={progressRef} className="h-full bg-foreground w-0 will-change-[width] transition-none" />
        </div>
      </div>
    </div>
  );
}
