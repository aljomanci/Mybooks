
import Navbar from '../Navbar/Navbar';
import CartElements from './CartElements' ;
import CartTotal from './CartTotal';
import React from 'react' ;

const CartContent = () => {
  


  // Condicion 
  return (
    <>
    <Navbar/>
    <CartElements/>
    <CartTotal/>
    </>
  )
}

export default CartContent
