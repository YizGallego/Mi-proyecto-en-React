import React from 'react';

function Header({ cartItemCount }) {
  return (
    <header className="header" id="header">
      <div className="menu container">
        <a href="#" className="logo">MI PROYECTO EN REACT</a>
        <nav className="navbar">
          <ul>
            <li><a href="#header">Inicio</a></li>
            <li><a href="#lista-1">Productos</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </nav>
        <div>
          <ul>
            <li className="submenu">
              <img src="/car.svg" id="img-carrito" alt="carrito" />
              <span id="cantidad-carrito">{cartItemCount}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-content container">
        <div className="header-img">
        <img src={`${process.env.PUBLIC_URL}/yizfoto.png`} alt="yizfoto" />
        </div>
        <div className="header-txt">
          <h1>Hola! soy Yiz, creadora de Love Candles</h1>
          <p>Quiero crear velas magicas para que con su luz pidas un deseo</p>
          <a href="#lista-1" className="btn-1">Compra ahora</a>
        </div>
      </div>
    </header>
  );
}

export default Header;