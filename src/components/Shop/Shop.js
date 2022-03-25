import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
      const [mobiles, setMobile] = useState([])
      const [cart, setCart] = useState([])
      
      // console.log(mobiles)
      useEffect(() => {
            fetch("products.json")
                  .then(res => res.json())
                  .then(data => setMobile(data))
      }, []);
      const handelAddToCart = (mobile) => {
            const newCart = [...cart ,mobile]
            // console.log(newCart)
            setCart(newCart)
      }

      return (
            <div className='shop-container'>
                  <div className='product-container'>
                        {
                              mobiles.map(mobile => <Product key={mobile.id}
                                    mobileData={mobile} handelAddToCart={handelAddToCart }
                                    ></Product>)
                       }
                  </div>
                  <div className='cart-container'>
                        <div>
                              {
                                    cart.map(item => <h1 key={item.id }>{ item.name} </h1>)
                        }
                        </div>
                  </div>
            </div>
      );
};

export default Shop;