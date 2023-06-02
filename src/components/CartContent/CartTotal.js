import { useContext } from "react";
import { dataContext } from "../context/DataContext";


import React from 'react'

const CartTotal = () => {
    const {cart} = useContext(dataContext)
    // acc = acomulador , el = elemento
    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty,0)
  return (
    <div className="cartTotal">
      <button className="cartTotal">Total a pagar :{total}$</button>
    </div>
  )
}

export default CartTotal
