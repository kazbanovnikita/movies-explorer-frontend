import "./Register.css";
import Form from "../Form/Form";

function Register() {
  return (
    <main className="register">
      <Form
        congrats={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        reg
      >
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          required
        />
        <span className="register__error"></span>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <span className="register__error"></span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          required
        />
        <span className="register__error"></span>
      </Form>
    </main>
  );
}

export default Register;
