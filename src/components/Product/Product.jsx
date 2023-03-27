import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {img, name, ratings, seller, price} = props.product

// problem
    const handleAddToCart = props.handleAddToCart


    return (
        <div className='product-container'>
            <img src={img ? img : 'No image'} alt="" />
            <div className='product-details'>
            <h6>{name}</h6>
<p >Price : ${price}</p>
<p>Manufacturer : {seller}</p>
<p>Rating : {ratings} </p>
            </div>


<button onClick={()=>handleAddToCart(props.product)}  className='cart-btn'>Add To Cart 



<FontAwesomeIcon  className='icon' icon={faShoppingCart} />
</button>



        </div>
    );
};

export default Product;