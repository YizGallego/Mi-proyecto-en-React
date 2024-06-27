import React from 'react';

function IconSection() {
  return (
    <section className="icons-container">
      <div className="icon-item">
        <div className="icon-img">
          <img src="/i1.svg" alt="Icono 1" />
        </div>
        <div className="icon-txt">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi obcaecati deleniti quaerat.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="icon-item">
        <div className="icon-img">
          <img src="/i2.svg" alt="Icono 2" />
        </div>
        <div className="icon-txt">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi obcaecati deleniti quaerat.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="icon-item">
        <div className="icon-img">
          <img src="/i3.svg" alt="Icono 3" />
        </div>
        <div className="icon-txt">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi obcaecati deleniti quaerat.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default IconSection;