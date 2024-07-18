import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
