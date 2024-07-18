import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeOneItem, removeThisItem, removeAllItems } from '../redux/features/cart/cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveOneItem = (id) => {
        dispatch(removeOneItem({ id }));
    };

    const handleRemoveThisItem = (id) => {
        dispatch(removeThisItem({ id }));
    };

    const handleRemoveAllItems = () => {
        dispatch(removeAllItems());
    }

    return (
        <div>
            <div style={{textAlign: 'right'}}>
            <button onClick={() => navigate('/')} style={{ cursor: 'pointer', background: 'lightGreen' }}>
                Home
            </button>
            </div>
            
            <div style={{ marginTop: '10px', padding: '20px', border: '1px solid grey' }}>

                <h2>Cart</h2>
                {Object.keys(cart.items).length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {Object.keys(cart.items).map((key) => (
                            <div key={key} style={{ marginBottom: '10px', border: '1px solid grey', padding: '10px' }}>
                                <h3>{cart.items[key].title}</h3>
                                <p>Quantity: {cart.items[key].quantity}</p>
                                <p>Total Price for {cart.items[key].quantity} item(s): ${cart.items[key].total.toFixed(2)}</p>
                                <button onClick={() => handleRemoveOneItem(key)}>Remove one product</button>
                                <button onClick={() => handleRemoveThisItem(key)}>Remove this products</button>
                            </div>
                        ))}
                        <hr />
                        <div>
                            <h3>Total Quantity: {cart.totalQuantity}</h3>
                            <h3>Total Price: ${cart.totalPrice.toFixed(2)}</h3>
                            <button onClick={handleRemoveAllItems}>Remove all products</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
