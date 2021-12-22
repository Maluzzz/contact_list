import React from 'react'

const ErrorBox = ({error}) =>  {
    return(<>{error && (
        <div className="notification is-danger">
          <button className="delete"></button>
          {error}
        </div>
      )}</>)
}

export default ErrorBox
