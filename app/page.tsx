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
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
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
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach(
      (section) => section && observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 bottom-0 right-2 sm:right-4 md:right-6 z-50 w-[2px] sm:w-[3px] md:w-[4px] bg-muted-foreground/10">
        <div
          className="w-full transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress}%`,
            backgroundColor: theme === "dark" ? "#fff" : "#000",
          }}
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex justify-end max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 pt-6">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition"
          aria-label="Toggle theme"
        >
          {!mounted ? (
            <div className="w-4 h-4" />
          ) : theme === "dark" ? (
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative flex flex-col gap-4">
          {/* Section dots */}
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-foreground scale-100"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60 scale-90"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Intro */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-[85vh] flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Jaspher <span className="text-muted-foreground">Tania</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  UI/UX Designer and Front-End Developer dedicated to creating
                  <span className="text-foreground"> responsive</span>,
                  <span className="text-foreground">
                    {" "}
                    user-centered designs
                  </span>
                  , that
                  <span className="text-foreground">
                    {" "}
                    balance aesthetics with functionality
                  </span>
                  .
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                    Exploring ideas & building cool things
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 translate-y-[-2.5rem] lg:translate-y-[-4.5rem]">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dart",
                    "Python",
                    "Java",
                    "React",
                    "HTML",
                    "CSS",
                    "Node.js",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors"
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
          className="pt-20 sm:pt-24 pb-20 sm:pb-28 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-12 sm:mb-16">
            Projects
          </h2>

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
              className="group grid lg:grid-cols-12 gap-8 py-8 mb-3 border-b border-border/50 hover:border-border transition-colors items-start"
            >
              {/* Year */}
              <div className="lg:col-span-2 text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground flex items-start justify-between lg:justify-start">
                <span>{job.year}</span>

                {/* GitHub Icon */}
                <a
                  href={job.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition lg:hidden"
                  aria-label={`${job.role} GitHub Repository`}
                >
                  <FaGithub size={20} />
                </a>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-10 space-y-3 relative">
                {/* GitHub Icon */}
                <a
                  href={job.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block absolute right-0 top-0 text-muted-foreground hover:text-foreground transition"
                  aria-label={`${job.role} GitHub Repository`}
                >
                  <FaGithub size={24} />
                </a>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Kits */}
        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="pt-16 pb-0 sm:pt-20 sm:pb-32 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-2 sm:pb-10">
            Kits
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
            ].map((kit) => (
              <div
                key={kit.name}
                className="flex flex-col items-center text-center space-y-1"
              >
                <div className="w-20 h-20 flex items-center justify-center border border-border rounded-xl hover:border-muted-foreground/50 transition">
                  {kit.type === "image" ? (
                    <img
                      src={kit.src || "/placeholder.svg"}
                      alt={kit.name}
                      width="48"
                      height="48"
                    />
                  ) : (
                    mounted &&
                    kit.icon && (
                      <kit.icon
                        size={48}
                        color={kit.color}
                        className="transition-colors duration-300"
                      />
                    )
                  )}
                </div>

                <div className="text-xs text-muted-foreground">{kit.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">
                Let&apos;s Connect
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Always interested in new opportunities, collaborations, and
                conversations about technology and design.
              </p>
              <Link
                href="mailto:taniajaspher@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition"
              >
                <span className="text-base sm:text-lg">
                  taniajaspher@gmail.com
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3a1 1 0 010-2h1zm2 12H5a1 1 0 010-2h10a1 1 0 010 2zm-9-6a1 1 0 011-1h6a1 1 0 011 1m-7 0a1 1 0 000 2h14a1 1 0 000-2zm-7-4a1 1 0 011-1h6a1 1 0 011 1m-7 0a1 1 0 000 2h14a1 1 0 000-2zm2 14a2 2 0 01-2 2H5a2 2 0 01-2-2v-14a2 2 0 012-2h14a2 2 0 012 2v14z"
                  />
                </svg>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
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
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition hover:shadow-sm"
                  >
                    <div>
                      <div className="text-foreground group-hover:text-muted-foreground transition">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
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
        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2025. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}