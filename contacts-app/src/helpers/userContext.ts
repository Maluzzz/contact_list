import { createContext } from 'react'
import { userHook } from '../types'

export const UserContext = createContext<userHook>({
  state: { error: '', token: '' },
  login: () => {},
  signUp: () => {},
  logOut: () => {}
})
