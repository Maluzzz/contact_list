const LIST_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://back-contc.vercel.app/list'
    : 'http://127.0.0.1:3000/list'

export const getList = async () => {
    const url = LIST_URL
    const response = await fetch(url)
    const list = await response.json()

  return list
  }

export default getList