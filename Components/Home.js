import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () { 
  const navigate = useNavigate()

  function handlereset(){
      document.getElementById("myform").reset()
  }

  function handlesubmit(){
    let a = document.querySelector(".state_input")
    let b = document.querySelector(".city_input")

    if( a.value==""||b.value=="" ){
      alert("Please Fill up the form")
    }
    else if((a.value=="MP"||a.value=="mp"||a.value=="Madhya Pradesh"||a.value=="madhya pradesh")&& (b.value=="Bhopal"||b.value=="bhopal")&&document.querySelector(".b_1").checked==true &&document.querySelector(".rent")){
      navigate('/bhopal_1')
    }
    else if((a.value=="MP"||a.value=="mp"||a.value=="Madhya Pradesh"||a.value=="madhya pradesh")&& (b.value=="Bhopal"||b.value=="bhopal")&&document.querySelector(".b_3").checked==true &&document.querySelector(".rent")){
      navigate('/bhopal_2')
    }
    else if((a.value=="MP"||a.value=="mp"||a.value=="Madhya Pradesh"||a.value=="madhya pradesh")&& (b.value=="Bhopal"||b.value=="bhopal")&&document.querySelector(".b_5").checked==true &&document.querySelector(".rent")){
      navigate('/bhopal_3')
    }
    else if((a.value=="MP"||a.value=="mp"||a.value=="Madhya Pradesh"||a.value=="madhya pradesh")&& (b.value=="Bhopal"||b.value=="bhopal")&&document.querySelector(".b_6").checked==true &&document.querySelector(".rent")){
      navigate('/bhopal_4')
    }
    else if((a.value=="MP"||a.value=="mp"||a.value=="Madhya Pradesh"||a.value=="madhya pradesh")&& (b.value=="Bhopal"||b.value=="bhopal")&&document.querySelector(".b_7").checked==true &&document.querySelector(".rent")){
      navigate('/bhopal_5')
    }
    else{
      navigate('/error')
    }

  }
  return (
    <>
   
    <div className='form_fill'>
        <form id='myform'>
            <label className='state_name' for="state"><img className='state' src='state.png'></img></label>
            <input placeholder=' : State' className='state_input' id='state'></input>
            <br/>

            <label className='city_name' for="city"><img className='city' src='city.png'></img></label>
            <input placeholder=' : City' className='city_input' id='city'></input>

            <br/> 

            <img className='size' src='size.png'></img>

            <input  className='b_1' type='radio' id='1bhk' name='bhk'></input>
            <label  className='b_1' for="1bhk"><span className='b_span'>1 BHK</span></label>
            
            <input  className='b_3' type='radio' id='2bhk' name='bhk'></input>
            <label  className='b_3' for="2bhk"><span className='b_span'>2 BHK</span></label>
           
            <input  className='b_5' type='radio' id='3bhk' name='bhk'></input>
            <label  className='b_5' for="3bhk"><span className='b_span'>3 BHK</span></label>

            <input  className='b_6' type='radio' id='4bhk' name='bhk'></input>
            <label  className='b_6' for="4bhk"><span className='b_span'>4 BHK</span></label>

            <input  className='b_7' type='radio' id='5bhk' name='bhk'></input>
            <label  className='b_7' for="5bhk"><span className='b_span'>5 BHK</span></label>
            <br/>

            <img className='for' src='for.png'></img>

            <input className='rent' type='radio' id='rent' name='type'></input>
            <label for="rent"><img className='rent' src='rent.png'></img></label>

            <input className='buy' type='radio' id='buy' name='type'></input>
            <label for="buy"><img className='buy' src='buy.png'></img></label>

            <br/>
            <button onClick={handlesubmit} id='btn_submit_home'  className='btn_submit'><img className='btn_submit_1' src='submit.png'></img></button>             
            <button onClick={handlereset} id='btn_reset_home'  className='btn_reset'><img className='btn_reset_1' src='reset.png'></img></button>
        </form>
    </div>
    <div className='home_bg'></div>
    <img id='home_small' className='h_1' src='h_1.jpg'></img>
    <img id='home_small' className='h_2' src='h_2.jpeg'></img>
    <img id='home_small' className='h_3' src='h_3.jpg'></img>
    <img className='h_4' src='h_4.jpg'></img>
    <img id='home_small' className='h_5' src='h_5.jpg'></img>
    <img id='home_small' className='h_6' src='h_6.jpg'></img>
    <img id='home_small' className='h_7' src='h_7.jpg'></img>
    <img id='home_small' className='h_8' src='h_8.jpg'></img>
    <img id='home_small' className='h_9' src='h_9.jpg'></img>
    <img id='home_small' className='h_10' src='h_10.jpg'></img>
    </>
  )
}
