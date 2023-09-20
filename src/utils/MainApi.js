class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так... код ошибки ${res.status}`);
  }

  getUserInfo() {
    const url = this._baseUrl + `/users/me`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      credentials: 'include',
    }).then(this._checkResponse);
  }

  updateUserInfo(body) {
    const url = this._baseUrl + `/users/me`;
    return fetch(url, {
      method: "PATCH",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  getSavedMovies() { 
    const url = this._baseUrl + `/movies`;
    return fetch(url, {
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      credentials: 'include',
    }).then(this._checkResponse);
  }

  addSavedMovies(body) {
    const url = this._baseUrl + `/movies`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(this._checkResponse);
  }

  deleteMovies(movieId) {
    const url = this._baseUrl + `/movies/${movieId}`;
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`
      },
      credentials: 'include',
    }).then(this._checkResponse);
  }

}



export const api = new Api({
  baseUrl: "https://api.nik24-mesto.nomoredomains.work",
});
