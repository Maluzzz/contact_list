import React from 'react'

const ErrorBox = ({ message, error }: { message: Boolean | string, error: Boolean }) => {
  return (<>{message && (
    <div className={`notification is-${error ? 'danger' : 'success'}`} >
      {message}
    </div>
  )
  }</>)
}

export const MessageBox = ({ message, isError = false }: { message: string, isError: boolean }) => {
  const color = isError ? 'is-danger' : 'is-success'
  return (<>{message && (
    <div className={`notification ${color} is-light`} style={{ maxWidth: '300px' }}>
      {message}
    </div>
  )
  }</>)
}

export default ErrorBox
