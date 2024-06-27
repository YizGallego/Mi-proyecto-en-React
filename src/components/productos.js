import React from 'react';

  function Productos() {
    return (
      <main className="products container" id="lista-1">
        <h2>Productos</h2>
        <div className="product-content"/>
          <div className="product">
            <img src={`${process.env.PUBLIC_URL}/1.png`} alt="Vela Ruda" />
            <div className="product-txt">
              <h3>Vela Ruda</h3>
              <p>Vela con aroma a salvia, abundante Ruda e intencionada para bloquear energías negativas.</p>
              <p className="precio">$5.000 CLP</p>
              <a href="#" className="agregar-carrito btn-2" data-id="1">Agregar al carrito</a>
            </div>
          </div>
  
          <div className="product">
                <img src={`${process.env.PUBLIC_URL}/2.png`} alt="CABEZA BUDA"/>
                <div class="product-txt">
                    <h3>CABEZA BUDA</h3>
                    <p>Vela con aroma a elección.</p>
                    <p class="precio">$3.500 CLP</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="2">Agregar al carrito</a>
                </div>
            </div>

            <div class="product">
                <img src={`${process.env.PUBLIC_URL}/3.png`} alt="ANGEL"/>
                <div class="product-txt">
                    <h3>ANGEL</h3>
                    <p>Vela de Angel con aroma a elección.</p>
                    <p class="precio">$2.500 CLP</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="3">Agregar al carrito</a>
                </div>
            </div>

            <div class="product">
                <img src={`${process.env.PUBLIC_URL}/4.png`} alt="AGATA FLORES"/>
                <div class="product-txt">
                    <h3>AGATA FLORES</h3>
                    <p>Torzo de mujer con flores bañadas en aroma a elección.</p>
                    <p class="precio">$6.500 CLP</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="4">Agregar al carrito</a>
                </div>
            </div>

            <div class="product">
                <img src={`${process.env.PUBLIC_URL}/5.png`} alt="VIRGEN MARIA"/>
                <div class="product-txt">
                    <h3>VIRGEN MARIA</h3>
                    <p>Vela con aroma a elección.</p>
                    <p class="precio">$5.500 CLP</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="5">Agregar al carrito</a>
                </div>
          
          <div className="product">
            <img src={`${process.env.PUBLIC_URL}/6.png`} alt="Vela para masaje" />
            <div className="product-txt">
              <h3>VELA PARA MASAJE</h3>
              <p>Vela para masajes con hidratación profunda, Aroma a elección.</p>
              <p className="precio">$5.500 CLP</p>
              <a href="#" className="agregar-carrito btn-2" data-id="6">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default Productos;