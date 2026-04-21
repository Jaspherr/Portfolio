"use client";

import { Code2, PenTool } from "lucide-react";
import { SiFigma, SiNotion, SiSpotify, SiOpenai } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { FadeIn } from "./FadeIn";

export function Tools() {
  const tools = [
    { name: "VS Code", category: "Editor", icon: VscVscode },
    { name: "Figma", category: "Design", icon: SiFigma },
    { name: "Notion", category: "Productivity", icon: SiNotion },
    { name: "Spotify", category: "Focus", icon: SiSpotify },
    { name: "ChatGPT", category: "AI", icon: SiOpenai },
    { name: "Kittl", category: "Design", icon: PenTool },
  ];

  const stack = [
    "Dart", "React", "Python", "Java", "HTML", "CSS", "JavaScript", "Git"
  ];

  return (
    <section id="tools" className="h-screen w-screen flex-shrink-0 snap-center flex flex-col px-6 sm:px-24 pt-24 pb-12 sm:py-0 sm:justify-center scroll-mt-0 overflow-y-auto sm:overflow-visible hide-scrollbar relative">
      <div className="max-w-7xl mx-auto w-full my-auto">
        <div className="mb-8 sm:mb-12">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Tools & Skills</h2>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <p className="text-lg sm:text-xl text-muted-foreground">My go-to tools for design, development, and creative workflow.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          <FadeIn direction="up" delay={300} className="bento-card p-8 md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Code2 size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Core Tech Stack</h3>
              <p className="text-muted-foreground mb-8">
                The foundational languages and frameworks I use to bring ideas to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={450} className="bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <PenTool size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating intuitive user experiences with modern design tools.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={600} className="bento-card p-8 md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Everyday Kits</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-row items-center justify-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-foreground/20 transition-colors">
                  <div className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                    <tool.icon size={22} />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-sm font-semibold whitespace-nowrap">{tool.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">{tool.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
