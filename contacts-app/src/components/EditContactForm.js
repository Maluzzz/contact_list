import React, {useEffect, useState} from "react"

export const EditContactForm = ({editContact,name='',email='',phone='',surname='',visibleEdit,setEditVisibility}) => {
  const [state, setState] = useState({
    name:name,email: email,phone: phone,surname: surname
  })
  useEffect(() => {
     setState({
        name:name,email: email,phone: phone,surname: surname
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email])//This will be the uuiid

  const handleChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  } 
  if(!visibleEdit){
    return null
  }

  return (
    <div className='column is-full'>
       <div  style={{display:'flex', justifyContent:'space-between'}}
    >
     <div className="title">New contact</div>
      <button
        className="delete is-small "
        onClick={() => setEditVisibility(false)}
      ></button>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        editContact(state)
      }}
    >
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            value={state.name}
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
            disabled
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
            Edit Contact
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default EditContactForm
