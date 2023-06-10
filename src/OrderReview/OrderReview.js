import React from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () =>{
        navigate("/shipping");
        // setCart([]);
        // clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                    {
                        cart.map(product => <ReviewItem 
                            key = { product.key}
                            product={product}
                            handleRemove = {handleRemove}
                        ></ReviewItem>)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className='btn-regular'>Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;