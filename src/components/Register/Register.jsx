import "./Register.css";
import Form from "../Form/Form";
import { useFormValidate } from "../../utils/hooks/useFormValidate";
import { validateEmail, validateName } from "../../utils/constants";

function Register({ onRegister, setValues }) {
  const { values, handleChange, errors, isValid } = useFormValidate();

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(values);
    setValues({ email: "", password: "" });
  }

  return (
    <main className="register">
      <Form
        congrats={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        onSubmit={handleSubmit}
        isValid={isValid && validateEmail(values.email).message === ""}
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
          minLength={2}
          maxLength={40}
          onChange={handleChange}
          value={values.name ?? ""}
        />
        <span className="register__error">
          {errors.name || validateName(values.name).message}
        </span>
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
          onChange={handleChange}
          value={values.email ?? ""}
        />
        <span className="register__error">
          {errors.email || validateEmail(values.email).message}
        </span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
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
        <span className="register__error">{errors.password}</span>
      </Form>
    </main>
  );
}

export default Register;
