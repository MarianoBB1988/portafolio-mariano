"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Play, Stethoscope, MonitorPlay, Zap, Code2, TestTube } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DentalDoc - Historia Clínica Electrónica",
    description:
      "Sistema completo de Historia Clínica Electrónica Odontológica diseñado para transformar la gestión de consultorios. Incluye gestión integral de pacientes, recordatorios vía WhatsApp, visor de archivos DICOM integrado, y asistente de IA para consultas odontológicas.",
    fullDescription:
      "Sistema de gestión clínica con acceso remoto, interfaz intuitiva, cumplimiento de estándares de privacidad y seguridad. Permite adjuntar imágenes, PDFs y archivos DICOM (TACs y radiografías). Integra inteligencia artificial para consultas sobre información odontológica.",
    technologies: [
      "React",
      "PHP",
      "MySQL",
      "DICOM",
      "WhatsApp API",
      "IA",
    ],
    icon: Stethoscope,
    videoPlaceholder: "",
    videoLinkedinUrl: "https://www.linkedin.com/posts/mariano-bastarreix_reactjs-cornerstonejs-dicom-activity-7402452521232809984-fNS5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADWUzJkBQyBFzXgt0LGIRbZ4nhoes6v2tp4",
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7296189275165847552?compact=1",
    features: [
      "Gestión integral de pacientes",
      "Recordatorios vía WhatsApp",
      "Visor DICOM integrado",
      "Asistente IA odontológico",
    ],
    videoPreviewImg: "/dentaldoc-linkedin-preview.jpg", // Debes poner esta imagen en public/
  },
  {
    id: 2,
    title: "Visualizador DICOM para DentalDoc",
    description:
      "Visualizador completo de archivos DICOM capaz de mostrar desde radiografías simples hasta estudios TAC con sus diferentes cortes. Incorpora herramientas pensadas para facilitar el análisis clínico.",
    fullDescription:
      "Visor DICOM basado en web desarrollado íntegramente para DentalDoc. Permite navegar entre los diferentes cortes de una TAC y visualizar la información de manera clara e intuitiva. Ofrece una experiencia fluida, moderna y accesible directamente desde el sistema, mejorando la gestión clínica y agilizando la interpretación de estudios.",
    technologies: [
      "React",
      "CornerstoneJS",
      "JavaScript",
      "DICOM",
      "Healthcare Tech",
    ],
    icon: MonitorPlay,
    videoPlaceholder: "",
      videoLinkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7402452358049218561/",
    features: [
      "Navegación de cortes TAC",
      "Radiografías simples y complejas",
      "Herramientas de análisis clínico",
      "Integrado con DentalDoc",
    ],
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7402452358049218561?compact=1",
  },
  {
    id: 3,
    title: "Análisis Automatizado con IA de Imágenes RX",
    description:
      "Sistema de análisis técnico automatizado de imágenes radiográficas integrado en el DICOM Viewer. Evalúa parámetros como contraste, textura, morfología y detecta zonas de interés radiológico.",
    fullDescription:
      "Funcionalidad de análisis automatizado con IA integrada en el DICOM Viewer. El sistema realiza un análisis técnico evaluando: distribución de niveles de gris y contraste, patrones de textura y uniformidad, detección de contornos y estructuras anatómicas, variaciones morfológicas y de densidad, e identificación de asimetrías y zonas de interés radiológico. Aporta información objetiva y reproducible como soporte al diagnóstico, sin sustituir la evaluación clínica ni el diagnóstico médico.",
    technologies: [
      "Procesamiento de Imágenes",
      "Análisis de Contraste",
      "Detección de Contornos",
      "CAD",
      "IA",
    ],
    icon: Stethoscope,
    videoPlaceholder: "",
      videoLinkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7424456817327505408/",
    features: [
      "Análisis de niveles de gris",
      "Detección de estructuras anatómicas",
      "Identificación de asimetrías",
      "Soporte al diagnóstico (CAD)",
    ],
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7424456817327505408?compact=1",
  },
  {
    id: 4,
    title: "Web App con WebSocket en Tiempo Real",
    description:
      "Aplicación web completamente funcional con comunicación en tiempo real entre múltiples usuarios sin necesidad de recargar la página.",
    fullDescription:
      "Web App desarrollada con React para una interfaz dinámica y reactiva, PHP para la lógica del servidor, MySQL para gestión eficiente de datos, y WebSocket para comunicación en tiempo real. Demuestra el poder de las tecnologías modernas para crear aplicaciones rápidas, interactivas y escalables.",
    technologies: ["React", "PHP", "MySQL", "WebSocket", "API REST"],
    icon: Zap,
    videoPlaceholder: "",
      videoLinkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7236869880493289472/",
    features: [
      "Comunicación en tiempo real",
      "Interfaz dinámica y reactiva",
      "Sincronización multi-usuario",
      "Arquitectura escalable",
    ],
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7236869880493289472?compact=1",
  },
  {
    id: 5,
    title: "Aplicación React JS Demostrativa",
    description:
      "Proyecto desarrollado en React JS para demostrar habilidades y conocimientos en desarrollo web frontend moderno.",
    fullDescription:
      "Aplicación creada para demostrar competencias en desarrollo web con React. Incluye buenas prácticas de código, componentes reutilizables, manejo de estado y diseño responsive.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Git"],
    icon: Code2,
    videoPlaceholder: "",
      videoLinkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7222296696137916418/",
    githubUrl: "https://github.com/MarianoBB1988/EntregaFinal-MarianoBastarreix",
    features: [
      "Componentes reutilizables",
      "Diseño responsive",
      "Buenas prácticas",
      "Código limpio",
    ],
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7222296696137916418?compact=1",
  },
  {
    id: 6,
    title: "Automatización de Casos de Prueba QA con Selenium",
    description:
      "Suite completa de automatización de pruebas desarrollada con Selenium y Python. Automatiza validaciones end-to-end de aplicaciones web, generando reportes detallados y mejorando la eficiencia del proceso QA.",
    fullDescription:
      "Proyecto de automatización QA que implementa un framework robusto de pruebas automatizadas utilizando Selenium WebDriver con Python. Incluye pruebas funcionales, validaciones de elementos UI, manejo de esperas implícitas y explícitas, captura de evidencia mediante screenshots, y generación de reportes HTML detallados. El proyecto demuestra buenas prácticas como el patrón Page Object Model, datos parametrizados, y ejecución paralela de pruebas para optimizar el tiempo de ejecución.",
    technologies: [
      "Selenium",
      "Python",
      "QA Automation",
      "Testing Framework",
      "HTML Reports",
    ],
    icon: TestTube,
    videoPlaceholder: "",
    videoLinkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7424915078258417665/",
    videoLinkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7424915078258417665?compact=1",
    features: [
      "Pruebas automatizadas end-to-end",
      "Page Object Model",
      "Pruebas parametrizadas",
      "Reportes HTML detallados",
      "Captura de evidencia",
      "Ejecución paralela",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            PROYECTOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trabajo destacado
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver en GitHub"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl text-card-foreground leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {/* Solo mostrar el botón para ver el video en LinkedIn */}
                  {project.videoLinkedinUrl && (
                    <div className="w-full flex flex-col items-center mt-4">
                      <a
                        href={project.videoLinkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/80 transition-colors flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Ver video en LinkedIn
                      </a>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs font-mono">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <Dialog open={selectedProject?.id === project.id} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
                    <div className="flex gap-2">
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 text-primary hover:text-primary/80 -ml-2"
                          onClick={() => setSelectedProject(project)}
                        >
                          Ver detalles
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      {project.videoLinkedinUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2 text-primary border-primary hover:bg-primary/10"
                        >
                          <a
                            href={project.videoLinkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver en LinkedIn"
                          >
                            <ExternalLink className="h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      )}
                    </div>
                    {selectedProject?.id === project.id && (
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <DialogTitle className="text-xl">
                              {selectedProject.title}
                            </DialogTitle>
                          </div>
                          <DialogDescription className="text-base pt-2 leading-relaxed">
                            {selectedProject.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedProject.features && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Características principales
                            </h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {selectedProject.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-4">
                          {selectedProject.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="font-mono"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {selectedProject.githubUrl && (
                          <div className="pt-4">
                            <Button asChild variant="outline" className="gap-2 bg-transparent">
                              <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Code2 className="h-4 w-4" />
                                Ver repositorio
                              </a>
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    )}
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
