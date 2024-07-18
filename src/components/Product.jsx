import '../App.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cart/cartSlice';

const Product = ({product}) => {
    const dispatch = useDispatch();
    console.log(product);

    const handleAddButton = () => {
        dispatch(addItem(product));
      };

    return ( 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' , border: '1px solid grey', marginBottom: '30px', padding: '20px' }}>
            Title: {product.title}
            <div style={{ width: '300px' }}>
                <img className='imgStyle' src={product.image} alt="product image" />
            </div>
            Price: {product.price}$
            <button onClick={handleAddButton} style={{border: '3px solid green'}}>Add To Cart</button>
        </div>
     );
}
 
export default Product;