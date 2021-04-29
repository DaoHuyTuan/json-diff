import React from 'react'
import { ButtonProps } from './interfaces'

const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>
}

export default Button
