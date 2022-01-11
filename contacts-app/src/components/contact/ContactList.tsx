import React from 'react'

import { contact } from '../../types'
import ContactInfo from './Info'

export const ContactList = ({ contacts, removeContact }: { contacts: contact[], removeContact: (id: number) => void }) => {
  return (
    <>
      {contacts.length === 0 && 'Ups, No contacts'}
      {contacts.map((contact) => {
        return <ContactInfo
          key={contact.email}
          contact={contact}
          removeContact={removeContact} />
      })}
    </>
  )
}
export default ContactList
