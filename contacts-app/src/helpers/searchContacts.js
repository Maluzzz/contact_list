export const searchContacts = (value, contacts) =>
  contacts.filter(
    (contact) =>
    {
        const data = contact.name + ' ' + contact.surname + ' ' + contact.email + ' ' + contact.phone
        return data.toLowerCase().includes(value.toLowerCase())
    }
      
  )
