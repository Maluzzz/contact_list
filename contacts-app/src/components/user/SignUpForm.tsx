import React, { useContext, useState } from 'react'
import { UserContext } from '../../helpers/userContext'

import { MessageBox } from '../MessageBox'

export const SignUpForm = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '', name: '' })

  const { state, signUp } = useContext(UserContext)

  const handleChange = (e: React.ChangeEvent<{ value: string, name: string }>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    signUp(formValues)
  }

  return (
    <div>
      <MessageBox message={state.error} isError={true} />
      {/** TRY TO DO IN A BETTER WAY */}
      <MessageBox message={state.token === undefined ? 'User Created. Go Login to Access' : state.token} isError={false} />
      <form onSubmit={handleSubmit}>

        <div className='field'>
          <p className='control'>
            <label className='label'>Name</label>
            <input
              onChange={handleChange}
              className='input'
              type='text'
              name='name'
              placeholder='Name' />
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <label className='label'>Email</label>
            <input
              onChange={handleChange}
              className='input'
              type='email'
              name='email'
              placeholder='Email' />
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <label className='label'>Password</label>
            <input
              onChange={handleChange}
              className='input'
              name='password'
              type='password'
              placeholder='Password' />
          </p>
        </div>
        <div className=' is-flex  is-justify-content-center'>
          <button className='button is-success'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
