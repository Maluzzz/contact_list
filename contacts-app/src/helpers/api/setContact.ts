import { contact } from '../../types'
import { ADD_URL } from './endpoints'

export const setContact = async ({email, name, surname, phone}: contact) => {
  const url = ADD_URL
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      phone: phone
    })
  })
  const list = await response.json()
  if (list.error) {
    // TO.DO handle more errors
    throw new Error('Contact Error User Already Exist')
  }
  return list
}
