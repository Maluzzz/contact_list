export const LIST_URL =
  process.env.NODE_ENV === 'production' ?
    'https://back-contc.vercel.app/list' :
    'http://127.0.0.1:3000/list'

export const ADD_URL =
  process.env.NODE_ENV === 'production' ?
    'https://back-contc.vercel.app/add_contact' :
    'http://127.0.0.1:3000/add_contact'

export const RM_URL =
  process.env.NODE_ENV === 'production' ?
    'https://back-contc.vercel.app/rm_contact' :
    'http://127.0.0.1:3000/rm_contact'

export const EDIT_URL =
process.env.NODE_ENV === 'production' ?
  'https://back-contc.vercel.app/edit_contact' :
  'http://127.0.0.1:3000/edit_contact'
