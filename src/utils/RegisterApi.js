class RegisterApi {
  constructor(options) {
    this._options = options;
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  register(data) {
    return fetch('/signup', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponseStatus)
  }

  authorize(data) {
    return fetch('/signin', {
      method: 'POST',
      headers: this._options.headers,
      credentials: this._options.credentials,
      body: JSON.stringify(data)
    })
    .then(this._checkResponseStatus)
  }

  getContent() {
    return fetch('/users/me', {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus)
  }

}

const registerApi = new RegisterApi({
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default registerApi;