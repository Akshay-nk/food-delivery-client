import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/allAPI';


function Login() {


const [userData,setUserData]=useState({
  email:"",password:""
})

const Navigate=useNavigate()

  const handlelogin =async(e)=>{
    e.preventDefault()
    const {email,password}=userData
  
    if(  !email || !password){
      alert("please fill the missing fields")
    }
    else{
      const result=await loginAPI(userData)
     // console.log(result)
      if(result.status===200){
        console.log(result)
        //sessionstorage for existing user and token
        sessionStorage.setItem('exisitingUser',JSON.stringify(result.data.exisitingUser))
        sessionStorage.setItem('token',result.data.token)
        
  
        setUserData({
          email:"",password:""
        })
        Navigate('/home')
      }
      else{
        alert(result)
        console.log(result);
      }
    }
  
    }
  return (
   <>
    <MDBContainer className="my-5 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

      <div className="text-center">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/36b6e461906217.5a7d98bb75356.jpg"
          style={{width: '185px'}} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1">We are The Food Team</h4>
      </div>

      <p>Please login to your account</p>


      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>


      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn onClick={handlelogin} className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
        <a className="text-muted" href="#!">Forgot password?</a>
      </div>

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">Don't have an account?</p>
        <Link to={'/register'}>
   <MDBBtn outline className='me-2 ms-2' color='success'>
        Register
      </MDBBtn>
   </Link>
    
      </div>

    </div>

  </MDBCol>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

      <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">We are more than just a company</h4>
        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>

  </MDBCol>

</MDBRow>

</MDBContainer>
   </>
  )
}

export default Login