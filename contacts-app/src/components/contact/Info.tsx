import React from 'react'
import { Link } from 'react-router-dom'

import { contact } from '../../types'

export default function ContactInfo({
  contact, removeContact
}: { contact: contact, removeContact: (id: number) => void }) {
  const { phone, email, surname, name, id } = contact
  return (
    <div className='box '>
      <p className='title'>{name + ' ' + surname}</p>
      <div>
        <span>✉️</span> {email}
      </div>
      <div>
        <span>📞</span> {phone}
      </div>
      <hr />
      <div className='is-flex is-justify-content-space-between is-align-items-center'>
        <button
          className='button is-small is-danger'
          onClick={() => removeContact(parseInt(id))}>
          Remove
        </button>
        <Link to={'/edit-contact?email=' + email}
          state={{ email, name, surname, phone, id }}
          className='button is-small is-primary'>
          Edit
        </Link>
      </div>
    </div>
  )
}
