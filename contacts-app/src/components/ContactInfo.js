import React from "react"

export default function ContactInfo({
  name,
  surname,
  email,
  phone,
  removeContact,
  selectContact,
  setEditVisibility,
}) {
  return (
    <div className="box ">
      <p className="title">{name + " " + surname}</p>
      <div>
        <span>✉️</span> {email}
      </div>
      <div>
        <span>📞</span> {phone}
      </div>
      <button
        className="button is-small is-danger"
        onClick={() => removeContact(email)}
      >
        Remove
      </button>
      <button
        className="button is-small is-primary"
        onClick={() => {
          selectContact(email)
          setEditVisibility(true)
        }}
      >
        Edit
      </button>
    </div>
  )
}
