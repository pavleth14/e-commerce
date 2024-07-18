import '../App.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const [totalQuantity, setTotalQuantity] = useState(0);    
    const [allProducts, setAllProducts] = useState([]);
    const [loading, isLoading] = useState(true);
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        let quantity = 0;
        Object.values(cart.items).forEach(item => {
            quantity += item.quantity;
        });
        setTotalQuantity(quantity);
    }, [cart]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                isLoading(false);
            });
    }, []);

    allProducts.length > 0 && console.log(allProducts);

    return (
        <div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                        <button onClick={() => navigate('/cart')} style={{ cursor: 'pointer', background: 'lightGreen' }}>
                            Go To Cart ({totalQuantity})
                        </button>
                    </div>
                    <div className="products-grid">
                        {allProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Products;
