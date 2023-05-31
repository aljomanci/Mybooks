import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import '../CartContent/CartContent.css'
 import CarItemCounter from "./CarItemCounter";

const CartElements = () => {
    const { cart, setCart } = useContext(dataContext) ;
    const deleteProduct = (id) => {
        const foundId = cart.find ((element)=> element.id === id)
        const newCart = cart.filter ((element) => { 
          return element !== foundId 
        })
        setCart(newCart)
     }
  return cart.map ((product)=>{
    return (
        <div className="cartContent" key={product.id}>
            <img src={product.image} alt="product-card"></img>
            <h3 className='title'>{product.title}</h3>
            <CarItemCounter product={product} quanty={product.quanty}/>
            <h4 className="price">{product.price}$</h4>
            <p className="description">{product.description}</p>
            <h5 className="category">{product.category}</h5>
            <h3 className="cart-delete-button"onClick={()=>deleteProduct(product.id)} >🗑</h3>
        </div>
    )
  })
}

export default CartElements
