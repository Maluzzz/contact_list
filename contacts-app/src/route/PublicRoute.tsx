import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { UserContext } from '../helpers/userContext'

export const PublicRoute = ({ children }: any) => {
  const { state } = useContext(UserContext)
  return state.token ? <Navigate to='/' /> : children
}
