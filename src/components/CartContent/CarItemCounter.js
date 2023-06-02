import { useContext } from 'react';
import {dataContext} from '../context/DataContext' ;

import React from 'react'


const CarItemCounter = ({product}) => {
    const { cart , setCart  , buyProducts } = useContext (dataContext)


const decrease = () => {
    const productrepeat = cart.find((item)=> item.id === product.id) ;

    productrepeat.quanty  !== 1 &&
    setCart(cart.map((item) => (item.id === product.id ? {...product,
        quanty : productrepeat.quanty - 1 } : item))) 
}

  return (
  <div className='counter'>
     <p className='less-button' onClick={decrease}>-</p>
     <p className ='quanty'>{product.quanty}</p>
      <p className='counter-button' onClick={()=>buyProducts(product)}>+</p>
   
  </div>
     
  )
}

export default CarItemCounter
