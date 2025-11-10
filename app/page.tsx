"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiNotion, SiSpotify, SiOpenai } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "next-themes";

const PROJECTS = [
  {
    year: "2025",
    role: "Sakay",
    company: "4th Year Capstone I & II Project",
    description:
      "Designed and developed a real-time bus tracking app with live locations and ETAs, featuring an intuitive interface that helps drivers optimize routes and reduces passenger waiting times.",
    tech: ["Dart", "JS", "Python", "Mongo", "React"],
    images: {
      mobile: [
        "/projects/Sakay/Mobile/CurrentLocation.png",
        "/projects/Sakay/Mobile/DriverManageVehicle.png",
        "/projects/Sakay/Mobile/OnRide.png",
        "/projects/Sakay/Mobile/Profile.png",
      ],
      web: [
        "/projects/Sakay/Web/AAA.png",
        "/projects/Sakay/Web/Reports.png",
        "/projects/Sakay/Web/Sidepanel-1.png",
        "/projects/Sakay/Web/Sidepanel.png",
      ],
    },
  },
  {
    year: "2025",
    role: "HerbaPlant",
    company: "4th Year Side Project",
    description:
      "Developed an herbal reference app that identifies scanned herbs and provides natural remedy information through a clean, AI-assisted mobile interface.",
    tech: ["Dart", "Swift", "Python", "MySQL"],
    images: {
      mobile: [
        "/projects/HerbaPlant/Authentication.png",
        "/projects/HerbaPlant/Chatbot.png",
        "/projects/HerbaPlant/PlantInfo.png",
        "/projects/HerbaPlant/PromptHistory.png",
        "/projects/HerbaPlant/Scan.png",
      ],
    },
  },
  {
    year: "2024",
    role: "USE (UPang Student Essential)",
    company: "2nd - 3rd Year Project",
    description:
      "A school essentials app for UPang students, focusing on UI/UX implementation and mobile front-end development for a seamless user experience.",
    tech: ["Dart", "Swift", "Laravel", "MySQL", "Mongo"],
    images: {
      mobile: [
        "/projects/USE/Welcome.png",
        "/projects/USE/Home.png",
        "/projects/USE/Announcement.png",
        "/projects/USE/Profile1.png",
        "/projects/USE/Profile2.png",
      ],
    },
  },
  {
    year: "2023",
    role: "Kithara",
    company: "2nd Year Project",
    description:
      "Built a responsive web platform for guitar enthusiasts, focusing on a refined layout, engaging content structure, and modern UI improvements to enhance the overall learning experience.",
    tech: ["HTML", "CSS", "JS", "Laravel", "Heroku"],
    images: {
      web: ["/projects/Kithara/kt.png"],
    },
  },
];

const TECH_STACK = [
  "Dart",
  "Python",
  "Java",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Git"
];

const SOCIAL_LINKS = [
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
];

export default function Home() {
  const [selectedView, setSelectedView] = useState("mobile");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

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

  const kits = [
    { name: "Visual Studio Code", type: "image", src: "/assets/icons/vsc.png" },
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
    { name: "Kittl", type: "image", src: "/assets/icons/kittl.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden overflow-y-auto">
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

      {/* Scroll Progress Bar */}
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

      {/* Dark Mode Toggle */}
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

      {/* Navigation */}
      <nav className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative flex flex-col gap-6 items-center">
          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent" />
          {["intro", "work", "thoughts", "connect"].map((section) => (
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
        {/* Intro */}
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
                  Skills
                </div>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.map((skill, idx) => (
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
          className="pt-10 sm:pt-24 md:pt-32 pb-24 sm:pb-36 relative"
        >
          <div className="mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight hover-glow-text mb-4">
              Projects
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-light max-w-3xl leading-relaxed">
              A showcase of projects highlighting my focus on intuitive design,
              responsive interfaces, and purposeful digital experiences.
            </p>
          </div>

          <div className="space-y-12">
            {PROJECTS.map((job, index) => (
              <div
                key={index}
                className="group relative border-b border-border/40 hover:border-border/70 transition-all duration-500"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-background/10 hover:bg-background/20 transition-all duration-500">
                  <div className="grid md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-10 relative z-10">
                    {/* Year */}
                    <div className="md:col-span-2 lg:col-span-2">
                      <div className="text-2xl sm:text-3xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {job.year}
                      </div>
                      <div className="w-10 h-px bg-border mt-3 group-hover:bg-foreground/40 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-6 lg:col-span-10 space-y-5 min-w-0">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-light tracking-tight hover-glow-text">
                          {job.role}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground font-light mt-1">
                          {job.company}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-light max-w-full md:max-w-3xl">
                        {job.description}
                      </p>

                      {/* Images */}
                      {job.images && (
                        <div className="pt-4">
                          {/* Toggle buttons for mobile/web */}
                          {job.images.mobile && job.images.web && (
                            <>
                              <div className="flex gap-3 mb-4">
                                <button
                                  onClick={() => setSelectedView("mobile")}
                                  className={`px-4 py-2 text-sm rounded-md border transition-all duration-300 ${
                                    selectedView === "mobile"
                                      ? "bg-foreground text-background border-foreground"
                                      : "bg-background text-muted-foreground border-border hover:border-foreground/50"
                                  }`}
                                >
                                  Mobile
                                </button>
                                <button
                                  onClick={() => setSelectedView("web")}
                                  className={`px-4 py-2 text-sm rounded-md border transition-all duration-300 ${
                                    selectedView === "web"
                                      ? "bg-foreground text-background border-foreground"
                                      : "bg-background text-muted-foreground border-border hover:border-foreground/50"
                                  }`}
                                >
                                  Web
                                </button>
                              </div>

                              {/* Image container */}
                              <div className="relative">
                                <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory py-2">
                                  {(selectedView === "mobile"
                                    ? job.images.mobile
                                    : job.images.web
                                  ).map((imgSrc, imgIdx) => (
                                    <div
                                      key={imgIdx}
                                      className={`
                                        relative flex-shrink-0 snap-start rounded-lg overflow-hidden
                                        border border-border/30 bg-transparent
                                        ${
                                          selectedView === "web"
                                            ? "w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[28vw] xl:w-[30vw] aspect-[16/9]"
                                            : "w-[38vw] sm:w-[26vw] md:w-[18vw] lg:w-[14vw] xl:w-[12vw]"
                                        }
                                      `}
                                    >
                                      <img
                                        src={imgSrc}
                                        alt={`${job.role} screenshot ${
                                          imgIdx + 1
                                        }`}
                                        className="w-full h-full object-cover object-center rounded-lg cursor-pointer"
                                        onClick={() => setPreviewImage(imgSrc)}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Mobile-only */}
                          {job.images.mobile && !job.images.web && (
                            <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory py-2">
                              {job.images.mobile.map((imgSrc, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className="relative flex-shrink-0 snap-start rounded-lg overflow-hidden border border-border/30 bg-transparent w-[38vw] sm:w-[26vw] md:w-[18vw] lg:w-[14vw] xl:w-[12vw]"
                                >
                                  <img
                                    src={imgSrc}
                                    alt={`${job.role} screenshot ${imgIdx + 1}`}
                                    className="w-full h-auto object-contain object-center rounded-lg cursor-pointer"
                                    onClick={() => setPreviewImage(imgSrc)}
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Web-only */}
                          {job.images.web && !job.images.mobile && (
                            <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory py-2">
                              {job.images.web.map((imgSrc, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className="relative flex-shrink-0 snap-start rounded-lg overflow-hidden border border-border/30 bg-transparent w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[28vw] xl:w-[30vw] aspect-[16/7.5]"
                                >
                                  <img
                                    src={imgSrc}
                                    alt={`${job.role} screenshot ${imgIdx + 1}`}
                                    className="w-full h-full object-cover object-center rounded-lg cursor-pointer"
                                    onClick={() => setPreviewImage(imgSrc)}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {job.tech.map((tech, techIdx) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border/30 rounded-md bg-background/50 hover:border-foreground/30 hover:text-foreground transition-all duration-300"
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
              Tools & Kits
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl">
              My go-to tools for design, development, and creative workflow
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8">
            {kits.map((kit, idx) => (
              <div
                key={kit.name}
                className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border border-border/50 rounded-2xl bg-background/40 backdrop-blur-sm hover:border-foreground/50 hover:bg-background/60 hover:scale-105 hover:shadow-lg transition-all duration-300">
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

                <div className="text-sm sm:text-base font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {kit.name}
                </div>
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
          className="py-24 sm:py-36 opacity-0 relative"
        >
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
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-6 py-4 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm hover:border-foreground/50 hover:bg-background/60 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <FaEnvelope
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
                <span className="text-base sm:text-lg font-light">
                  taniajaspher@gmail.com
                </span>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                Elsewhere
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social, idx) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-6 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-background/60 hover:shadow-xl hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 space-y-2 flex flex-col items-start">
                      <div className="flex items-center gap-3 text-base font-light text-foreground group-hover:text-foreground transition-colors">
                        {social.name === "GitHub" && <FaGithub size={20} />}
                        {social.name === "LinkedIn" && <FaLinkedin size={20} />}
                        <span>{social.name}</span>
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
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-16 space-y-2">
            <p className="text-sm sm:text-base text-muted-foreground font-light">
              <span className="text-foreground font-normal">JT</span>.
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>

        {previewImage && (
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6 transition-all duration-300 ease-in-out ${
              isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                setPreviewImage(null);
                setIsClosing(false);
              }, 300);
            }}
          >
            <div className="relative max-w-5xl w-full flex justify-center">
              <img
                src={previewImage}
                alt="Preview"
                className={`max-h-[90vh] w-auto rounded-lg shadow-2xl ${
                  isClosing ? "animate-zoomOut" : "animate-zoomIn"
                }`}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsClosing(true);
                  setTimeout(() => {
                    setPreviewImage(null);
                    setIsClosing(false);
                  }, 300);
                }}
                className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300"
                aria-label="Close preview"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
