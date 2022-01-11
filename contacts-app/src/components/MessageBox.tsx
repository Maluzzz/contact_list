import React from 'react'

export const MessageBox = ({ message, isError = false }: { message: string, isError: boolean }) => {
  const color = isError ? 'is-danger' : 'is-success'
  return (<>
    {message &&
      (<div className={`notification ${color} is-light`} style={{ maxWidth: '300px' }}>
        {message}
      </div>
      )}
  </>)
}

export default MessageBox
