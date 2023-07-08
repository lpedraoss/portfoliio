import React, { useState, useEffect } from 'react';

import goBuyImage from '../../assets/img/png/go-buy.png';
import medicalImage from '../../assets/img/png/medical.png';
import hackatonImage from '../../assets/img/png/hackaton.png';
import springImage from '../../assets/img/png/spring.png';
import dartImage from '../../assets/img/png/dart.png';

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
      case 'go-buy.png':
        return goBuyImage;
      case 'medical.png':
        return medicalImage;
      case 'hackaton.png':
        return hackatonImage;
      case 'spring.png':
        return springImage;
      case 'dart.png':
        return dartImage;
    
    }
  };

  return (
    <section className='card-container'>
      {projectList.map((project, index) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <article className='card'>
            <picture>
              <img src={getImageByProject(project)} alt={project.nombre} />
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
