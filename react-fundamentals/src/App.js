import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nasa from "./components/nasa/Nasa";
import OpenWeather from "./components/openweather/Openweather";
import Zomato from "./components/zomato/Zomato";

https://github.com/crisjmatson/24HourProject

function App() {
	return (
		<div className="App">
			PAGE HEADER
			<Nasa />
			<OpenWeather />
			<Zomato />
		</div>
	);
}

export default App;
