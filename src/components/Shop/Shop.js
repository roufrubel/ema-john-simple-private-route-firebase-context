import React, { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // product to be rendered on the ui
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        });
    } , [])

    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }else{
            product.quantity= 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
            <input onChange={handleSearch} type="text" placeholder='SEARCH PRODUCT'/>
            </div>

            <div className="shop-container">
                <div className="product-container">
                 {
                    displayProducts.map(product => <Product 
                        key={product.key} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                 }
                </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/review'}>
                    <button className='btn-regular'>Review Items</button>
                    </Link>
                </Cart>
            </div>            
            </div>
        </>
    );
};

export default Shop;