import {useEffect, useState} from "react"
import { setContact } from "../helpers/setContact"
import getList from "../helpers/getList"
import { rmContact } from "../helpers/rmContact"


export const useContacts = () => {
  //TO.DO: handle and return errorMessage
  const [state, setState] = useState({contacts: [], error: false})

  useEffect(() => {
    getList().then((res) => setState({contacts: res}))
  }, [])

  const addContact = ({email,name,surname,phone}) => {
    setContact(email,name,surname,phone
      ).then((res) => setState({contacts: res}))
    .catch((err) => setState({...state, error:err}))
  }
  const removeContact = (email) => {
    rmContact(email).then((res) => setState({contacts: res}))
  }

  return [state.contacts, addContact,removeContact,state.error]
}