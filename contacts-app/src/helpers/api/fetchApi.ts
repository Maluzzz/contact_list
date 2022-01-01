import { user } from '../../types'

const baseUrl = process.env.REACT_APP_API_URL

export const fetchApi = async(endpoint: string, method: string, user: user) => {
  const url = baseUrl + endpoint

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const res = await response.json()

  return res
}

export default fetchApi
