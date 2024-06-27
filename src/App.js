import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import IconSection from './components/IconSection';
import { productos } from './data/productos';
import './styles/App.css';


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, cantidad: Math.max(1, parseInt(quantity)) } : item
    ));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cartItemCount={cart.reduce((acc, item) => acc + item.cantidad, 0)} />
      <main>
        <ProductList products={productos} addToCart={addToCart} />
        <Cart 
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          emptyCart={emptyCart}
        />
      </main>
      <BlogSection />
      <IconSection />
      
      <Footer />
  
    </div>
  );
  
}

export default App;