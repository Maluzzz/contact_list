import React, {useState} from "react"
import AddContactForm from "./components/AddContactForm"
import ContactList from "./components/ContactList"

import SearchBar from "./components/SearchBar"

import {useContacts} from "./hooks/useContacts"

export default function ContactApp() {
  const [contacts, addContact, removeContact, error] = useContacts()
  const [contactsFilter, setFilter] = useState(null)

  return (
    <div>
      {error && <div class="notification is-danger">
        <button class="delete"></button>
            {error}
      </div>}
      <div className="columns">
        <div className="column is-half">
          <SearchBar contacts={contacts} setFilter={setFilter}></SearchBar>
          <ContactList
            contacts={contactsFilter ? contactsFilter : contacts}
            removeContact={removeContact}
          />
        </div>
        <div className="column is-half">
          <AddContactForm addContact={addContact} />
        </div>
      </div>
    </div>
  )
}
