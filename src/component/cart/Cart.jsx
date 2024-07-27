import React  from 'react';
import './caer.css'

const Cart = ({name,img}) => {
    
 
    return (
        <div className="cart">
          <div className='cart-item' id='id1'>
             <img src={img} alt="" />
             <h3>{name}</h3>
          </div>
        </div>
    );
};

export default Cart;