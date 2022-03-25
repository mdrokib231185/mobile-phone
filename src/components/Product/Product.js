import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
      // console.log(mobileData)
      // console.log(props)
      const { img, name, price } = props.mobileData
      // console.log(name)
// console.log()      
      return (
            <div className='product'>
                  <div className='cart-container'>
                        <img src={img } alt="" />
                        <h1>Name : {name}</h1>
                        <h3>Price : {price }</h3>
                  </div>
                  <button onClick={() => props.handelAddToCart(props.mobileData)} className='btn-cart' > Add To Cart
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </button>
            </div>
      );
};

export default Product;