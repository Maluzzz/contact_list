import React from 'react'

import ContactInfo from './ContactInfo'

export default function ContactList({contacts, removeContact,selectContact,currentContact,editContact, setEditVisibility}) {
    return (
        <>
            {contacts.length === 0 && 'Ups, No contacts'}        
            {contacts.map(contact => {return (<ContactInfo key={contact.email} {...contact} 
            selectContact={selectContact}
            removeContact={removeContact}   
            setEditVisibility={setEditVisibility} 
            />)})}
        </>
    )
}
