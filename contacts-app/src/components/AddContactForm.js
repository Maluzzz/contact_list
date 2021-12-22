import React, {useState} from "react"

export const AddContactForm = ({addContact, visibleFormContact, setVisibleFormContact}) => {
  const [state, setState] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }
  if(!visibleFormContact){
    return null
  }

  return (
    <div className="column  ">
    <div  style={{display:'flex', justifyContent:'space-between'}}
    >
     <div className="title">New contact</div>
      <button
        className="delete is-small "
        onClick={() => setVisibleFormContact(false)}
      ></button>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addContact(state)
        
      }}
    >
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"

            onChange={handleChange}
            className="input"
            type="text"
            placeholder="New Name"
          />
        </div>
        <label className="label">Surname</label>
        <div className="control">
          <input
            name="surname"
            value={state.surname}
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Surname"
          />
        </div>
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            onChange={handleChange}
            className="input"
            type="email"
            value={state.email}
            placeholder="Email"
          />
        </div>
        <label className="label">Phone</label>
        <div className="control">
          <input
            name="phone"
            value={state.phone}
            onChange={handleChange}
            className="input"
            type="tel"
            placeholder="Text input"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" type="submit">
            New Contact
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default AddContactForm
