import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">What I do</h2>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                Java, Spring Boot, Hibernate, Spring Cloud, PostgreSQL, MySQL,
                MongoDB
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, HTML, CSS, NPM,
                Bootstrap, Styled Components
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Tooling</h2>
              <p>
                Git, Docker, Maven, Gradle, REST, GraphQL, CI/CD, Linux
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
