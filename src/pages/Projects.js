import Project from "../components/project/Project";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((e, i) => {
            return <Project key={i} title={e.title} img={e.img} index={i} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
