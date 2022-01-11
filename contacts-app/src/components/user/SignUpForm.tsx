import React, { useContext } from 'react'
import { UserContext } from '../../helpers/userContext'
import { useForm } from '../../hooks'
import { user } from '../../types'

import { MessageBox } from '../MessageBox'

export const SignUpForm = () => {
  const { formValues, handleChange } = useForm({ email: '', password: '', name: '' })
  const { state, signUp } = useContext(UserContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const user = formValues as user
    signUp(user)
  }

  return (
    <div>
      <MessageBox message={state.error} isError={true} />
      {/** TO.DO: TRY TO DO IN A BETTER WAY */}
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
