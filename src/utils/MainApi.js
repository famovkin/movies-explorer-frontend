class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);
  }

  getCurrentUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
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
