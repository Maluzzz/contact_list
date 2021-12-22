import React from 'react'

import ContactInfo from './ContactInfo'

export default function ContactList({contacts, removeContact}) {
    return (
        <>
            {contacts.length === 0 && 'Ups, No contacts'}        
            {contacts.map(contact => {return (<ContactInfo key={contact.email} {...contact} removeContact={removeContact}/>)})}
        </>
    )
}
