import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="footer-section">
          <h3>Sobre nosotros</h3>
          <ul className="list-unstyled">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Tratamientos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Políticas</h3>
          <ul className="list-unstyled">
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Términos y Condiciones</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Política de privacidad</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">Política de Cookies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
