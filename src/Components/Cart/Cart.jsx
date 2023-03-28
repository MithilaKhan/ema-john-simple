import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
   
   let total = 0
   for(const product of cart){
      total = total + product.price
   }
   return (
      <div className='orderSummary'>
         <h2>Order Summary</h2>
            <p>Selected Items:{cart.length}</p> 
            <p>Total Price:${total}</p>
            <p>Total shopping charge:$</p>
            <p>Tax:$</p>
            <h6>Grand Total:$</h6>
      </div>
   );
};

export default Cart;