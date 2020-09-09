import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
// import NasaDisplay from './components/nasa/NasaDisplay';
import OpenWeather from "./components/openweather/Openweather";
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
		</div>
	);
}

export default App;