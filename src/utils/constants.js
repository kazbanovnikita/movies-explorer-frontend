export function getFilteredMovies(arrayMovies, value) {
    if (value === ""){
        return []
    }
    return Array.from(arrayMovies).filter((item) => {
      return (
        item.nameRU.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
        item.nameEN.toLowerCase().trim().includes(value.toLowerCase().trim())
      );
    });
  }

  export function filterShortMovies(movies) {
    return movies.filter((film) => {
      return film.duration <= 40;
    });
  }

  export const regexEmail = RegExp(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/)

  export const validateName = (name) => {
    if (name === undefined) {
      return { message: '', invalid: true }
    }
  
    if (!/^[a-zA-Zа-яА-Я\sё-]+$/.test(name)) {
      return { message: 'Поле name может содержать только латиницу, кириллицу, пробел или дефис.', invalid: true }
    }
  
    return { message: '', invalid: false }
  }

  export const validateEmail = (email) => {
    if (email === undefined) {
      return { message: '', invalid: true }
    }
  
    if (!regexEmail.test(email)) {
      return { message: 'Поле email не соответствует шаблону электронной почты', invalid: true }
    }
  
    return { message: '', invalid: false }
  }