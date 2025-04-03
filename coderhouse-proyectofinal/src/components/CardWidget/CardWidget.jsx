import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css'; 

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0); 

    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="cart-widget">
            <Link to="/cart" className="cart-link" onClick={addToCart}>
                🛒
                {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                )}
            </Link>
        </div>
    );
};

export default CartWidget;