import React, {useEffect, useState} from "react"
import ContactList from "./components/ContactList"
import {getList} from "./helpers/getList"
import SearchBar from "./components/SearchBar"

export default function ContactApp() {
  const [contacts, setContacts] = useState([])
  const [contactsFilter, setFilter] = useState(null)
  useEffect(() => {
    getList().then((contactsList) => setContacts(contactsList))
  }, [])

  return (
    <div className="columns is-mobile is-centered">
      <div>
        <div className="columns is-mobile is-centered">
          <SearchBar contacts={contacts} setFilter={setFilter}></SearchBar>
         {/*<button class="button is-primary">Add Contact</button>*/}
        </div>
        <ContactList contacts={contactsFilter ? contactsFilter : contacts} />
      </div>
    </div>
  )
}
