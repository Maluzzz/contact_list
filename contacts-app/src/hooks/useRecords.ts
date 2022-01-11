import { useContext, useEffect, useState } from 'react'

import fetchApiWithToken from '../helpers/api/fetchWithToken'
import { UserContext } from '../helpers/userContext'

export const useRecords = (id: number) => {
  const [history, setHistory] = useState([])
  const { state } = useContext(UserContext)

  useEffect(() => {
    async function getHistory() {
      const response = await fetchApiWithToken('/history/' + id, 'GET', state.token)
      setHistory(response)
    }
    getHistory()
  }, [id])

  return { history }
}
