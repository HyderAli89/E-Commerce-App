import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
export const LoginSignup = () => {
  
  const [state,setState] =useState("Login")
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) =>{
      setFormData({...formData,[e.target.name]:e.target.value})
      
  }

  const login = async () =>{
    console.log("login function excuted",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body : JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);  // will set token to local host
      window.location.replace("/"); // will redirect user to home page
    }else{
      alert(responseData.errors)
    }
  }
  const signup =async () =>{
    console.log("sign up function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body : JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);  // will set token to local host
      window.location.replace("/"); // will redirect user to home page
    }else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className='loginsign-fields'>
          {state==='Sign Up'?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name"/>:<></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler}  placeholder='Your Email Address' />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <div className='loginsignup-agree' >
            <input type="checkbox" name=""  id="" required />
            <p>By continuing, i agree to the terms&condition and privacy policy</p>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login'>Already Have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className='loginsignup-login'>Create  an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        
        
      </div>
    </div>            
  )
}

export default LoginSignup