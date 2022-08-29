class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    getData() {
      return Promise.all([this.getUserInfo(), this.getInitialCards()])
    }

    _handleError(res) {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "GET",
          headers: this._headers
        })
          .then(this._handleError)
    }

    setUserInfo(userInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
          })
        })
          .then(this._handleError)
    }

    editAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            avatar: link.avatar
          })
        })
          .then(this._handleError)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          method: "GET",
          headers: this._headers
        })
          .then(this._handleError)
    }

    addCard(card) {
        return fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name: card.name,
            link: card.link
          })
        })
          .then(this._handleError)
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
          method: "DELETE",
          headers: this._headers
        })
          .then(this._handleError)
    }

    likeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "PUT",
          headers: this._headers
        })
          .then(this._handleError)
    }

    dislikeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "DELETE",
          headers: this._headers
        })
          .then(this._handleError)
    }
};

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
    headers: {
    authorization: 'dbcecacf-b1f5-45b4-b0c5-067f006cc586',
    'Content-Type': 'application/json'
    }
  });
 
export default api;