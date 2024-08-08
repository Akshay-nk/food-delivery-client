import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='dark'>
      <MDBContainer fluid>
       <Link to={'/home'}>
       <MDBNavbarBrand className='text-light'>METALICA</MDBNavbarBrand>
       </Link>
        
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}