import Image from "../components/image/Image";

import { galleryImages } from "../helpers/imagesList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Gallery</h2>
        <ul className="projects">
          {galleryImages.map((e, i) => {
            return <Image key={i} img={e.img} index={i} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
