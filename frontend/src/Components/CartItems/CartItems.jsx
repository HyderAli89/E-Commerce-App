import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import remove_icon  from "../Assets/Frontend_Assets/cart_cross_icon.png"
import Swal from 'sweetalert2';
export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
    const handlepayment = () =>{
        Swal.fire({
            title: 'Thank you for shopping!',
            text: ` Your item's will deliver soon.`,
            icon: 'success',
            confirmButtonText: 'Awesome'
          });
    }
    const handlecoupon = () =>{
        Swal.fire({
            title: 'Sorry!',
            text: 'Coupoun Code Not Available',
            icon: 'info',
            showCloseButton: true,  
            confirmButtonText: 'Okay'
          });          
    }
    return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img  className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping-fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h2>Total</h2>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={handlepayment}>Proced to checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo code' />
                    <button onClick={handlecoupon}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartItems