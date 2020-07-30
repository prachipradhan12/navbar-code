import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from './logo.jpeg';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  background-color: #282c34;
  color: white;
  display: flex;
  font-family:Verdana;
  font-size: medium;

  justify-content: space-between;
  .logo {
    padding: 10px ;
  }
  .responsive {
    width: 50px;
    /* padding:0px; */
    height: 50px;
    border: 4px solid rgb(214, 201, 201);
  border-radius: 1px;
  
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img src={logo} alt="Logo" className="responsive" />

      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar