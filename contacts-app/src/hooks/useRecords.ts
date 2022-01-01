import { useContext, useEffect, useState } from 'react'
import fetchApiWithToken from '../helpers/api/fetchWithToken'

import { UserContext } from '../helpers/userContext'

// TO.DOs: handle errors

export const useRecords = (id: number) => {
  const [history, setHistory] = useState([])
  const { state } = useContext(UserContext)
  useEffect(() => {
    fetchApiWithToken('/history/' + id, 'GET', state.token).then((res) => setHistory(res))
  }, [id])

  return { history }
}
