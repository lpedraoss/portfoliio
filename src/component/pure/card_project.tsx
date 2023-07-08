import { useState, useEffect } from 'react';



import projectsData from '../../data/project.json';
import Project from '../../interface/project_interface';


function CardProjects() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = () => {
      setProjectList(projectsData);
    };

    loadProjects();
  }, []);

  const getImageByProject = (project: Project) => {
    switch (project.imagen) {
      case 'go-buy':
        return 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ce56.appspot.com/o/projects%2Fgo-buy.png?alt=media&token=69d58e37-6b76-464a-9042-d838581f7a6b';
      case 'medical':
        return 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ce56.appspot.com/o/projects%2Fmedical.png?alt=media&token=7da1e430-886e-4fcd-921f-5d0e4ccf319a';
      case 'hackaton':
        return 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ce56.appspot.com/o/projects%2Fhackaton.png?alt=media&token=bf98d55c-0f31-4ac4-9b82-0e72d7a59a25';
      case 'spring':
        return 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ce56.appspot.com/o/projects%2Fspring.png?alt=media&token=367d15df-bc31-4e59-a909-2adf7ac291fb';
      case 'dart':
        return 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ce56.appspot.com/o/projects%2Fdart.png?alt=media&token=e8bb717d-ade9-4919-b8ba-2b45592d3ea0';

    }
  };

  return (
    <section className='card-container'>
      {projectList.map((project, index) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <div>
            <span>{project.nombre}</span>
          </div>
          <article className='card'>
            <picture>
              <img src={getImageByProject(project)} alt={project.nombre} />
            </picture>

          </article>
        </a>
      ))}
    </section>
  );
}

export default CardProjects;
