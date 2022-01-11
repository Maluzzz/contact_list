import React from 'react'

import { LoginForm } from '../components/user/LoginForm'

export const LoginScreen = () => {
  return (
    <>
      <div className='title is-1'>
        Log In
      </div>
      <LoginForm />
      <p className='subtitle is-6 has-text-centered mt-4'> You do not have an account?
        <a className='is-primary' href='/signup'> Get One Now</a>
      </p>
    </>
  )
}
