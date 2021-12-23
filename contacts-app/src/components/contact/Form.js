import React from 'react'

export const Form = ({ handleChange, handleSubmit, contactInfo }) => {
  return (

    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
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
            name='phone'
            value={contactInfo.phone}
            onChange={handleChange}
            className='input'
            type='tel'
            placeholder='Mobil number'
          />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-primary' type='submit'>
              New Contact
          </button>
        </div>
      </div>
    </form>

  )
}

export default Form
