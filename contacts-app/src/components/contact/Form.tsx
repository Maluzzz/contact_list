import React from 'react'
import { Link } from 'react-router-dom'

import { contact } from '../../types'

export const Form = ({ handleChange, handleSubmit, contactInfo, isLoading }:
  {
    handleChange: (e: React.ChangeEvent<{ value: string, name: string }>) => void,
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    contactInfo: contact,
    isLoading: boolean
  }) => {
  return (

    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            required
            name='name'
            value={contactInfo.name}
            onChange={handleChange}
            className='input'
            type='text'
            placeholder='New Name'
          />
        </div>
        <label className='label'>Surname</label>
        <div className='control'>
          <input
            required
            name='surname'
            value={contactInfo.surname}
            onChange={handleChange}
            className='input'
            type='text'
            placeholder='Surname'
          />
        </div>
        <label className='label'>Email</label>
        <div className='control'>
          <input
            required
            name='email'
            value={contactInfo.email}
            onChange={handleChange}
            className='input'
            type='email'
            placeholder='Email'
          />
        </div>
        <label className='label'>Phone</label>
        <div className='control'>
          <input
            required
            name='phone'
            value={contactInfo.phone}
            onChange={handleChange}
            className='input'
            type='tel'
            placeholder='Mobil number'
          />
        </div>
      </div>
      <div className='buttons is-justify-content-center'>
        <button className={`button is-primary ${isLoading ? 'is-isLoading' : ''}`} type='submit'>
          Send
        </button>
        <Link className='button is-danger is-outlined' to='/'>
          Go Back
        </Link>
      </div>
    </form >

  )
}

export default Form
