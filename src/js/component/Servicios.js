import React from "react";
import servicio1 from '../../img/servicio1.png';
import servicio2 from '../../img/servicio2.png';
import servicio3 from '../../img/servicio3.png';
import flower from '../../img/flow.png';

const Servicios = () => {
  return (
    <main id="servicios" className="services py-5">
      <img src={flower} alt="flor-purple" className="flower-img d-none d-md-block" style={{ position: 'absolute', top: 0, right: 0, height: '100px' }} />
      <div className="service-content container text-center">
        <h2>Tratamientos Disponibles</h2>
        <p>Mímate con nuestros tratamientos personalizados...</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={servicio1} alt="Tratamientos Corporales" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Tratamientos Corporales</h3>
                <p className="card-text">Tratamientos espaciales para necesidades específicas...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={servicio2} alt="Tratamientos Faciales" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Tratamientos Faciales</h3>
                <p className="card-text">Nuestros tratamientos faciales están diseñados...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={servicio3} alt="Depilación Láser" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Depilación Láser</h3>
                <p className="card-text">Nuestros servicios de depilación láser ofrecen...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Servicios;
