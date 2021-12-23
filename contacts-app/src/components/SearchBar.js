import React from "react"

export default function SearchBar({onChange}) {
  return (
    <div>
      <input
        className="input is-primary"
        type="text"
        placeholder="Filter Contacts"
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  )
}
