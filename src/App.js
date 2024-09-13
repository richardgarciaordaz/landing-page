import React from "react";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Nosotros />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default App;
