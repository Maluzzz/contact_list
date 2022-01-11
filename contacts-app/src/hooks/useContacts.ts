import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import fetchApiWithToken from '../helpers/api/fetchWithToken'

import { UserContext } from '../helpers/userContext'
import { contact } from '../types'

export const useContacts = () => {
  const [{ contacts, isLoading, result }, setContacts] = useState({
    contacts: [],
    isLoading: false,
    result: { error: '', success: '' }
  })

  const location = useLocation()
  const { state } = useContext(UserContext)

  useEffect(() => {
    async function getContacts() {
      setContacts(s => ({ ...s, isLoading: true, contacts: [] }))
      const response = await fetchApiWithToken('/contacts', 'GET', state.token)
      setContacts(s => ({ ...s, isLoading: false, contacts: response.error ? [] : response }))
    }
    if (location.pathname === '/') {
      getContacts()
    }
  }, [location.pathname]) // TO.DO: REVIEW THIS?

  const postContact = (contact: contact) => {
    setContacts(s => { return { ...s, isLoading: true, contacts: [] } })
    fetchApiWithToken('/contacts', 'POST', state.token, contact).then((res) => {
      return setContacts(s => { return { ...s, result: res, isLoading: false } })
    })
  }

  const removeContact = (id: number) => {
    const endpoint = `/contacts/${id}`
    fetchApiWithToken(endpoint, 'DELETE', state.token).then(() => {
      const contactsFiltered = contacts.filter((contact: contact) => parseInt(contact.id) !== id)
      setContacts(s => { return { ...s, isLoading: false, contacts: contactsFiltered } })
    }
    )
  }
  return { contacts, isLoading, result, removeContact, postContact }
}

export default useContacts
