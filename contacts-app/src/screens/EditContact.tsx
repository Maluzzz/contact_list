import Form from '../components/contact/Form'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'

import { searchContacts } from '../helpers/utils'
import { useContacts } from '../hooks/useContacts'

const EditContact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    surname: '',
    email: ''
  })

  const { search } = useLocation()
  const { contacts, editContact } = useContacts()

  const email = search.split('email=')[1]
  const contact = useMemo(
    () => searchContacts(email, contacts)?.[0],
    [contacts, email]
  )

  useEffect(() => {
    if (contact?.name || contact?.phone || contact?.surname) {
      setContactInfo({
        name: contact?.name,
        phone: contact?.phone,
        surname: contact?.surname,
        email
      })
    }
  }, [email, contact])

  const handleChange = (e: React.ChangeEvent<{ value: string, name: string }>) => {
    const { name, value } = e.target
    setContactInfo({ ...contactInfo, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    editContact(contactInfo)
  }

  return (
    <div className='column is-full'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='title'>Edit Contact</div>
        <a className='delete is-small ' href='/'></a>
      </div>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        contactInfo={contactInfo}
      />
    </div>
  )
}

export default EditContact
