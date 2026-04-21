"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";

const PROJECTS = [
  {
    id: "clarify",
    title: "Clarify",
    date: "2025 - 2026",
    category: "Content Analysis",
    description: "A website used for summarizing, analyzing and detecting risk on contents like PDF, docx, paragraphs, articles, etc., powered by OpenAI. With Admin priveleges to track statistics and analytics of the website and activities.",
    tech: ["ReactJS", "FastAPI", "Python", "OpenAI", "PostgreSQL"],
    images: {
      web: [
        "/projects/Clarify/DashboardV2.png",
        "/projects/Clarify/AnalyzerPreviewModal.png",
        "/projects/Clarify/Analyzer.png",
        "/projects/Clarify/NewLandingPage.png",
        "/projects/Clarify/RiskSense_ResultPage.png",
        "/projects/Clarify/RiskSense_UploadDocument.png",
        "/projects/Clarify/Users.png",
      ]
    },
    colSpan: "md:col-span-2",
  },
  {
    id: "sakay",
    title: "Sakay",
    date: "2025",
    category: "Real-time Tracker",
    description: "Designed and developed a real-time bus tracking app with live locations and ETAs, featuring an intuitive interface that helps drivers optimize routes and reduces passenger waiting times.",
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
        "/projects/Sakay/Web/Sidepanel.png"
      ]
    },
    colSpan: "md:col-span-2",
  },
  {
    id: "herbaplant",
    title: "HerbaPlant",
    date: "2024 - 2025",
    category: "AI Herbal Reference",
    description: "Developed an herbal reference app that identifies scanned herbs and provides natural remedy information through a clean, AI-assisted mobile interface.",
    tech: ["Dart", "Swift", "Python", "MySQL"],
    images: {
      mobile: [
        "/projects/HerbaPlant/Authentication.png",
        "/projects/HerbaPlant/Chatbot.png",
        "/projects/HerbaPlant/PlantInfo.png",
        "/projects/HerbaPlant/PromptHistory.png",
        "/projects/HerbaPlant/Scan.png",
      ]
    },
    colSpan: "md:col-span-1",
  },
  {
    id: "use",
    title: "USE (UPang Student Essential)",
    date: "2024",
    category: "Student App",
    description: "A school essentials app for UPang students, focusing on UI/UX implementation and mobile front-end development for a seamless user experience.",
    tech: ["Dart", "Swift", "Laravel", "MySQL"],
    images: {
      mobile: [
        "/projects/USE/Welcome.png",
        "/projects/USE/Home.png",
        "/projects/USE/Announcement.png",
        "/projects/USE/Profile1.png",
        "/projects/USE/Profile2.png",
      ]
    },
    colSpan: "md:col-span-1",
  },
  {
    id: "kithara",
    title: "Kithara",
    date: "2023",
    category: "Web Platform",
    description: "Built a responsive web platform for guitar enthusiasts, focusing on a refined layout, engaging content structure, and modern UI improvements.",
    tech: ["HTML", "CSS", "JS", "Laravel"],
    images: {
      web: [
        "/projects/Kithara/kt.png"
      ]
    },
    colSpan: "md:col-span-2",
  },
];

type ProjectImages = {
  mobile?: string[];
  web?: string[];
};

function ProjectCarousel({ images, title }: { images: ProjectImages, title: string }) {
  const hasMobile = !!images.mobile?.length;
  const hasWeb = !!images.web?.length;
  const [view, setView] = useState<"mobile" | "web">(hasWeb ? "web" : "mobile");
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImages = images[view] || [];

  useEffect(() => {
    setCurrentIndex(0);
  }, [view]);

  const prevSlide = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
  }, [activeImages.length]);

  const nextSlide = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
  }, [activeImages.length]);

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [activeImages.length]);

  return (
    <div className="relative w-full overflow-hidden bg-muted group/carousel flex flex-col justify-center min-h-[300px]">

      {hasMobile && hasWeb && (
        <div className="absolute top-4 left-4 z-20 flex bg-background/80 backdrop-blur-md rounded-lg p-1 border border-border">
          <button
            onClick={(e) => { e.stopPropagation(); setView("web"); }}
            className={`p-2 rounded-md transition-all ${view === "web" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            aria-label="Web view"
          >
            <Monitor size={16} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setView("mobile"); }}
            className={`p-2 rounded-md transition-all ${view === "mobile" ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            aria-label="Mobile view"
          >
            <Smartphone size={16} />
          </button>
        </div>
      )}

      <div className={`relative w-full ${view === "web" ? "aspect-video" : "aspect-[4/5] sm:aspect-[9/16] max-h-[600px]"} mx-auto`}>
        <div
          className="flex h-full w-full will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
          }}
        >
          {activeImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full p-4 pb-14 sm:p-8 sm:pb-16 flex items-center justify-center">
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  transform: index === currentIndex ? 'scale(1)' : 'scale(0.95)',
                  opacity: index === currentIndex ? 1 : 0.5,
                  transition: 'all 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
                }}
              >
                <img
                  src={img}
                  alt={`${title} - image ${index + 1}`}
                  className={`object-contain drop-shadow-2xl rounded-lg ${view === "mobile" ? "max-h-[85%] max-w-[65%] sm:max-h-full sm:max-w-[80%]" : "w-full h-full"}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23e4e4e7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%2371717a">Image</text></svg>';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background z-20 shadow-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background z-20 shadow-sm"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50">
            {activeImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-foreground w-6" : "bg-foreground/40 hover:bg-foreground/60 w-2"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { FadeIn } from "./FadeIn";

export function Projects() {
  return (
    <>
      <section id="projects" className="h-screen w-screen sm:w-[50vw] lg:w-[40vw] flex-shrink-0 snap-center flex flex-col justify-center px-12 sm:px-24">
        <div className="max-w-xl">
          <FadeIn direction="up">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <p className="text-xl text-muted-foreground">A showcase of projects highlighting my focus on intuitive design and responsive interfaces. Keep scrolling to explore.</p>
          </FadeIn>
        </div>
      </section>

      {PROJECTS.map((project, idx) => (
        <section
          key={project.id}
          className={`h-screen flex-shrink-0 snap-center flex flex-col justify-center px-4 sm:px-8 ${project.colSpan === "md:col-span-2"
            ? "w-screen sm:w-[900px]"
            : "w-screen sm:w-[500px]"
            }`}
        >
          <FadeIn 
            direction="up" 
            delay={idx * 100} 
            className="bento-card group flex flex-col h-[85vh] w-full"
          >

            <ProjectCarousel images={project.images} title={project.title} />

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4 gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-muted-foreground mb-2 flex items-center gap-2">
                    <span>{project.category}</span>
                    <span>&bull;</span>
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold whitespace-nowrap truncate">{project.title}</h3>
                </div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 text-xs rounded-full border border-border bg-background">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      ))}
    </>
  );
}
