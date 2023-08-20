import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__info-wrapper">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            minLength={2}
            maxLength={40}
            placeholder="Имя"
            required
          />
        </div>
        <div className="profile__info-wrapper">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="email"
            name="name"
            placeholder="email"
            required
          />
        </div>
        <button className="profile__edit">Редактировать</button>
        <Link className="profile__logout" to="/">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
