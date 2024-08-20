import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const active = "nav-list__link nav-list__link--active";
  const normal = "nav-list__link";

  const check = ({ isActive }) => (isActive ? active : normal);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={check}>
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/projects" className={check}>
                Projects
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/gallery" className={check}>
                Gallery
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={check}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
