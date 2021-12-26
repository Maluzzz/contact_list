import { useEffect, useState } from 'react'


import { setContact } from '../helpers/api/setContact'
import getList from '../helpers/api/getList'
import { rmContact } from '../helpers/api/rmContact'
import { modifyContact } from '../helpers/api/modifyContact'
import { contact } from '../types'


export const useContacts = () => {
  // TO.DO: handle and return all errorMessage
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getList().then(( res ) => setContacts(res))
  }, [])

  const addContact = ({ email, name, surname, phone }: contact) => {
    setContact({ email, name, surname, phone })
      .then((res) => setContacts(res))
      .catch((err) => console.error(err))
  }
  const removeContact = ( email:string ) => {
    // TO.DO HANDLE ERRORS
    rmContact(email).then(() => {
      // TO.DO LOOK FOR OTHER WAY TO DO THIS
      window.location.reload()
    })
  }

  const editContact = ({ email, name, surname, phone }: contact) => {
    modifyContact({email, name, surname, phone})
      .then((res) => setContacts(res))
      .catch((err) => console.error(err))
  }

  return { contacts, addContact, removeContact, editContact }
}
