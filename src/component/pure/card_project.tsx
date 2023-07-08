
import UseDataProduct from './card/use_project_data';
import Project from '../../interface/project_interface';

function CardProjects() {
  const { project } = UseDataProduct();

  return (
    <section className='card-container'>
      {project.map((projectItem: Project, index: number) => (
        <a key={index} href={projectItem.url} target="_blank" rel="noopener noreferrer">
          <article className="card">
            <picture>
              <img src={projectItem.imagen} alt={projectItem.nombre} />
            </picture>
            <div>
              <span>{projectItem.nombre}</span>
            </div>
          </article>
        </a>
      ))}
    </section>
  );
}

export default CardProjects;
