import skills from '../content/skills.json'

const Skills = () => {
  return (
    <>
    <div id="skills" className="container px-5">
      <div className="row mb-5">
        <p className="h2">Habilidades que tenho a oferecer</p>
      </div>
      <div className="row">
        { skills.map((skill) => (
          <div className="col-6 col-sm-3 mb-4 text-center" key={skill.name}>
            <img className="mb-3" height={60} src={skill.iconPath} alt="" />
            <p className="fw-bold">{skill.name}</p>
          </div>
        )) }
      </div>
    </div>
    </>
  )
};

export default Skills;
