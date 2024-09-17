import React from "react";
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';
import "../../styles/styles.css";

const Testimonios = () => {
  return (
    <section id="testimonios" className="testimonals py-5 bg-light">
      <div className="container text-center">
        <h2>Testimonios</h2>
        <p>Conoce las opiniones de personas reales...</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm testimonial-card">
              <img src={person1} alt="testimonals" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">¡Increíble experiencia!</p>
                <h3 className="card-title">María López</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm testimonial-card">
              <img src={person2} alt="testimonals" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">Los tratamientos hicieron la diferencia.</p>
                <h3 className="card-title">Juan Pérez</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm testimonial-card">
              <img src={person3} alt="testimonals" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">El ambiente es relajante.</p>
                <h3 className="card-title">Sofía González</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
