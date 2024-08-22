import { useParams } from "react-router-dom";
import { galleryImages } from "../helpers/imagesList";

const ImagePage = () => {
  const { id } = useParams();
  const images = galleryImages[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <img src={images.img} alt="" className="project-details__cover" />
        </div>
      </div>
    </main>
  );
};

export default ImagePage;
