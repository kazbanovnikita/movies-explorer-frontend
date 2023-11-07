import Form from "../Form/Form";
import "./Login.css";
import { useFormValidate } from "../../utils/hooks/useFormValidate";
import { validateEmail } from "../../utils/constants";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid } = useFormValidate();

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <main className="login">
      <Form
        congrats={"Рады видеть!"}
        buttonText={"Войти"}
        onSubmit={handleSubmit}
        isValid={isValid && validateEmail(values.email).message === ""}
      >
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email ?? ""}
          required
        />
        <span className="login__error">
          {" "}
          {errors.email || validateEmail(values.email).message}
        </span>
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength={6}
          maxLength={30}
          required
          onChange={handleChange}
          value={values.password ?? ""}
        />
        <span className="login__error">{errors.password}</span>
      </Form>
    </main>
  );
}

export default Login;
