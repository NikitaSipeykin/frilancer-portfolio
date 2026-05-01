import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <video
        className="header__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="header__overlay" aria-hidden="true"></div>
      <div className="header__wrapper">
        <span className="header__badge">
          <span className="header__badge-dot"></span>
          Available for new projects
        </span>
        <h1 className="header__title">
          <strong>
            Hi, I'm <em>Nick</em>
          </strong>
          a Java developer
        </h1>
        <div className="header__text">
          <p>Crafting reliable backends and clean interfaces — with a passion for learning and creating.</p>
        </div>
        <div className="header__actions">
          <a
            href="/Nikita Sipeikin - Java dev.pdf"
            download="Nikita_Sipeikin_CV.pdf"
            className="btn"
          >
            Download CV
          </a>
          <NavLink to="/projects" className="btn-outline">
            View projects
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
