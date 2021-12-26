import React from 'react'
import { useMemo, useState } from 'react'
import ContactList from '../components/contact/ContactList'
import SearchBar from '../components/SearchBar'
import { searchContacts } from '../helpers/utils'
import { useContacts } from '../hooks/useContacts'

const Home = () => {
  const { contacts } = useContacts()
  const [contactsFilter, setContactsFilter] = useState('')
  const filteredContacts = useMemo(
    () => searchContacts(contactsFilter, contacts),
    [contacts, contactsFilter]
  )
  return (
    <>
      <div className='column is-full'>
        <a className='button is-primary is-small' href='/add-contact'>
          Add Contact
        </a>
        <SearchBar onChange={setContactsFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  )
}

export default Home
