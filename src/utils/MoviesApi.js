class Api {
    constructor(baseURL) {
      this._baseURL = baseURL;
    }
  
    // eslint-disable-next-line class-methods-use-this
    _checkResponse(response) {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error(`Ошибка: ${response.status}`));
    }
  
    getMovies() {
      return fetch(this._baseURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(this._checkResponse);
    }
    
  }
  
  const apiMovie = new Api("https://api.nomoreparties.co/beatfilm-movies");
  
  export default apiMovie;
