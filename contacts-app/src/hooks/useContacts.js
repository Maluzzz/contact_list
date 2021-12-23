import { useEffect, useState } from 'react'


import { setContact } from '../helpers/api/setContact'
import getList from '../helpers/api/getList'
import { rmContact } from '../helpers/api/rmContact'
import { modifyContact } from '../helpers/api/modifyContact'

export const useContacts = () => {
  // TO.DO: handle and return all errorMessage
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getList().then((res) => setContacts(res))
  }, [])

  const addContact = ({ email, name, surname, phone }) => {
    setContact(email, name, surname, phone)
      .then((res) => setContacts(res))
      .catch((err) => console.err(err))
  }
  const removeContact = (email) => {
    // TO.DO HANDLE ERRORS
    rmContact(email).then(() => {
      //TO.DO LOOK FOR OTHER WAY TO DO THIS
      window.location.reload()
    })
  }

  const editContact = ({ email, name, surname, phone }) => {
    modifyContact(email, name, surname, phone)
      .then((res) => setContacts(res))
      .catch((err) => console.err(err))
  }

  return { contacts, addContact, removeContact, editContact }
}
