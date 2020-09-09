const testWeather = {
	coord: { lon: -74, lat: 40.72 },
	weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
	base: "stations",
	main: {
		temp: 295.55,
		feels_like: 297.48,
		temp_min: 294.82,
		temp_max: 296.15,
		pressure: 1023,
		humidity: 83,
	},
	visibility: 10000,
	wind: { speed: 2.1, deg: 140 },
	clouds: { all: 1 },
	dt: 1599618175,
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
};

console.log(testWeather.base);

let num = {
	coord: { lon: -74, lat: 40.72 },
	weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
	base: "stations",
	main: {
		temp: 295.59,
		feels_like: 297.54,
		temp_min: 294.82,
		temp_max: 296.15,
		pressure: 1023,
		humidity: 83,
	},
	visibility: 10000,
	wind: { speed: 2.1, deg: 140 },
	clouds: { all: 1 },
	dt: 1599618836,
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
};



<div class="dropdown">
  <button onClick={(e) => switchUnit(e)}class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  switch unit
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
