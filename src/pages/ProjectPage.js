import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "../img/projects/01-big.jpg";

const ProjectPage = ({ link, imgBig, skills, title }) => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link={link} />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
