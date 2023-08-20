import Form from "../Form/Form";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <Form congrats={"Рады видеть!"} buttonText={"Войти"}>
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <span className="login__error"></span>
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="login__error"></span>
      </Form>
    </main>
  );
}

export default Login;
