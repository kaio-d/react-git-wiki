import React from 'react'
import { InputContainer } from './styles'

export default function Input({value, onChange}) {
  return (
    <InputContainer>
      <input placeholder='Ex: User/repo' value={value} onChange={onChange}/>
    </InputContainer>
  )
}
