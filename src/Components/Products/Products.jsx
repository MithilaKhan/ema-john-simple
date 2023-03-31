import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
   const [Products , setProducts] = useState([])
   const [cart , setCart]=useState([])
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   },[]);
   const btnCartHandler =(product)=>{
      console.log(product)
      const newCart = [...cart , product]
      setCart(newCart)
   }
   return (
      <div className='main-container'>
         <div className='productsContainer'>
        {
        Products.map(product => <Product
        key = {product.id}
        product ={product}
        btnCartHandler ={btnCartHandler}>
        </Product>) 
        }
         </div>
         <div>
           <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Products;