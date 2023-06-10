import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const {name, price, img, stock, seller, star} = props.product;
    return (
        <div className='product'>
            <div style={{marginRight: '15px'}}>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className='product-name'> {name}</h3>
            <p>by: {seller}</p>
            <p>Price: {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating 
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
            ></Rating>
            <br /><br />
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;