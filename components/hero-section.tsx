"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MarianoBB1988?tab=stars",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mariano-bastarreix/",
    label: "LinkedIn",
  },
];

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 py-20 relative">
      {/* Social Links - Desktop Left Side */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-border">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      {/* Email - Desktop Right Side */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-border">
        <a
          href="mailto:mariano.bastarreix@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          mariano.bastarreix@gmail.com
        </a>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <p className="text-primary font-mono text-sm mb-6 tracking-wider">
          Desarrollador Full Stack
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight text-balance">
          Mariano Bastarreix
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 leading-tight text-balance">
          Aplicaciones Web y Sistemas Inteligentes
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
          Desarrollador Full Stack con experiencia en desarrollo backend y
          frontend, enfocado en la creación de aplicaciones web escalables y
          herramientas inteligentes que integran procesamiento de datos y
          automatización.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => scrollToSection("proyectos")}
          >
            Ver proyectos
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent"
            onClick={() => scrollToSection("contacto")}
          >
            <Mail className="h-4 w-4" />
            Contacto
          </Button>
        </div>
      </div>
    </section>
  );
}
