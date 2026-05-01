import "./style.css";
import { NavLink } from "react-router-dom";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`} className="project-link">
      <li className="project">
        <div className="project__img-wrap">
          <img src={img} alt={title} className="project__img" />
        </div>
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
