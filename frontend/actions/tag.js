import fetch from 'isomorphic-fetch'

export const create = (tag, token) => {
  return fetch(`${process.env.API_DEVELOPMENT}tag`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tag),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const getTags = () => {
  return fetch(`${process.env.API_DEVELOPMENT}tags`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const singleTag = (slug) => {
  return fetch(`${process.env.API_DEVELOPMENT}tag/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const removeTag = (slug, token) => {
  return fetch(`${process.env.API_DEVELOPMENT}tag/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
