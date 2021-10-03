import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';
import { clearTheCart, getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);

    }

    const history = useHistory();
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push("/placeorder");
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {cart?.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                ></ReviewItem>)}
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart}>


                        <button onClick={handlePlaceOrder} className="btn-regular">
                            Place Order
                        </button>


                    </Cart>
                }
            </div>

        </div>
    );
};

export default OrderReview;