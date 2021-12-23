import React from "react"

import ContactInfo from "./Info"

export default function ContactList({contacts}) {
  return (
    <>
      {contacts.length === 0 && "Ups, No contacts"}
      {contacts.map((contact) => {
        return <ContactInfo key={contact.email} {...contact} />
      })}
    </>
  )
}
