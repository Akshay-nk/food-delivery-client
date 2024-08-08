import React from 'react'

import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
   <div style={{display:'flex'}}>


    <div className='p-5 m-5'>
   <Link to={'/login'}>
   <MDBBtn className='me-1' color='success'>
        Get started
      </MDBBtn>
   </Link>
    
    </div>

    <div>
   
       </div>



   </div>
  )
}

export default LandingPage