import patreon from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import buymeacoffee from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import "./style.css";

function Footer(){
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://www.patreon.com/c/NikSipeikin" target="_blank" rel="noreferrer">
                  <img src={patreon} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.instagram.com/nikita.vitalevich" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://buymeacoffee.com/nikSipeikin" target="_blank" rel="noreferrer">
                  <img src={buymeacoffee} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/NikitaSipeykin" target="_blank" rel="noreferrer">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/nikita-sipeikin/" target="_blank" rel="noreferrer">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer;