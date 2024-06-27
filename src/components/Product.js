
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.imagen} alt={product.nombre} />
      <div className="product-txt">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <p className="precio">{product.precio} CLP</p>
        <button className="agregar-carrito btn-2" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Product;