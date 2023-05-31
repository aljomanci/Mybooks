import { useContext } from 'react';
import {dataContext} from '../context/DataContext';

import '../Navbar/Navbar.css'
import { Link } from "react-router-dom"
import TotalItems from '../CartContent/TotalItems'

import React from 'react'
const Navbar = () => {
  const { cart } = useContext (dataContext)
  return (
    <div className='nav-container'>
<nav className='navbar'>
  <Link to = {"/"} >
  <h1 className='navbar-logo'>Store.</h1>
  </Link>
  <Link className='seeCarrito'to={"/cart"}>
    🛒
    { cart.lenght >  0 ? <TotalItems/> : null } 
      <TotalItems />
  </Link>
</nav>

    </div>
  )
}

export default Navbar
