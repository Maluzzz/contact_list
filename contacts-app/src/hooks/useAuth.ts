import { useEffect, useState } from 'react'
import fetchApi from '../helpers/api/fetchApi'
import refreshToken from '../helpers/api/refreshToken'

import { user } from '../types'

export const useAuth = () => {
  const [state, setState] = useState({ token: localStorage.getItem('token') || '', error: '' })

  useEffect(() => {
    if (state.token === '') {
      return
    }
    // IMPROVEMENT: To avoid send a request every time
    // we can save the timeStamp to know if the token has expired
    refreshToken(state.token).then(res => {
      if (res.error) {
        localStorage.removeItem('token')
      } else {
        // PERFE
      }
    })
  }, [state.token])

  const login = (user: user) => {
    fetchApi('/auth/login', 'POST', user).then(res => {
      if (res.error) {
        return setState({ ...state, error: res.error })
      }
      localStorage.setItem('token', res.token)
      return setState({ ...state, token: res.token })
    })
  }

  const signUp = (user: user) => {
    fetchApi('/auth/signup', 'POST', user).then(res => {
      if (res.error) {
        return setState({ ...state, error: res.error })
      }
      return setState({ error: '', token: res.token })
    })
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setState({ token: '', error: '' })
  }

  return { login, state, signUp, logOut }
}

export default useAuth
