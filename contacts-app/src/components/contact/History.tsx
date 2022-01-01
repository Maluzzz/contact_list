import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecords } from '../../hooks'
import { history } from '../../types'

export const History = () => {
  const location = useLocation()
  const id = parseInt(location.pathname.split('/history/')[1])
  const navigate = useNavigate()

  const { history } = useRecords(id)
  return (
    <div className='content'>
      <div className='is-flex'>
        <button onClick={() => navigate(-1)}
          className='button is-small is-primary'
        >
          Go Back
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Contact Info</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((contact: history, id) => (
            <tr key={contact.email + id}>
              <td> {contact.name}
                <br />
                {contact.surname}
                <br />
                {contact.email}
                <br />
                {contact.phone}
              </td>
              <td>{contact.updatedAt}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}
