import React from 'react';
import "./Cart.css"


const Cart = ({cart}) => {
      return (
            <div className='cart-container2'>
                  <div className='cart-position'>
                        <h1>Choise a Phone</h1>
                  {
                              cart.map(item => <h3 key={item.id}>{item.name} </h3>)
                 }
                  </div>
                  <div className=''>
                        <button className='btn-cart'>Choise a Phone
                        
                        </button>
                  </div>
                  
            </div>
      );
};

export default Cart;