import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Testimonios from "./Testimonios";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header/>
			<Servicios/>
			<Nosotros/>
			<Testimonios/>
			<Footer/>
		</div>
	);
};

export default Home;
