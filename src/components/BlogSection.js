import React from 'react';

function BlogSection() {
  return (
    <section className="blog container">
      <div className="blog-1">
        <img src="/b1.png" alt="Blog 1" />
        <h3>Blog 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia sed aspernatur? Quos inventore optio consectetur odit beatae rerum qui sit, expedita repellendus? Dicta, facere nisi! Consequatur eius beatae delectus.</p>
      </div>

      <div className="blog-1">
        <img src="/b2.png" alt="Blog 2" />
        <h3>Blog 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia sed aspernatur? Quos inventore optio consectetur odit beatae rerum qui sit, expedita repellendus? Dicta, facere nisi! Consequatur eius beatae delectus.</p>
      </div>

      <div className="blog-1 blog-3">
        <img src="/b3.png" alt="Ferias y Bazares" />
        <h3>Ferias y Bazares</h3>
        <p>En esta sección mantendremos informados a todos nuestros clientes sobre las próximas fechas para ferias y más.</p>
      </div>
    </section>
  );
}

export default BlogSection;