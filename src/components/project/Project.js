import "./style.css";

import one from "./../../img/projects/01.jpg";


const Project = () => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={one} alt="Project img" className="project__img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  );
};

export default Project;
