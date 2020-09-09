import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import OpenWeather from "./components/openweather/Openweather";
import ZomatoApp from "./components/zomato/ZomatoApp";

function App() {
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getCoord);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}, [""]);

	const getCoord = (position) => {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
	};

	return (
		<div class="App">
			<Jumbotron fluid className="mainJumbo">
				<Container fluid>
					<h1>you are here.</h1>
				</Container>
			</Jumbotron>
			<Jumbotron fluid className="nasaJumbo">
				<Container fluid className="nasaJumbo">
					<Nasa lat={lat} lon={lon} />
				</Container>
			</Jumbotron>
    
			<OpenWeather lat={lat} lon={lon} />

			<Jumbotron fluid className="zomatoJumbo">
				<Container fluid className="zomatoJumbo">
					<ZomatoApp lat={lat} lon={lon} />
				</Container>
			</Jumbotron>
		</div>
	);
}

export default App;
