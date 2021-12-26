import React from 'react'
import { useState } from 'react'

import Form from '../components/contact/Form'
import { useContacts } from '../hooks/useContacts'

const AddContact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  })
  const { addContact } = useContacts()

  const handleSubmit = (e: any) => { 
    e.preventDefault()
    addContact(contactInfo)
  }

  const handleChange = (e: React.ChangeEvent<{ value: string, name: string }>) => {
    const { name, value } = e.target
    setContactInfo({ ...contactInfo, [name]: value })
  }

  return (
    <div className='column is-full'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='title'>New contact</div>
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

export default AddContact
