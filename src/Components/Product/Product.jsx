import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   console.log(props.product)
   const {name ,price ,seller ,ratings ,img} = props.product
   const btnCartHandler = props.btnCartHandler
   
   return (
      <div className='product-container'>
        <img src={img} alt="" />
        <div className='card-info'>
        <h6 className='card-header' style={{fontSize:" 21px"}}>{name}</h6>
        <p style={{fontSize:" 17px"}}>Price:${price}</p>
        <p style={{fontSize:" 12px"}}>Manufacturer : {seller}</p>
        <p style={{fontSize:" 12px"}}>Rating : {ratings} star</p>
        
        </div>
        <button className='btn-cart' onClick={() =>btnCartHandler(props.product)}>
         Add to cart
         const element  <FontAwesomeIcon icon={faShoppingCart} />
         </button>
      </div>
   );
};

export default Product;