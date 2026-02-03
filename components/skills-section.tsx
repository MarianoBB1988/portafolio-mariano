import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Lightbulb } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["PHP", "Java", ".NET", "Node.js", "APIs REST", "WebSockets"],
  },
  {
    category: "Bases de datos",
    icon: Database,
    skills: ["MySQL", "SQL Server", "PostgreSQL"],
  },
  {
    category: "Especialidades",
    icon: Lightbulb,
    skills: [
      "DICOM / CornerstoneJS",
      "Procesamiento de Imágenes",
      "Sistemas Inteligentes",
      "Integración IA",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            HABILIDADES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Stack tecnológico
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs py-1.5 px-2.5 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
