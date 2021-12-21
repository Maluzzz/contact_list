import React, { useEffect,useState } from 'react'
import getList from '../helpers/getList'
import ContactInfo from './ContactInfo'

export default function ContactList() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        getList().then((contactsList) => setContacts(contactsList))
      }, [])

    return (
        <div>
            {contacts.map(contact => {return (<ContactInfo {...contact}/>)})}
        </div>
    )
}
