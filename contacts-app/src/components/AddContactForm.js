import React, { useState } from "react"

export const AddContactForm = ({addContact})=>  {
    const [state, setState] = useState({name:'',surname:'', email:'',phone: ''})
    const handleChange=(e) => {
        const {name,value} = e.target
        setState({ ...state, [name]:value})
    }
  return (
      < >
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input name='name' onChange={handleChange} className="input" type="text" placeholder="New Name" />
      </div>
      <label className="label">Surname</label>
      <div className="control">
        <input name='surname' onChange={handleChange} className="input" type="text" placeholder="Surname" />
      </div>
      <label className="label">Email</label>
      <div className="control">
        <input name='email' onChange={handleChange} className="input" type="email" placeholder="Email" />
      </div>
      <label className="label">Phone</label>
      <div className="control">
        <input name='phone' onChange={handleChange} className="input" type="tel" placeholder="Text input" />
      </div>
    </div>
    <div className="field is-grouped">
    <div className="control">
      <button className="button is-primary" onClick={() => addContact(state)}>New Contact</button>
    </div>
  
  </div>
  </>
  )
}

export default AddContactForm
