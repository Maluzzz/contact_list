import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { SearchBar, ContactList } from '../components/contact'
import { LogOut } from '../components/user/LogOut'
import { searchContacts } from '../helpers/utils'
import { useContacts } from '../hooks'

export const Home = () => {
  const { contacts, removeContact, isLoading } = useContacts()

  const [contactsFilter, setContactsFilter] = useState('')
  const filteredContacts = useMemo(
    () => searchContacts(contactsFilter, contacts),
    [contacts, contactsFilter]
  )

  return (
    <>
      <div className='column is-full'>
        <LogOut />
        <div className='title is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap'>
          World Agenda 🌍️
          <Link className='button is-primary is-small' to='/add-contact'>
            Add Contact
          </Link>
        </div>
        <SearchBar onChange={setContactsFilter} />
        <br />
        {isLoading
          ? <progress className="progress is-small is-primary" max="100" />
          : <ContactList contacts={filteredContacts} removeContact={removeContact} />}
      </div>
    </>
  )
}

export default Home
