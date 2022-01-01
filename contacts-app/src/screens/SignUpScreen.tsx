import React from 'react'
import { SignUpForm } from '../components/user/SignUpForm'

export const SignUpScreen = () => {
  return (
    <div className='column is-full'>
      <div className='title is-1'>
        Sign Up
      </div>
      <SignUpForm />
      <p className='subtitle is-6 has-text-centered mt-4'> Already have an account?
        <a className='is-primary' href='/login'> Log in</a>
      </p>
    </div>
  )
}
