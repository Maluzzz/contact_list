import React from 'react'

export function SearchBar({ onChange }: { onChange: (s: string) => void }) {
  return (
    <div>
      <input
        className='input is-primary'
        type='text'
        placeholder='Filter Contacts'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
