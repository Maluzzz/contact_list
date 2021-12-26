import { RM_URL } from './endpoints'

export const rmContact = async (email:string) => {
  const url = RM_URL
  const response = await fetch(url, {
    method: 'DELETE',
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
