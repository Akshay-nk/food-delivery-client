import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';


function App() {

  const [user,setUser]=useState({
    username:"",email:"",password:"",repsd:""
  })

  const Navigate=useNavigate()

console.log(user);


  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password}=user

    if( !username || !email || !password){
      alert("please fill the missing fields")
    }else{
      const result = await registerAPI(user)
      console.log(result);
      if(result.status===200){
        console.log(result);
        alert(`${result.data.username} has registered successfully`)
      setUser({
        username:"",email:"",password:""
      })
      Navigate('/login')
      }else{
        alert(result.response.data)
        console.log(result);
      }
    }
  }



  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' value={user.repsd} onChange={(e)=>setUser({...user,repsd:e.target.value})}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={handleRegister}>Register</MDBBtn>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">already have an account?</p>
        <Link to={'/login'}>
   <MDBBtn outline className='me-2 ms-2' color='warning'>
       Login
      </MDBBtn>
   </Link>
    
      </div>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;