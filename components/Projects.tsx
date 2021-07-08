import projects from '../content/projects.json'

const Projects = () => {
  const lastProjects = projects.slice(0, 4)

  return (
    <>
    <div id="projects" className="container px-5">
      <div className="row mb-5">
        <p className="h2">Veja meus projetos mais recentes</p>
      </div>
      <div className="row">
          { lastProjects.map((project) => (
              <div className="col-12 col-md-6 mb-5">
                <p className="h5 mb-3">{project.title}</p>
                <p>{project.body}</p>
                { project.link && (
                  <a className="btn btn-outline-primary" href={project.link} target="_blank">
                    Saiba mais
                  </a>
                ) }
              </div>
          )) }
        </div>
    </div>
    </>
  )
}

export default Projects
