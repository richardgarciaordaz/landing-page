import React from "react";
import misionBG from '../../img/misionBG.png';

const Nosotros = () => {
  return (
    <section id="nosotros" className="mision py-5 text-white" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${misionBG}) center/cover no-repeat`,
      backgroundAttachment: 'fixed'
    }}>
      <div className="container text-center">
        <h2 className="mb-4">Descubre nuestra historia y misión</h2>
        <p>En Dgreys, nos dedicamos a brindar tratamientos faciales y corporales de calidad...</p>
        <a href="#" className="btn btn-primary">Conoce más</a>
      </div>
    </section>
  );
};

export default Nosotros;
