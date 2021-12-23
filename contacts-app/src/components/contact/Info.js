import React from 'react'

import { useContacts } from '../../hooks/useContacts'

export default function ContactInfo({
  name,
  surname,
  email,
  phone
}) {
  const { removeContact } = useContacts()

  return (
    <div className='box '>
      <p className='title'>{name + ' ' + surname}</p>
      <div>
        <span>✉️</span> {email}
      </div>
      <div>
        <span>📞</span> {phone}
      </div>
      <button
        className='button is-small is-danger'
        onClick={() => removeContact(email)}
      >
        Remove
      </button>
      <a href={'/edit-contact?email=' + email}
        className='button is-small is-primary'
      >
        Edit
      </a>
    </div>
  )
}
