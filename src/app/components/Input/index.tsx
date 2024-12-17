import React, { InputHTMLAttributes } from 'react'

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ placeholder, ...props} : InputGroupProps) {
  return (
    <input {...props} className='p-2 rounded-sm text-black' aria-label='title' placeholder={placeholder} id='title' />
  )
}
