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

export const getCategories = () => {
  return fetch(`${process.env.API_DEVELOPMENT}categories`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const singleCategory = (slug) => {
  return fetch(`${process.env.API_DEVELOPMENT}category/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const removeCategory = (slug, token) => {
  return fetch(`${process.env.API_DEVELOPMENT}category/${slug}`, {
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
