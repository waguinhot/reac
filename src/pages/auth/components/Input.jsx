import React from 'react'

const Input = ({id , name, type, change, place , label}) => {
  return (
    <div className='mt-4'>
        <label htmlFor={id}>{label}</label>
        <input className='block bg-gray-100 p-2 rounded w-full' type={type} id={id} onChange={change} placeholder={place} />
    </div> 
  )
}

export default Input