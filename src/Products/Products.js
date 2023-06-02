import { useContext } from 'react' ;
import { dataContext } from '../components/context/DataContext';
import '../Products/Products.css' 


import React from 'react'


const Products = () => {
    const { data  , buyProducts } = useContext (dataContext)
    
 
   
    return data.map ((product) => {
    return (
        
        <div className='card' key={product.id}>
            <img src={product.image} alt='img-product-card'></img>
            <h3>{product.title}</h3>
            <h4>{product.price}$</h4>
            <p>{product.description}</p> 
            <h5>{product.category}</h5>
             <button onClick={()=>buyProducts(product)}>Buy</button>
        </div>
    )}

    )

    
 
}

export default Products

