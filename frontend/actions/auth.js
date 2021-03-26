import fetch from 'isomorphic-fetch'

export const signup = (user) => {
  return fetch(`${process.env.API_DEVELOPMENT}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const signin = (user) => {
  return fetch(`${process.env.API_DEVELOPMENT}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
