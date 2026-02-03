import avatar from "@/public/avatar.jpg";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            SOBRE MÍ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mi trayectoria
            
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-secondary overflow-hidden border-2 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent flex items-center justify-center rounded-full">
                  <img src={avatar.src} alt="Avatar" className="w-full h-full object-cover rounded-full scale-150" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-48 h-48 rounded-lg border-2 border-primary/30 -z-10" />
            </div>
            <div className="pt-4">
              <p className="text-foreground font-semibold text-lg">
                Mariano Bastarreix
              </p>
              <p className="text-muted-foreground">Analista Programador</p>
              <p className="text-primary font-mono text-sm mt-1">
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Analista programador con experiencia en{" "}
              <span className="text-foreground font-medium">
                desarrollo full stack
              </span>{" "}
              y docencia. Fuerte base en sistemas, bases de datos y arquitectura
              de software, con foco en soluciones prácticas y mejora continua.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque combina habilidades técnicas sólidas con una pasión por
              crear herramientas que realmente resuelvan problemas. Desde{" "}
              <span className="text-foreground font-medium">
                aplicaciones web escalables
              </span>{" "}
              hasta{" "}
              <span className="text-foreground font-medium">
                sistemas inteligentes
              </span>{" "}
              de procesamiento de datos, busco siempre la excelencia en cada
              proyecto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actualmente enfocado en el desarrollo de{" "}
              <span className="text-foreground font-medium">DentalDoc</span>, un
              sistema de Historia Clínica Electrónica Odontológica con
              integración de visor DICOM, análisis de imágenes con IA, y
              automatización de comunicaciones.
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Tecnologías con las que trabajo frecuentemente:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "React / JavaScript",
                  "PHP / .NET",
                  "MySQL / SQL Server",
                  "DICOM / CornerstoneJS",
                  "APIs REST",
                  "WebSockets",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-primary font-mono text-xs">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
