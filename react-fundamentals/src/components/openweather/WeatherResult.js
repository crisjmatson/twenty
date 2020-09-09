import React, { useState } from "react";
import {
	Jumbotron,
	Container,
	Button,
	ButtonDropdown,
	DropdownToggle,
	Card,
	CardTitle,
} from "reactstrap";

const testPull = {
	weather: {
		coord: { lon: -74, lat: 40.72 },
		weather: [
			{ id: 800, main: "Clear", description: "clear sky", icon: "01n" },
		],
		base: "stations",
		main: {
			temp: 295.72,
			feels_like: 297.38,
			temp_min: 294.82,
			temp_max: 296.48,
			pressure: 1023,
			humidity: 83,
		},
		visibility: 10000,
		wind: { speed: 2.6, deg: 120 },
		clouds: { all: 1 },
		dt: 1599617410,
		sys: {
			type: 1,
			id: 4610,
			country: "US",
			sunrise: 1599561027,
			sunset: 1599607015,
		},
		timezone: -14400,
		id: 5128581,
		name: "New York",
		cod: 200,
	},
};

const WeatherResult = (yuck) => {
	const [dropdownClosed, setDropDown] = useState(false);
	const [unit, setUnit] = useState(true);
	console.log(yuck.weather);

	const toggle = (e) => {
		e.preventDefault();
		setDropDown(!dropdownClosed);
	};

	const kToC = (num) => num - 273.15;
	const kToF = (num) => (num - 273.15) * 1.8 + 32;

	let tempF = kToF(yuck.weather.main.temp).toFixed(2);
	let tempC = kToC(yuck.weather.main.temp).toFixed(2);
	let name = yuck.weather.name;
	let main = yuck.weather.weather[0].main;
	let description = yuck.weather.weather[0].description;

	const switchUnit = (e) => {
		e.preventDefault();
		setUnit(!unit);
	};

	return (
		<Jumbotron fluid>
			<Container fluid>
				<h1 className="display-3">
					{name}
					{unit ? (
						<div>
							{tempF}
							<h6>farenheit</h6>
						</div>
					) : (
						<div>
							{tempC}
							<h6>centigrade</h6>
						</div>
					)}
				</h1>
				<h6 className="lead">
					{main}, {description}
				</h6>

				<ButtonDropdown>
					<Button onClick={(e) => switchUnit(e)} id="caret" color="primary">
						Switch
					</Button>

					<DropdownToggle caret color="primary" onClick={(e) => toggle(e)} />
				</ButtonDropdown>
				{dropdownClosed ? (
					<div>
						<br />
						<Card>
							<CardTitle>stretch info goals</CardTitle>
						</Card>
					</div>
				) : (
					<div></div>
				)}
			</Container>
		</Jumbotron>
	);
};

export default WeatherResult;
