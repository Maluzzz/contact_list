import { RM_URL } from './endpoints'

export const rmContact = async (email) => {
  const url = RM_URL
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  })

  const list = await response.json()

  return list
}
