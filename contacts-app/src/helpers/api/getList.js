import { LIST_URL } from "./endpoints"


export const getList = async () => {
    const url = LIST_URL
    const response = await fetch(url)
    const list = await response.json()

  return list
  }

export default getList