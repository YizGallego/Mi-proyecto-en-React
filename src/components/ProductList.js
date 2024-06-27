import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <section className="products container" id="lista-1">
      <h2>Productos</h2>
      <div className="product-content">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;