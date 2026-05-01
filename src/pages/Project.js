import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../helpers/ProjectsList";
import Carousel from "../components/carousel/Carousel";
import Lightbox from "../components/lightbox/Lightbox";
import "../styles/project-detail.css";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];
  const [lightboxIdx, setLightboxIdx] = useState(null);

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Project not found</h1>
        </div>
      </main>
    );
  }

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.imgBig];

  const links = project.links && project.links.length > 0
    ? project.links
    : project.gitHubLink
      ? [{ label: "GitHub", url: project.gitHubLink, type: "github" }]
      : [];

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/projects");
    }
  };

  return (
    <main className="section project-page">
      <div className="container">
        <button
          type="button"
          className="project-back"
          onClick={handleBack}
          aria-label="Go back"
        >
          <span className="project-back__arrow">←</span>
          <span className="project-back__label">Back</span>
        </button>

        <header className="project-page__header">
          <h1 className="project-page__title">{project.title}</h1>
          {project.skills && (
            <p className="project-page__skills">{project.skills}</p>
          )}
        </header>

        <div className="project-page__media">
          <Carousel
            images={images}
            alt={project.title}
            onZoom={(i) => setLightboxIdx(i)}
          />
        </div>

        {(project.longDescription || project.description) && (
          <section className="project-page__about">
            <h2 className="project-page__section-title">About</h2>
            <p className="project-page__desc">
              {project.longDescription || project.description}
            </p>
          </section>
        )}

        {links.length > 0 && (
          <section className="project-page__links">
            <h2 className="project-page__section-title">Links</h2>
            <ul className="project-links">
              {links.map((link) => (
                <li key={link.url} className="project-links__item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-links__link"
                  >
                    <span className="project-links__label">{link.label}</span>
                    <span className="project-links__arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIdx}
          alt={project.title}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </main>
  );
};

export default Project;
