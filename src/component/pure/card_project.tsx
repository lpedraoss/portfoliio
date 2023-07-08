import  { useRef } from 'react';
import projects from '../../data/project.json';
import Project from '../../interface/project_interface';

function CardProjects() {
  const projectList = projects as Project[];
  const cintaRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cintaRef.current) {
      cintaRef.current.scrollBy({
        top: 0,
        left: -300, // Ancho de la tarjeta + margen derecho
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cintaRef.current) {
      cintaRef.current.scrollBy({
        top: 0,
        left: 300, // Ancho de la tarjeta + margen derecho
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="cinta-horizontal" ref={cintaRef}>
      {projectList.map((project: Project, index: number) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <article className="card">
            {/* Resto del contenido de la tarjeta... */}
          </article>
        </a>
      ))}
      <button onClick={scrollLeft}>←</button>
      <button onClick={scrollRight}>→</button>
    </div>
  );
}

export default CardProjects;
