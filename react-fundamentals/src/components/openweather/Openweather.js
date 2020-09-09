import React, { useState } from "react";
import "./Openweather.css";
import {
	Jumbotron,
	Container,
	Button,
	ButtonDropdown,
	DropdownToggle,
} from "reactstrap";
const base = "http://api.openweathermap.org/data/2.5/weather";
const key = "fa3d2da352ac2f3a043c92d63aff4a5b";

const OpenWeather = (props) => {
	const [weather, setWeather] = useState();
	const [showResults, setShowResults] = useState(false);
	const [dropdownClosed, setDropDown] = useState(false);
	const [unit, setUnit] = useState(true);
	const longitude = props.lon;
	const latitude = props.lat;

	console.log(longitude, latitude);

	const fetcher = (e) => {
		e.preventDefault();
		let url = `${base}?lat=${latitude}&lon=${longitude}&appid=${key}`;
		fetch(url)
			.then((res) => {
				//console.log(res, url);
				return res.json();
			})
			.then((resolve) => {
				//console.log(resolve);
				//setWeather(JSON.stringify(resolve));
				setWeather(resolve);
				console.log(weather);
				displayAll(weather);
			})
			.catch((err) => console.log(err));
	};

	const toggle = (e) => {
		e.preventDefault();
		setDropDown(!dropdownClosed);
	};

	const switchUnit = (e) => {
		e.preventDefault();
		setUnit(!unit);
	};
	const kToC = (num) => num - 273.15;
	const kToF = (num) => (num - 273.15) * 1.8 + 32;

	const displayAll = (weather) => {
		setShowResults(!showResults);
	};

	return (
		<Jumbotron fluid className="openBackWeather">
			<Container fluid>
				{showResults ? (
					<div>
						<h1 className="display-3 whiteTextWeather shadowWeather">
							{weather.name}

							{unit ? (
								<div className="whiteTextWeather">
									{kToF(weather.main.temp).toFixed(2)}&#176;
									<h6>farenheit</h6>
								</div>
							) : (
								<div className="whiteTextWeather">
									{kToC(weather.main.temp).toFixed(2)}&#176;
									<h6>centigrade</h6>
								</div>
							)}
						</h1>
						<h6 className="lead whiteTextWeather">
							{weather.weather[0].main}, {weather.weather[0].description}
						</h6>

						<ButtonDropdown>
							<Button
								onClick={(e) => switchUnit(e)}
								id="caret"
								color="secondary"
							>
								Switch
							</Button>

							<DropdownToggle
								caret
								color="secondary"
								onClick={(e) => toggle(e)}
							/>
						</ButtonDropdown>
						{dropdownClosed ? (
							<div>
								<br />
								<div>
									<ul class="list-group list-group-flush">
										<li class="list-group-item">
											pressure: {weather.main.pressure}
										</li>
										<li class="list-group-item">
											humidity: {weather.main.humidity}%
										</li>
										<li class="list-group-item">
											visibility: {weather.visibility}
										</li>
										<li class="list-group-item">
											wind speed: {weather.wind.speed}
										</li>
									</ul>
								</div>
							</div>
						) : (
							<div></div>
						)}
					</div>
				) : (
					<Button onClick={(e) => fetcher(e)}>current weather..</Button>
				)}
			</Container>
		</Jumbotron>
	);
};

export default OpenWeather;
