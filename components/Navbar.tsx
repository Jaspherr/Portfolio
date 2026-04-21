"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-b-transparent">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight">
          JT.
        </a>
        
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <button onClick={() => {
            const el = document.getElementById('projects');
            if (el) window.scrollTo({ top: el.offsetLeft, behavior: 'smooth' });
          }} className="hover:text-foreground transition-colors hidden sm:block">Projects</button>
          
          <button onClick={() => {
            const el = document.getElementById('tools');
            if (el) window.scrollTo({ top: el.offsetLeft, behavior: 'smooth' });
          }} className="hover:text-foreground transition-colors hidden sm:block">Tools</button>
          
          <button onClick={() => {
            const el = document.getElementById('contact');
            if (el) window.scrollTo({ top: el.offsetLeft, behavior: 'smooth' });
          }} className="hover:text-foreground transition-colors hidden sm:block">Contact</button>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {!mounted ? null : theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
