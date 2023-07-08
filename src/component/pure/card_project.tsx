
import projects from '../../data/project.json';
import Project from '../../interface/project_interface';


function CardProjects() {
    const projectList = projects as Project[];

  
    return (
      <section
        className='card-container'
      >
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