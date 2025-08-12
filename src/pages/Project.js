import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
  return (
    <main class="section">
      <div class="container">
        <div class="project-details">
          <h1 class="title-1">Video service</h1>

          <img
            src="./img/projects/02-big.jpg"
            alt=""
            class="project-details__cover"
          />

          <div class="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link="https://github.com"/>

        </div>
      </div>
    </main>
  );
};

export default Project;
