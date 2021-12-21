import React from 'react'

export default function ContactInfo({name,surname,email,phone}) {
    return (
        <div>
            <hr/>
            <div> Name: {name}</div>
            <div> Surname: {surname}</div>
            <div> Email: {email}</div>
            <div> phone: {phone}</div>
            <hr/>
        </div>
    )
}
