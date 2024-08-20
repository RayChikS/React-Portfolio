import "./Footer.css";

import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/sn0w_witch/"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RayChikS"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ivan-tropanets/"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Ivan Tropanets</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
