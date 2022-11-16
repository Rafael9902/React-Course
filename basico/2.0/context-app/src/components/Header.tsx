import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

export const Header = () => {
  return (
    <>
      <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
      <Link to="login">Login</Link>
      <Link to="about">About</Link>
    </>
  );
};
