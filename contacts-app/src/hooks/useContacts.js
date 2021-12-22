import {useEffect, useState} from "react"
import {setContact} from "../helpers/api/setContact"
import getList from "../helpers/api/getList"
import {rmContact} from "../helpers/api/rmContact"
import {modifyContact} from "../helpers/api/modifyContact"

export const useContacts = () => {
  //TO.DO: handle and return errorMessage
  const [state, setState] = useState({
    contacts: [],
    error: false,
    currentContact: {},
  })
  
  useEffect(() => {
    getList().then((res) => setState({contacts: res}))
  }, [])
  
  const addContact = ({email, name, surname, phone}) => {
    setContact(email, name, surname, phone)
      .then((res) => setState({contacts: res}))
      .catch((err) => setState({...state, error: err.message}))
  }
  const removeContact = (email) => {
    //TO.DO HANDLE ERRORS
    rmContact(email).then((res) => setState({contacts: res}))
  }

  const editContact = ({email, name, surname, phone}) => {
    modifyContact(email, name, surname, phone)
      .then((res) => setState({contacts: res}))
      .catch((err) => setState({...state, error: err.message}))
  }

  return [state, addContact, removeContact, editContact]
}
