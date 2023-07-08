import { useState, useEffect } from 'react';
import projectsData from '../../data/project.json';
import Project from '../../interface/project_interface';

function CardProjects() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    // Cargar las imágenes de los proyectos
    const loadImages = async () => {
      const updatedProjects = await Promise.all(
        projectsData.map(async (project: Project) => {
          const image = await import(`${project.imagen}`); /* @vite-ignore */
          return { ...project, imagen: image.default };
        })
      );
      setProjectList(updatedProjects);
    };

    loadImages();
  }, []);

  return (
    <section className='card-container'>
      {projectList.map((project: Project, index: number) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <article className="card">
            <picture>
              <img src={project.imagen} alt={project.nombre} />
            </picture>
            <div>
              <span>{project.nombre}</span>
            </div>
          </article>
        </a>
      ))}
    </section>
  );
}

export default CardProjects;
