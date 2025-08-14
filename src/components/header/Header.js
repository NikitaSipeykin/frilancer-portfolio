import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nick</em>
          </strong>
          <br />a Java developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="/Java Developer - Nikita Sipeikin.pdf"
          download="Nikita_Sipeikin_CV.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
