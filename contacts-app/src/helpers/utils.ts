import { contact } from '../types'

export const searchContacts = (filterString:string, contacts:contact[]) =>
  contacts.filter((contact) => {
    const data =
      contact.name +
      ' ' +
      contact.surname +
      ' ' +
      contact.email +
      ' ' +
      contact.phone
    return data.toLowerCase().includes(filterString.toLowerCase())
  })
