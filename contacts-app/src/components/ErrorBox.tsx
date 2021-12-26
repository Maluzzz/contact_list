import React from 'react'

const ErrorBox = ({ error }:{error:string | undefined}) => {
  return (<>{error && (
    <div className='notification is-danger'>
      <button className='delete'></button>
      {error}
    </div>
  )}</>)
}

export default ErrorBox
