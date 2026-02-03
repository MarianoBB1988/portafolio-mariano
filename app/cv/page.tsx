import React from "react";

export default function CvPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-foreground bg-background min-h-screen">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium"
        style={{ position: 'absolute', left: 24, top: 24 }}
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.5 16L7.5 10l5-6"/></svg>
        Volver
      </a>
      <h1 className="text-4xl font-bold mb-2">Mariano Bastarreix</h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
        <div>
          <p className="text-base text-muted-foreground mb-1">C.I.: 4200106-4 | Carmelo, Colonia, Uruguay</p>
          <p className="text-base text-muted-foreground mb-1">Fecha de nacimiento: 27/09/1988</p>
        </div>
        <div className="text-base text-muted-foreground">
          <a href="mailto:mariano.bastarreix@gmail.com" className="underline text-primary">mariano.bastarreix@gmail.com</a><br />
          <span>+598 98 190 178</span><br />
          <a href="https://www.linkedin.com/in/mariano-bastarreix/" className="underline text-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
          <a href="https://github.com/MarianoBB1988?tab=stars" className="underline text-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Acerca de mí</h2>
        <p className="text-base mb-2">
          Analista Programador con experiencia en desarrollo de software, infraestructura IT y docencia técnica. He trabajado en entornos de salud, educación y sector productivo, combinando programación, soporte, bases de datos y automatización de pruebas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experiencia Laboral</h2>
        <div className="mb-4">
          <h3 className="font-bold">CAMOC | FEPREMI (2008–2015)</h3>
          <p className="italic text-sm mb-1">Soporte IT, redes, SQL Server, desarrollo web institucional.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Freelance IT / Desarrollo (2008–Actualidad)</h3>
          <p className="italic text-sm mb-1">Sistema de consultas de grano (ERRO), Sistema de amortizaciones, Historia Clínica Electrónica Odontológica</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">ANEP | UTU (2012-Actualidad)</h3>
          <p className="italic text-sm mb-1">Docente en Tecnología de la Información</p>
          <ul className="list-disc ml-6 text-base">
            <li>Docente en Bachilleratos de Tecnología de la Información, con enfoque práctico y orientado a entornos reales de trabajo.</li>
            <li>Diseño y dictado de contenidos técnicos: soporte IT, redes, ciberseguridad, bases de datos y programación full stack.</li>
            <li>Integración de buenas prácticas de desarrollo y resolución de problemas.</li>
            <li>Fortalecimiento de habilidades de liderazgo técnico, documentación, comunicación efectiva y análisis de problemas.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
        <ul className="flex flex-wrap gap-2 text-base mb-2">
          <li className="bg-secondary px-2 py-1 rounded">React JS</li>
          <li className="bg-secondary px-2 py-1 rounded">Java</li>
          <li className="bg-secondary px-2 py-1 rounded">PHP</li>
          <li className="bg-secondary px-2 py-1 rounded">JavaScript</li>
          <li className="bg-secondary px-2 py-1 rounded">HTML</li>
          <li className="bg-secondary px-2 py-1 rounded">CSS</li>
          <li className="bg-secondary px-2 py-1 rounded">Visual Studio (C#, .NET)</li>
          <li className="bg-secondary px-2 py-1 rounded">MySQL</li>
          <li className="bg-secondary px-2 py-1 rounded">Firebase</li>
          <li className="bg-secondary px-2 py-1 rounded">SQL Server</li>
          <li className="bg-secondary px-2 py-1 rounded">Windows Server</li>
          <li className="bg-secondary px-2 py-1 rounded">Active Directory</li>
          <li className="bg-secondary px-2 py-1 rounded">CentOS</li>
          <li className="bg-secondary px-2 py-1 rounded">Cisco IOS</li>
          <li className="bg-secondary px-2 py-1 rounded">Postman</li>
          <li className="bg-secondary px-2 py-1 rounded">TestLink</li>
          <li className="bg-secondary px-2 py-1 rounded">Testing Web</li>
          <li className="bg-secondary px-2 py-1 rounded">Testing Mobile</li>
          <li className="bg-secondary px-2 py-1 rounded">DevTools (Chrome)</li>
          <li className="bg-secondary px-2 py-1 rounded">Trello</li>
          <li className="bg-secondary px-2 py-1 rounded">Python</li>
          <li className="bg-secondary px-2 py-1 rounded">Python + Selenium</li>
          <li className="bg-secondary px-2 py-1 rounded">Metodologías Ágiles</li>
        </ul>
        <ul className="flex flex-wrap gap-2 text-base">
          <li className="bg-secondary px-2 py-1 rounded">Scrum</li>
          <li className="bg-secondary px-2 py-1 rounded">Trabajo por sprints</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Educación</h2>
        <ul className="text-base space-y-1">
          <li><strong>Analista Programador</strong> - ORT (2007 - 2009)</li>
          <li><strong>Bachillerato Científico matemático</strong> (2001 - 2006)</li>
          <li><strong>Reparación y mantenimiento</strong> - IAC (2004)</li>
          <li><strong>QA Tester</strong> - Udemy (2022)</li>
          <li><strong>QA Engineer</strong> - Profesora: Tatianna Nieves (2022)</li>
          <li><strong>Ciberseguridad</strong> - Coderhouse (2023)</li>
          <li><strong>React JS</strong> - Coderhouse (2024)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Referencias</h2>
        <ul className="text-base space-y-1">
          <li><strong>Nicolas Uhartt</strong> - Programador - +1 (956) 252 0989</li>
          <li><strong>Sandra Salvático</strong> - Analista de Sistemas - (+598) 99 405 666</li>
          <li><strong>Martín Ortíz</strong> - Analista de Sistemas - (+598) 99 715 428</li>
          <li><strong>Ángeles Roselli</strong> - Encargada Informática CAMOC - (+598) 99 208 848</li>
          <li><strong>QC Analyst</strong> - (+598) 98 077 772</li>
          <li><strong>Rafael Mourglia</strong> - Analista Programador - (+598) 95 161 091</li>
          <li><strong>Diego de los Santos</strong> - Ciberseguridad</li>
        </ul>
      </section>
    </main>
  );
}
