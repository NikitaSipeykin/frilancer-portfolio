import "./style.css";
import { NavLink } from "react-router-dom";

const Project = ({ title, description, img, index }) => {
  return (
    <NavLink to={`/project/${index}`} className="project-link">
      <li className="project">
        <div className="project__img-wrap">
          <img src={img} alt={title} className="project__img" />
        </div>
        <div className="project__body">
          <h3 className="project__title">{title}</h3>
          {description && <p className="project__desc">{description}</p>}
          <span className="project__cta">
            View project <span className="project__cta-arrow">↗</span>
          </span>
        </div>
      </li>
    </NavLink>
  );
};

export default Project;
