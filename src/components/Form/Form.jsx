import './Form.css'
import logo from '../../images/logo.svg'
import { Link } from "react-router-dom";

function Form({congrats, children, buttonText, onSubmit, reg, log, isValid}){
    return(
        <div className='form'>
            <Link className='form__to-home-link' to="/">
            <img className='form__logo' src={logo} alt="Логотип" />
            </Link>
            <h2 className='form__title'>{congrats}</h2>
            <form className='form__pattern' autoComplete='off' onSubmit={onSubmit}>
                {children}
                <button className='form__button-submit' disabled={!isValid}>{buttonText}</button>
            </form>
            {reg && (
                <div className='form__nav-wrapper'>
                <p className='form__question'>Уже зарегистрированы?</p>
                <Link to="/signin" className='form__link'>Войти</Link>
                </div>
            )}
            {log && (
                <div className='form__nav-wrapper'>
                <p className='form__question'>Ещё не зарегистрированы?</p>
                <Link to="/signup" className='form__link'>Регистрация</Link>
                </div>
            )}
        </div>
    )
}

export default Form;