
import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity, emptyCart }) {
  const total = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <div id="carrito">
      <table id="lista-carrito">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.imagen} width="50" alt={item.nombre} /></td>
              <td>{item.nombre}</td>
              <td>{item.precio} CLP</td>
              <td>
                <input 
                  type="number" 
                  value={item.cantidad} 
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  min="1"
                />
              </td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="total-carrito">Total: {total} CLP</div>
      <button id="Vaciar-carrito" className="btn-2" onClick={emptyCart}>Vaciar Carrito</button>
      <button id="pagar-carrito" className="btn-2">Pagar</button>
    </div>
  );
}

export default Cart;