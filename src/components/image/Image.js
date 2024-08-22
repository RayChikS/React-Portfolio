import "./Image.css";
import { NavLink } from "react-router-dom";

const Image = ({ img, index }) => {
  return (
    <NavLink to={`/gallery/${index}`}>
      <li className="image">
        <img src={img} alt="" className="image__img" />
      </li>
    </NavLink>
  );
};

export default Image;
