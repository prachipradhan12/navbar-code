import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  color: white;
 
  font-family:Verdana;
  font-size: medium;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
     right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    // transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div className="Color">
    <Ul open={open}>

      <li><a href="#Home">Home</a></li>
      <li><a href="#About Us">About Us</a></li>
      <li><a href="#Contact Us">Contact Us</a></li>
      
    </Ul>
    </div>
  )
}

export default RightNav