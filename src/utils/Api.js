class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUser() {
    return fetch('/users/me', {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus);
  }

  getCards() {
    return fetch('/cards', {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus);
  }

  editProfile(data) {
    return fetch('/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      credentials: this._options.credentials,
      body: JSON.stringify(data)
    })
    .then(this._checkResponseStatus);
  }

  addNewCard(data) {
    return fetch('/cards', {
      method: 'POST',
      headers: this._options.headers,
      credentials: this._options.credentials,
      body: JSON.stringify(data)
    })
    .then(this._checkResponseStatus);
  }

  deleteCard(cardID) {
    return fetch(`/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus);
  }

  toggleLike(cardID, isLiked) {
    if (!isLiked) {
      return fetch(`/cards/${cardID}/likes`, {
        method: 'PUT',
        headers: this._options.headers,
        credentials: this._options.credentials,
      })
      .then(this._checkResponseStatus);
    } else {
      return fetch(`${this._options.baseUrl}/cards/${cardID}/likes`, {
        method: 'DELETE',
        headers: this._options.headers,
        credentials: this._options.credentials,
      })
      .then(this._checkResponseStatus);
    } 
  }

  changeAvatar(data) {
    return fetch('/users/me/avatar', {
      method: 'PATCH',
      headers: this._options.headers,
      credentials: this._options.credentials,
      body: JSON.stringify({ avatar: data.link })
    })
    .then(this._checkResponseStatus);
  }

}

const api = new Api({
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default api;

