import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="social-icons">
        <img src="/logo.png" alt="logo" />
        <div className="icon-row">
          <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.svg" alt="YouTube" /></a>
          <a href="#"><img src="/tiktok.svg" alt="TikTok" /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Love Candles</h3>
        <ul>
          <li><a href="#">Tienda <span className="info-tooltip">Nuestra tienda esta ubicada en el Mall corazones - Av. Love</span></a></li>
          <li><a href="#">Hazte Mayorista <span className="info-tooltip">Quieres hacer parte de nuestro exclusivo grupo de mayoristas? puedes comprar mas de seis unidades iguales o surtidas y podras acceder a precios unicos. Si deseas mas información escribenos al WhatsApp 0000000</span></a></li>
          <li><a href="#">Contacto <span className="info-tooltip">(+00) 0000000 C.C LOVE C.C LOVE. Local 3033 lovecandles@gmail.com</span></a></li>
        </ul>
      </div>
      <div class="footer-column">
            <h3>Categorías</h3>
            <ul>
                <li><a href="#">Velas</a></li>
                <li><a href="#">Difusores</a></li>
                <li><a href="#">Velas Masajes</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>legal</h3>
            <ul>
                <li><a href="#">Términos y condiciones</a></li>
               
            </ul>
        </div>
        <div class="footer-column">
            <h3>Contáctanos</h3>
            <p>(+00) 0000000</p>
            <p>C.C LOVE</p>
            <p>C.C LOVE. Local 3033</p>
            <p>lovecandles@gmail.com</p>
        </div>
    </footer>
  );
}

export default Footer;