import React from "react"
import {searchContacts} from "../helpers/searchContacts"

export default function SearchBar({contacts, setFilter}) {
  const handleChange = (e) => {
    const {value} = e.target
    setFilter(searchContacts(value, contacts))
  }
  return (
    <div>
      <input
        className="input is-primary"
        type="text"
        placeholder="Filter Contacts"
        onChange={handleChange}
      ></input>
    </div>
  )
}
