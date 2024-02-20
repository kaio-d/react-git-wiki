import React from 'react'
import { ButtonContainer } from './style'

export default function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Buscar
    </ButtonContainer>
  )
}
