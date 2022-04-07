class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  getCurrentUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  editCurrentUserInfo({ name, email }, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  createMovie(movieInfo, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        ...movieInfo,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  removeMovie(movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }
}

export const mainApi = new Api({
  baseUrl: "https://api.movies-browser.nomoredomains.work/api",
  headers: {
    "Content-Type": "application/json",
  },
});
