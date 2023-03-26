import React from 'react';
import headerIcon from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
   return (
      <div className='header'>
       <div className="img">
         <img src={headerIcon} alt="" />
         </div> 
         <div>
            <a href="/order">Order</a> 
            <a href="/order Review">Order Review</a>
            <a href="/manage Inventory">Manage Inventory</a>
            <a href="/login">Login</a>
            </div> 
      </div>
   );
};

export default Header;
