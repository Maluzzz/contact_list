import React from 'react'
import AppRouter from './AppRoutes'
import { UserContext } from './helpers/userContext'
import { useAuth } from './hooks'

export const App = () => {
  const { state, login, signUp, logOut } = useAuth()

  return (
    <UserContext.Provider value={{ state, login, signUp, logOut }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
export default App
