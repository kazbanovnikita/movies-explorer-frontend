import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="#about-project">
      <h2 className="about-project__description">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <dl className="about-project__table">
        <div className="about-project__stats-wrapper">
          <dt className="about-project__stats about-project__stats_first-element">
            1 неделя
          </dt>
          <dd className="about-project__stats-description">Back-end</dd>
        </div>
        <div className="about-project__stats-wrapper">
          <dt className="about-project__stats">4 недели</dt>
          <dd className="about-project__stats-description">Front-end</dd>
        </div>
      </dl>
    </section>
  );
}

export default AboutProject;
