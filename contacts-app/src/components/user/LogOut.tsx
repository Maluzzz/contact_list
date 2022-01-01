import React, { useContext } from 'react'
import { UserContext } from '../../helpers/userContext'

export const LogOut = () => {
  const { logOut } = useContext(UserContext)
  return (
    <div>
      <button className='button is-light' id='logout-button' onClick={logOut}> Log Out</button>
    </div>
  )
}
