import React from 'react';
import {NavLink} from 'react-router-dom';

const navLinks = {
  text : 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '14%',
  borderRadius: '5px',
  border: '1px solid white',
  // color: 'white',
  // backgroundColor: 'transparent',
  fontSize: '30px',
  fontWeight: 'bold',
  alignContent: 'left',
  cursor: 'pointer',
  // active: {
  //   backgroundColor: 'rgba(94, 151, 255, 0.4)',
  // },
  color: 'black',
};



const navbar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  margin: '10 20%',
};

const space = {
  margin: '0px 0px',
  padding: '12px',
  background: './images.jpeg',
};

const Navbar = () => {
  return (
    <div>
      <div style={space}></div>
      <nav style={navbar}>
        <NavLink to="/" style={navLinks}>
          Home
        </NavLink>
        <NavLink to="/teachers" style={navLinks}>
          Teachers
        </NavLink>
        <NavLink to="/students" style={navLinks}>
          Students
        </NavLink>
        <NavLink to="/courses" style={navLinks}>
          Courses
        </NavLink>
      </nav>
      <div style={space}></div>
    </div>
  );
}

export default Navbar;