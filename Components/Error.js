import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function () {
  const navigate = useNavigate()
  function handleclick(){
    navigate("/home")
  }
  return (
    <div>
      <img className='error' src='error.png'></img>
      <button onClick={handleclick} className='btn_error'></button>
    </div>
  )
}
