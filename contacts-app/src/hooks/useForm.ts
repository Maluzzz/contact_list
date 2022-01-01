import React, { useState } from 'react'

import { contact, user } from '../types'

export const useForm = (initialValue:contact | user) => {
  const [formValues, setFormValues] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<{ value: string, name: string }>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const resetForm = () => {
    setFormValues(initialValue)
  }

  return { formValues, handleChange, resetForm }
}
