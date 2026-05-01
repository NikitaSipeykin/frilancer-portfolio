import linkedIn from "../img/icons/linkedIn.svg";
import gitHub from "../img/icons/gitHub.svg";
import telegram from "../img/icons/twitter.svg";
import instagram from "../img/icons/instagram.svg";
import "../styles/contacts.css";

const socials = [
  {
    name: "LinkedIn",
    handle: "nikita-sipeikin",
    href: "https://www.linkedin.com/in/nikita-sipeikin/",
    icon: linkedIn,
  },
  {
    name: "Telegram",
    handle: "@niksipeikin",
    href: "https://t.me/niksipeikin",
    icon: telegram,
  },
  {
    name: "Instagram",
    handle: "@nikita.vitalevich",
    href: "https://www.instagram.com/nikita.vitalevich",
    icon: instagram,
  },
  {
    name: "GitHub",
    handle: "NikitaSipeykin",
    href: "https://github.com/NikitaSipeykin",
    icon: gitHub,
  },
];

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Bali, Indonesia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone</h2>
            <p>
              <a href="tel:+79175010858">+7 (917) 501-08-58</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:niksipeikin@gmail.com">niksipeikin@gmail.com</a>
            </p>
          </li>
        </ul>

        <h2 className="contacts-socials__title">Find me online</h2>
        <ul className="contacts-socials">
          {socials.map((s) => (
            <li key={s.name} className="contacts-socials__item">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="contacts-socials__link"
              >
                <span className="contacts-socials__icon">
                  <img src={s.icon} alt="" />
                </span>
                <span className="contacts-socials__meta">
                  <span className="contacts-socials__name">{s.name}</span>
                  <span className="contacts-socials__handle">{s.handle}</span>
                </span>
                <span className="contacts-socials__arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
