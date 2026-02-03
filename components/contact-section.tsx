import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/59898190178",
    text: "+598 98 190 178",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mariano.bastarreix@gmail.com",
    text: "mariano.bastarreix@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mariano-bastarreix/",
    text: "/in/mariano-bastarreix",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MarianoBB1988?tab=stars",
    text: "/MarianoBB1988",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">
          CONTACTO
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Trabajemos juntos
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Si tienes un proyecto en mente, trabajas en el ámbito odontológico y
          te interesa DentalDoc, o simplemente quieres conectar, estoy
          disponible para conversar.
        </p>

        <Button asChild size="lg" className="gap-2 mb-16">
          <a
            href="https://wa.me/59898190178?text=Hola%20Mariano,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar mensaje por WhatsApp
          </a>
        </Button>

        <div className="flex justify-center gap-8 flex-wrap">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors font-medium">
                  {link.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mariano Bastarreix. Todos los derechos
            reservados.
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            Desarrollado con Next.js y React
          </p>
        </div>
      </div>
    </section>
  );
}
