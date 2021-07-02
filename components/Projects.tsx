const Projects = () => {
  const mockProjects = [
    { title: "Sed ut perspiciatis", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." },
    { title: "Sed ut perspiciatis", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." },
    { title: "Sed ut perspiciatis", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." },
    { title: "Sed ut perspiciatis", body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." },
  ]

  return (
    <>
    <div id="projects" className="container px-5">
      <div className="row mb-5">
        <p className="h2">Veja meus projetos mais recentes</p>
      </div>
      <div className="row">
          { mockProjects.map((project) => (
              <div className="col-12 col-md-6 mb-5">
                <p className="h5 mb-3">{project.title}</p>
                <p>{project.body}</p>
                <a className="btn btn-outline-primary" href="#">Saiba mais</a>
              </div>
          )) }
        </div>
    </div>
    </>
  )
}

export default Projects
