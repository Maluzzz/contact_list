
const url = process.env.REACT_APP_API_URL

export const refreshToken = async(token: string) => {
  const endpoint = url + '/auth/refresh-token'

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-token': token
    }

  })
  const res = await response.json()
  return res
}

export default refreshToken
