import React from 'react'

export default function () {
  return (
    <div className='nav'>
        <a href='/'><img className='logo' src="logo.png"></img></a>
        
        <a id='home' className="nav_2" href='/home'>Home</a>
        <a id='home' className="nav_2" href='/about'>About</a>
        <a id='home' className="nav_2" href='/contact'>Contact Us</a>
        <a id='home' className="nav_2" href='/offices'>Offices</a>
        <a id='home' className="nav_2" href='/login'>Login</a>
        <a href='/home'><img className='home_icon' src='home_icon.png'></img></a>
        <a href='/about'><img className='about_icon' src='about_icon.png'></img></a>
        <a href='/contact'><img className='contact_icon' src='contact_icon.png'></img></a>
        <a href="/offices"><img className='office_icon' src='office_icon.png'></img></a>
        <a href="/login"><img className='login_icon' src='login_icon.png'></img></a>
        
    
        
        
    </div>
  )
}
