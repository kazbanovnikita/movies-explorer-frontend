import "./Profile.css";
import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import  CurrentUserContex  from "../../contexts/CurrentUserContex";
import { useContext } from "react";
import {validateName, validateEmail} from "../../utils/constants"
import {useFormValidate} from "../../utils/hooks/useFormValidate"

function Profile({ onSignOut,  onUpdateUser }) {
  const currentUser = useContext(CurrentUserContex);

  const { values, handleChange, errors, isValid, setValues } =
    useFormValidate();

  
  // const [isValid, setIsValid] = useState(false);
  const [edit, setStateEdit] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);


  

  function handleEdit(event) {
    event.preventDefault();
    setStateEdit(!edit);
    setIsEditSuccess(false);
    console.log(isValid)
  }

  function handleUpdate(event) {
    event.preventDefault();
    onUpdateUser(values);
    setStateEdit(false);
    setIsEditSuccess(true);
  }



 useEffect(() => {
  if (currentUser) {
    setValues(currentUser);
  }
}, [currentUser, setValues]);
 


  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${values.name}!`}</h1>
      <form className="profile__form" onSubmit={handleUpdate}>
        <div className="profile__info-wrapper">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            minLength={2}
            maxLength={40}
            placeholder="Имя"
            value={values.name || ""}
            onChange={handleChange}
            disabled={!edit}
            required
          />
        </div>
        <span className="profile__error">{errors.name || validateName(values.name).message}</span>
        <div className="profile__info-wrapper">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="email"
            name="email"
            placeholder="email"
            value={values.email || ""}
            onChange={handleChange}
            disabled={!edit}
            required
          />
        </div>
        <span className="profile__error">{errors.email || validateEmail(values.email).message}</span>
        {isEditSuccess ? (
          <p className="profile__notice-success">Профиль успешно обновлен!</p>
        ) : (
          ""
        )}
        <div className="profile__button">
          {!edit ? (
            <button className="profile__button-edit" onClick={handleEdit}>
              Редактировать
            </button>
          ) : (
            <button
              className="profile__button-save"
              onSubmit={handleUpdate}
              disabled={
                (currentUser.name === values.name &&
                currentUser.email === values.email) || !isValid
              }
            >
              Сохранить
            </button>
          )}
        </div>
        {!edit ? (
          <Link className="profile__logout" to="/" onClick={onSignOut}>
            Выйти из аккаунта
          </Link>
        ) : (
          ""
        )}
      </form>
    </main>
  );
}

export default Profile;
