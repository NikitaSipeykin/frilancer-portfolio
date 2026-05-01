import Header from "../components/header/Header";
import "../styles/skills.css";

const skills = [
  {
    num: "01",
    title: "Backend",
    desc: "Building reliable, scalable services and APIs.",
    items: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Spring Cloud",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    num: "02",
    title: "Frontend",
    desc: "Crafting clean, responsive interfaces.",
    items: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "Angular",
      "HTML",
      "CSS",
      "Bootstrap",
      "Styled Components",
    ],
  },
  {
    num: "03",
    title: "Tooling",
    desc: "Shipping with confidence and good ergonomics.",
    items: ["Git", "Docker", "Maven", "Gradle", "REST", "GraphQL", "CI/CD", "Linux"],
  },
  {
    num: "04",
    title: "Game Dev",
    desc: "Side projects exploring 2D engines and graphics.",
    items: ["Java 2D", "Swing", "PixiJS", "TypeScript", "Game loops", "Sprites"],
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="skills-head">
            <h2 className="title-1">What I do</h2>
            <p className="skills-sub">A snapshot of the tools and stacks I work with daily.</p>
          </div>
        </div>

        <div className="skills-carousel-wrap">
          <div className="skills-carousel">
            {skills.map((s) => (
              <article key={s.num} className="skill-card">
                <span className="skill-card__num">{s.num}</span>
                <h3 className="skill-card__title">{s.title}</h3>
                <p className="skill-card__desc">{s.desc}</p>
                <ul className="skill-card__list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
