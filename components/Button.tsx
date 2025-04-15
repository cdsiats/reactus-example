import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
}

export default function Button({ 
  children, 
  onClick, 
  ...htmlProps 
}: ButtonProps) {
  return (
    <button type='button' {...htmlProps}>{children}</button>
  )
}
