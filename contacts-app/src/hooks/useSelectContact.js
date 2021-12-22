import {useState} from "react"

export const useSelectContact = (contacts) => {

  const [contact, setState] = useState(null)
  const selectContact = (email) => {
    //TO.DO make more redeable 
    setState(contacts[contacts.findIndex((contact) => contact.email === email)])
  }
  return [contact, selectContact]
}
