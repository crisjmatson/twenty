import React, { useState } from "react";
import WeatherResult from "./WeatherResult";
const base = "http://api.openweathermap.org/data/2.5/weather";
const key = "fa3d2da352ac2f3a043c92d63aff4a5b";

const OpenWeather = (props) => {
	const [weather, setWeather] = useState();
	const longitude = props.lon;
	const latitude = props.lat;

	console.log(longitude, latitude);

	const fetcher = (e) => {
		e.preventDefault();
		let url = `${base}?lat=${latitude}&lon=${longitude}&appid=${key}`;
		fetch(url)
			.then((res) => {
				console.log(res, url);
				return res.json();
			})
			.then((resolve) => {
				console.log(resolve);
				//setWeather(JSON.stringify(resolve));
				setWeather(resolve);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<button onClick={(e) => fetcher(e)}>Show</button>
			<WeatherResult weather={weather} />
		</div>
	);
};

export default OpenWeather;
