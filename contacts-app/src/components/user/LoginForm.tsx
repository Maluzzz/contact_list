import React, { useContext } from 'react'
import { UserContext } from '../../helpers/userContext'

import { useForm } from '../../hooks'
import { user } from '../../types'
import { MessageBox } from '../MessageBox'

export const LoginForm = () => {
  const { formValues, handleChange } = useForm({ email: '', password: '' })

  const { state, login } = useContext(UserContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const user = formValues as user // QUESTION: Is it a better way to do this?
    login(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <MessageBox message={state.error} isError={true} />
      <div className='field'>
        <p className='control'>
          <label className='label'>Name</label>
          <input
            onChange={handleChange}
            className='input'
            type='email'
            name='email'
            placeholder='Email'
          />
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
          Login
        </button>
      </div>
    </form>
  )
}
