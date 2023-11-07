import "./AboutMe.css";
import { Link } from "react-router-dom";
import photo from "../../../images/photo-of-student.png";

function AboutMe() {
  return (
    <section className="aboutMe" id="about-me">
      <h2 className="aboutMe__description">Студент</h2>
      <div className="aboutMe__wrapper">
        <div className="aboutMe__information">
          <h3 className="aboutMe__title">Виталий</h3>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__description-me">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="aboutMe__link"
            to="https://github.com/kazbanovnikita"
          >
            Github
          </Link>
        </div>
        <img className="aboutMe__pic" src={photo} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
