import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
      const [mobiles, setMobile] = useState([])
      const [cart, setCart] = useState([])
      const [random, setRandom] = useState([])
      console.log(random)
      
      
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
      const reset = () => {
            setCart([])
      }
      const randomSelect = (cart) => {
            const arrayLength = cart.length
            const number = Math.floor(Math.random() * arrayLength)
            if (arrayLength !== 0) {
                  setRandom(cart[number])
            }
            else {
                  alert("select some product")
            }
      }
      

      return (
            <div className='shop-container'>
                  <div className='product-container'>
                        {
                              mobiles.map(mobile => <Product key={mobile.id}
                                    mobileData={mobile} handelAddToCart={handelAddToCart}
                                    ></Product>)
                        }
                       
                  </div>
                  <div >
                        <div className='cart-container'>
                              <Cart cart={cart} reset={reset} randomSelect={randomSelect} key={ random.name}></Cart>
                        </div>
                  </div>
                  </div>
            
      );
};

export default Shop;