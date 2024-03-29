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
            <h3 className="cart-delete-button"onClick={()=>deleteProduct(product.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></h3>
        </div>
    )
  })
}

export default CartElements
