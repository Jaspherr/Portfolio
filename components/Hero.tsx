import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center px-12 sm:px-24">
      <div className="space-y-6 max-w-3xl flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 ease-out fill-mode-both">
          Hi, I'm Jaspher.
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-balance max-w-2xl font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 ease-out fill-mode-both">
          UI/UX Designer and Front-End Developer dedicated to creating responsive, user-centered designs that balance aesthetics with functionality.
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 ease-out fill-mode-both">
          <MapPin size={18} />
          <span>Philippines</span>
        </div>
      </div>
    </section>
  );
}
