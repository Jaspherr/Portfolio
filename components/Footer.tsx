import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer id="contact" className="h-screen w-screen flex-shrink-0 snap-center flex flex-col justify-center px-12 sm:px-24 border-none mt-0 py-0 scroll-mt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="up">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Always interested in new opportunities, collaborations, and conversations about technology and design.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <a
                href="mailto:taniajaspher@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                taniajaspher0@gmail.com
              </a>
            </FadeIn>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
            <FadeIn direction="left" delay={450}>
              <a
                href="https://github.com/Jaspherr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors w-full sm:w-64"
              >
                <Github size={24} />
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-muted-foreground">@Jaspherr</div>
                </div>
              </a>
            </FadeIn>

            <FadeIn direction="left" delay={600}>
              <a
                href="https://www.linkedin.com/in/jaspher-tania/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors w-full sm:w-64"
              >
                <Linkedin size={24} />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Jaspher Tania</div>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>

        <FadeIn direction="up" delay={800} className="mt-20 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Jaspher Tania. All rights reserved.</div>
          <div className="font-semibold text-foreground mt-4 sm:mt-0">JT.</div>
        </FadeIn>
      </div>
    </footer>
  );
}
