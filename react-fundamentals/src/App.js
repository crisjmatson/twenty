import React, {useState, useEffect} from "react";
import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
// import NasaDisplay from './components/nasa/NasaDisplay';
import OpenWeather from "./components/openweather/Openweather";
<<<<<<< HEAD
import Zomato from "./components/zomato/Zomato";

// https://github.com/crisjmatson/24HourProject

function App() {
	const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoord);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, ['']);    const getCoord = (position) => {
        {setLat(position.coords.latitude); console.log('Lat goes here', lat)};
		{setLon(position.coords.longitude); console.log('Lon is here', lon)};
    };

	return (
		<div className="App">
			PAGE HEADER
			<Nasa />
			{/* <NasaDisplay /> */}
			<OpenWeather />
			<Zomato />
=======
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

	}, ['']);

	const getCoord = (position) => {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
	};

	return (
		<div>
			<Jumbotron fluid className="mainJumbo">
				<Container fluid className="mainJumbo">
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

>>>>>>> 9af7331eef9188392d7db911bd813c52f38f94d3
		</div>
	);
}

export default App;