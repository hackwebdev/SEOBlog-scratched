import fetch from 'isomorphic-fetch'

export const create = (category, token) => {
  return fetch(`${process.env.API_DEVELOPMENT}category`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
