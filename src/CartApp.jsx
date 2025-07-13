import React from 'react';
import './CartApp.css';

const CartApp = ( props ) => {
    console.log("CartApp props:", props);
    const products = [
        { name: 'Product 1', price: '$10', quantity: 5, seller: 'Seller A' },
        { name: 'Product 2', price: '$20', quantity: 3, seller: 'Seller B' },
        { name: 'Product 3', price: '$15', quantity: 8, seller: 'Seller C' },
        { name: 'Product 4', price: '$25', quantity: 2, seller: 'Seller D' },
        { name: 'Product 5', price: '$30', quantity: 6, seller: 'Seller E' },
        { name: 'Product 6', price: '$40', quantity: 4, seller: 'Seller F' },
        { name: 'Product 7', price: '$50', quantity: 7, seller: 'Seller G' },
    ];

    return (
        <div className="cart-app">
            <h1>Cart Micro Frontends</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Seller: {product.seller}</p>
                        <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <button className="checkout-button">Checkout</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartApp;