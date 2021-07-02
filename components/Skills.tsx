const Skills = () => {
  const mockSkills = [
    { name: "React.js", iconPath: "https://simpleicons.org/icons/react.svg" },
    { name: "Next.js", iconPath: "https://simpleicons.org/icons/nextdotjs.svg" },
    { name: "Python", iconPath: "https://simpleicons.org/icons/python.svg" },
    { name: "Git", iconPath: "https://simpleicons.org/icons/git.svg" },
    { name: "C++", iconPath: "https://simpleicons.org/icons/cplusplus.svg" },
    { name: "CMake", iconPath: "https://simpleicons.org/icons/cmake.svg" },
    { name: "OpenGL", iconPath: "https://simpleicons.org/icons/opengl.svg" },
    { name: "Django", iconPath: "https://simpleicons.org/icons/django.svg" },
    { name: "TypeScript", iconPath: "https://simpleicons.org/icons/typescript.svg" },
    { name: "MySQL", iconPath: "https://simpleicons.org/icons/mysql.svg" },
    { name: "GoogleTest", iconPath: "https://simpleicons.org/icons/google.svg" },
    { name: "Flask", iconPath: "https://simpleicons.org/icons/flask.svg" },
    // { name: "", iconPath: "" },
  ]

  return (
    <>
    <div id="skills" className="container px-5">
      <div className="row mb-5">
        <p className="h2">Habilidades que tenho a oferecer</p>
      </div>
      <div className="row">
        { mockSkills.map((skill) => (
          <div className="col-3 mb-4 text-center">
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
