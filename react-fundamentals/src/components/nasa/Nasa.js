import React, {useState} from "react";
// import NasaDisplay from './NasaDisplay';


// const apiKey = 'pyeLHzbFJFrjMZPgFlCoJPL7cX7st3CscMXUIrS5';

const Nasa = (props) => {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);
	
	
	const fetchResults = () => {
		let current = new Date(Date.now()).toISOString().slice(0,10);
		const baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.lon}&lat=${props.lat}&date=${current}&api_key=pyeLHzbFJFrjMZPgFlCoJPL7cX7st3CscMXUIrS5`;
		console.log('Date', current);
		// https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEYˇ
		// let url = `${baseURL}?date=${current}&q=${search}`
		
		
		fetch(baseURL, 
			{
				method: 'get',
				headers: new Headers
				({
					'Content-Type': 'application/json'
				})
			})
		.then(res => {res.json(); console.log('Response goes here', res)})
		.then(data =>  {setResults(data.response.docs); console.log('DATA should be here', results)})
		.catch(err => console.log(err));
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		fetchResults();
	}


	return (
		<div className="main">
			<div className="mainDiv">
				<form onSubmit={(e) => handleSubmit(e)}>
					<span>Enter Latitude and Longitude (required) : </span>
					<input type="number" name="search" onChange={(e) => setSearch(e.target.value)} required />
				</form>
				{results}
				{/* {
					results.length > 0 ? <NasaDisplay results={results} /> : null
				} */}
			</div>
		</div>
	);


}

export default Nasa;