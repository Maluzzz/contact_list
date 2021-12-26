import React from 'react'
import { contact } from '../../types'

import ContactInfo from './Info'

const ContactList = ({ contacts }:{contacts: contact[]}) => {
  return (
    <>
      {contacts.length === 0 && 'Ups, No contacts'}
      {contacts.map((contact) => {
        return <ContactInfo key={contact.email} {...contact} />
      })}
    </>
  )
}
export default ContactList
