import React, {useState} from "react"
import AddContactForm from "./components/AddContactForm"
import ContactList from "./components/ContactList"
import EditContactForm from "./components/EditContactForm"
import ErrorBox from "./components/ErrorBox"

import SearchBar from "./components/SearchBar"

import {useContacts} from "./hooks/useContacts"
import {useSelectContact} from "./hooks/useSelectContact"

export  function ContactApp() {
  const [{contacts, error}, addContact, removeContact, editContact] =
    useContacts()
  const [contactsFilter, setFilter] = useState(null)
  const [contact, selectContact] = useSelectContact(contacts)
  const [visibleFormContact, setVisibleFormContact] = useState(false)
  const [visibleEdit, setEditVisibility] = useState(false)

  return (
    <div style={{maxWidth: "500px"}}>
      <div className="column is-four-fifths ">
        <div className="title ">My agenda</div>
      </div>
      <ErrorBox error={error} />

      <div className="columns  ">
        {visibleFormContact || visibleEdit ? null : (
          <div className="column is-full  ">
            <button
              className="button is-primary is-small"
              onClick={() =>  setVisibleFormContact(true)}>
              Add Contact
            </button>
            <SearchBar contacts={contacts} setFilter={setFilter}></SearchBar>
            <ContactList
              contacts={contactsFilter ? contactsFilter : contacts}
              removeContact={removeContact}
              selectContact={selectContact}
              setEditVisibility={setEditVisibility}
            />
          </div>
        )}
        
        {visibleFormContact && (
          <AddContactForm
            addContact={addContact}
            visibleFormContact={visibleFormContact}
            setVisibleFormContact={setVisibleFormContact}
          />
        )}

        {visibleEdit ? (
          <EditContactForm
            {...contact}
            editContact={editContact}
            visibleEdit={visibleEdit}
            setEditVisibility={setEditVisibility}
          />
        ) : null}
      </div>
    </div>
  )
}
export default ContactApp