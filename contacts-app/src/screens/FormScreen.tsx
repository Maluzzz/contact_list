import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { useForm, useContacts } from '../hooks'
import { contact } from '../types'
import { MessageBox } from '../components/MessageBox'
import { LogOut } from '../components/user/LogOut'
import { Form } from '../components/contact'

export const FormScreen = () => {
  const location = useLocation()

  const isEditionMode = !!location.state
  const contactInfo = isEditionMode
    ? location.state as contact
    : {
      name: '',
      surname: '',
      email: '',
      phone: '',
      id: ''
    }

  const { formValues, handleChange, resetForm } = useForm(contactInfo)
  const { postContact, result, isLoading } = useContacts()

  useEffect(() => {
    if (!location.state && result.success) {
      resetForm()
    }
  }, [result])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const contact = formValues as contact
    postContact(contact)
  }

  return (
    <div className='column is-full'>
      <LogOut />
      <div className='is-flex is-justify-content-space-between'>
        <div className='title'>{isEditionMode ? 'Modify Contact' : 'Add Contact'}</div>
      </div>
      <br />
      {<MessageBox message={result.error ? result.error : result.success} isError={!!result.error} />}
      <Form
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        contactInfo={formValues as contact}
      />
      <br />
      {isEditionMode &&
        <Link to={'/history/' + contactInfo.id}
          className='is-flex button is-small is-primary'>
          History of changes
        </Link>}
    </div >
  )
}

export default FormScreen
