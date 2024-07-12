import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function () {
  const navigate = useNavigate()
  function handleclick(){
    let a = document.querySelector(".name_input")
    let b = document.querySelector(".password_input")
    if(a.value==""||b.value==""){
      alert("Please fill up the login information")
    }
    else{
      navigate('/home')
    }
  } 
  return (
    <>
    <div className='container_login'>
    <img className='house' src='home.jpg'></img>

<div className='login'>
           <form >
        <h2 className='heading'>Login</h2>
        <label for="name"><img className='name' src='profile.png'></img></label>
            <input  placeholder=' : Your name'  className='name_input' type='text'id='name'></input><br/>
            <label for="password"><img className='password' src='password.png'></img></label>
            <input placeholder=' : Password' className='password_input' type='password'id='password'></input><br/>
            <button onClick={handleclick} className='btn'>Log in</button>
        
    </form>
</div>
    </div>
    <div className='house_6'></div>
    
    
    </>
  )
}
