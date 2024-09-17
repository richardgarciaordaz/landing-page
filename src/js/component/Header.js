import React from "react";
import logo from '../../img/logoEstetica.png';
import womanHero from '../../img/womanHero.png';

const Header = () => {
  return (
    <header id="inicio" className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="logo" src={logo} alt="Logo Estética" style={{ height: '100px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicios">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonios">Testimonios</a>
              </li>
            </ul>
            <div className="contact-button d-none d-md-block">
              <a href="#contacto" className="btn btn-primary">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="header-content text-center text-white" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${womanHero}) center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        height: '70vh'
      }}>
        <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
          <h2>Descubre nuestra historia y misión</h2>
          <p>En D'Greys, nos dedicamos a brindar tratamientos faciales y corporales de calidad. Nuestra misión es ayudarte a lucir y sentirte lo mejor posible.</p>
          <a href="#" className="btn btn-primary mt-3">Conoce más</a>
        </div>
      </div>
    </header>
  );
};

export default Header;