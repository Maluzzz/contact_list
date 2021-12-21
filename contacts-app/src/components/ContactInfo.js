import React from "react"

export default function ContactInfo({name, surname, email, phone}) {
  return (
    <div className="box ">
      <p className="title">{name + " " + surname}</p>
      <div>
        <span>✉️</span> {email}
      </div>
      <div>
        <span>📞</span> {phone}
      </div>
   
    </div>
  )
}
