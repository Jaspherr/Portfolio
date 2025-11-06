"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiNotion, SiSpotify, SiOpenai } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min((scrollTop / docHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in-up");
            setActiveSection(e.target.id);
          }
        }),
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach(
      (section) => section && observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">

      {/* Custom Cursor Effect */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border border-foreground/20 backdrop-blur-sm mix-blend-difference transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: `${mousePosition.x - 1}px`,
          top: `${mousePosition.y - 1}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Scroll Progress Bar - Enhanced */}
      <div className="fixed top-0 bottom-0 right-2 sm:right-4 md:right-6 z-50 w-[2px] sm:w-[3px] md:w-[4px] bg-muted-foreground/5 backdrop-blur-sm">
        <div
          className="w-full transition-all duration-500 ease-out relative"
          style={{
            height: `${scrollProgress}%`,
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/60 blur-sm animate-pulse" />
        </div>
      </div>

      {/* Dark Mode Toggle - Premium Style */}
      <div className="flex justify-end max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 pt-2 sm:pt-3">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group relative p-3.5 rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl hover:border-muted-foreground/80 hover:bg-background/90 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          aria-label="Toggle theme"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {!mounted ? (
            <div className="w-4 h-4" />
          ) : theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation - Premium Style */}
      <nav className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative flex flex-col gap-6 items-center">

          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent" />

          {/* Section dots */}
          {["intro", "work", "thoughts", "connect"].map((section, index) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`relative z-10 transition-all duration-500 ease-out ${
                activeSection === section
                  ? "w-4 h-4 scale-110"
                  : "w-2.5 h-2.5 scale-100 hover:scale-110"
              }`}
              aria-label={`Navigate to ${section}`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  activeSection === section
                    ? "bg-foreground shadow-lg shadow-foreground/30"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
              {activeSection === section && (
                <div className="absolute inset-0 rounded-full bg-foreground/20 animate-ping" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Intro - Award-Winning Style */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-[90vh] flex items-center opacity-0 relative"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-20 w-full relative z-10">
            <div className="lg:col-span-3 space-y-3 sm:space-y-5">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95]">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground text-foreground">
                    Jaspher
                  </span>
                  <span className="text-muted-foreground/60 mt-2"> Tania</span>
                </h1>
              </div>

              <div className="space-y-8 max-w-2xl">
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  UI/UX Designer and Front-End Developer dedicated to creating
                  <span className="text-foreground font-normal">
                    {" "}
                    responsive
                  </span>
                  ,
                  <span className="text-foreground font-normal">
                    {" "}
                    user-centered designs
                  </span>
                  , that
                  <span className="text-foreground font-normal">
                    {" "}
                    balance aesthetics with functionality
                  </span>
                  .
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 group">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">
                      Exploring ideas & building cool things
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8 lg:translate-y-[-6rem]">
              <div className="space-y-6">
                <div className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Dart",
                    "Python",
                    "Java",
                    "React",
                    "HTML",
                    "CSS",
                    "Node.js",
                  ].map((skill, idx) => (
                    <span
                      key={skill}
                      className="group px-4 py-2 text-xs border border-border/50 rounded-full transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/5 hover:scale-105 hover:shadow-sm backdrop-blur-sm bg-background/40"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects */}
        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="pt-10 sm:pt-32 pb-24 sm:pb-36 opacity-0 relative"
        >
          {/* Section Header */}
          <div className="mb-16 sm:mb-24 flex items-baseline gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight hover-glow-text">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {
                [
                  {
                    year: "2025",
                    role: "Sakay",
                    company: "4th Year Capstone I & II Project",
                    description:
                      "App that tracks buses in real-time, showing locations and ETAs. Helps drivers optimize routes and reduces waiting times for passengers.",
                    tech: ["Dart", "JS", "Python", "Mongo", "React"],
                    repo: "#",
                  },
                  {
                    year: "2025",
                    role: "HerbaPlant",
                    company: "4th Year Side Project",
                    description:
                      "An herbal reference app that educates users about natural remedies and plant-based health solutions.",
                    tech: ["Dart", "Swift", "Laravel", "MySQL", "Heroku"],
                    repo: "#",
                  },
                  {
                    year: "2024",
                    role: "USE (UPang Student Essential)",
                    company: "2nd - 3rd Year Project",
                    description:
                      "Developed a school essentials app for UPang students to streamline distribution and enhance accessibility.",
                    tech: ["Dart", "Swift", "Laravel", "MySQL", "Heroku"],
                    repo: "#",
                  },
                  {
                    year: "2023",
                    role: "Kithara",
                    company: "2nd Year Project",
                    description:
                      "Built a website for guitar enthusiasts with improved design, content, and structure for a better learning experience.",
                    tech: ["HTML", "CSS", "JS", "Laravel", "Heroku"],
                    repo: "#",
                  },
                ].length
              }{" "}
              Projects
            </span>
          </div>

          <div className="space-y-8 sm:space-y-4">
            {[
              {
                year: "2025",
                role: "Sakay",
                company: "4th Year Capstone I & II Project",
                description:
                  "App that tracks buses in real-time, showing locations and ETAs. Helps drivers optimize routes and reduces waiting times for passengers.",
                tech: ["Dart", "JS", "Python", "Mongo", "React"],
                repo: "#",
              },
              {
                year: "2025",
                role: "HerbaPlant",
                company: "4th Year Side Project",
                description:
                  "An herbal reference app that educates users about natural remedies and plant-based health solutions.",
                tech: ["Dart", "Swift", "Laravel", "MySQL", "Heroku"],
                repo: "#",
              },
              {
                year: "2024",
                role: "USE (UPang Student Essential)",
                company: "2nd - 3rd Year Project",
                description:
                  "Developed a school essentials app for UPang students to streamline distribution and enhance accessibility.",
                tech: ["Dart", "Swift", "Laravel", "MySQL", "Heroku"],
                repo: "#",
              },
              {
                year: "2023",
                role: "Kithara",
                company: "2nd Year Project",
                description:
                  "Built a website for guitar enthusiasts with improved design, content, and structure for a better learning experience.",
                tech: ["HTML", "CSS", "JS", "Laravel", "Heroku"],
                repo: "#",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Premium Card Container */}
                <div className="relative p-8 sm:p-6 rounded-none border-0 border-b border-border/50 bg-transparent backdrop-blur-0 transition-all duration-500 hover:border-border hover:bg-transparent hover:shadow-none hover:-translate-y-0">

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="grid lg:grid-cols-12 gap-8 relative z-10">

                    {/* Year */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="text-2xl sm:text-3xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {job.year}
                      </div>
                      <div className="w-12 h-px bg-border group-hover:bg-foreground/50 transition-colors duration-300" />
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-10 space-y-6 relative">

                      {/* GitHub Icon */}
                      <a
                        href={job.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -top-2 -right-2 p-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:bg-foreground/5 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                        aria-label={`${job.role} GitHub Repository`}
                      >
                        <FaGithub size={20} />
                      </a>

                      <div className="space-y-2 pr-12">
                        <h3 className="text-2xl sm:text-3xl font-light tracking-tight hover-glow-text">
                          {job.role}
                        </h3>
                        <div className="text-muted-foreground font-light">
                          {job.company}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed max-w-2xl text-base sm:text-lg font-light">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {job.tech.map((tech, techIdx) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border/30 rounded-md bg-background/50 backdrop-blur-sm hover:border-foreground/30 hover:text-foreground transition-all duration-300"
                            style={{ animationDelay: `${techIdx * 30}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kits */}
        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="pt-24 sm:pt-32 pb-24 sm:pb-36 opacity-0 relative"
        >
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4 hover-glow-text">
              Kits
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl">
              Tools and platforms that power my workflow and creative process
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "VS Code", type: "image", src: "/assets/icons/vsc.png" },
              { name: "Figma", type: "image", src: "/assets/icons/fig.png" },
              {
                name: "Notion",
                type: "icon",
                icon: SiNotion,
                color: theme === "dark" ? "#fff" : "#000",
              },
              {
                name: "Spotify",
                type: "icon",
                icon: SiSpotify,
                color: "#1DB954",
              },
              {
                name: "ChatGPT",
                type: "icon",
                icon: SiOpenai,
                color: theme === "dark" ? "#ffffff" : "#000",
              },
            ].map((kit, idx) => (
              <div
                key={kit.name}
                className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border border-border/50 rounded-2xl bg-background/40 backdrop-blur-sm hover:border-foreground/50 hover:bg-background/60 hover:scale-105 hover:shadow-lg transition-all duration-300">

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/0 via-foreground/10 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {kit.type === "image" ? (
                      <img
                        src={kit.src || "/placeholder.svg"}
                        alt={kit.name}
                        width="56"
                        height="56"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      mounted &&
                      kit.icon && (
                        <kit.icon
                          size={56}
                          color={kit.color}
                          className="transition-all duration-300 group-hover:scale-110"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {kit.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect - Premium Contact Section */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-24 sm:py-36 opacity-0 relative"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10" />

          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 relative z-10">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight hover-glow-text">
                  Let&apos;s Connect
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>
              </div>

              <Link
                href="mailto:taniajaspher@gmail.com"
                className="group inline-flex items-center gap-4 px-6 py-4 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm hover:border-foreground/50 hover:bg-background/60 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="text-base sm:text-lg font-light">
                  taniajaspher@gmail.com
                </span>

                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                </svg>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                Elsewhere
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@Jaspherr",
                    url: "https://github.com/Jaspherr",
                  },
                  {
                    name: "LinkedIn",
                    handle: "Jaspher Tania",
                    url: "https://www.linkedin.com/in/jaspher-tania/",
                  },
                ].map((social, idx) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group relative p-6 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-background/60 hover:shadow-xl hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 space-y-2">
                      <div className="text-base font-light text-foreground group-hover:text-foreground transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground font-light group-hover:text-muted-foreground/80 transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 border-t border-border/50 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-sm text-muted-foreground font-light">
              © 2025. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}