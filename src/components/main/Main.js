import "./style.css";

function Main(){
  return(
    <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                Java, Spring boot, Hibernate, Spring Cloud, PostgreSQL, MySQL,
                MongoDB
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, Angular, HTML, CSS, NPM, BootStrap,
                StyledComponents
              </p>
            </li>
          </ul>
        </div>
      </main>
  )
}

export default Main;