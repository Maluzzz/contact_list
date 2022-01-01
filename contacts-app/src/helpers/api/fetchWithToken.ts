import { contact } from '../../types'

const baseUrl = process.env.REACT_APP_API_URL

export const fetchApiWithToken = async(endpoint: string, method: string, token: string, body?: contact) => {
  const url = baseUrl + endpoint
  let options:any = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-token': token
    }
  }

  if (body) {
    options = {
      ...options,
      body: JSON.stringify({
        name: body.name,
        surname: body.surname,
        email: body.email,
        phone: body.phone
      })
    }
  }

  const response = await fetch(url, options)
  const res = await response.json()
  // TO.DO: handle este error en useContact
  if (res.error) {
    return res
  }
  return res
}

export default fetchApiWithToken
