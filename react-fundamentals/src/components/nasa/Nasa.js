import React from "react";
import NasaDisplay from './NasaDisplay';


const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const apiKey = 'pyeLHzbFJFrjMZPgFlCoJPL7cX7st3CscMXUIrS5';

const Nasa = () => {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);


	const fetchResults = () => {
		// https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEYˇ
		const handleSubmit = (e) => {
			e.preventDefault();
		}

		fetch(url)
			.then(res => res.json())
			.then(data => setResults(data.response.docs))
			.catch(err => console.log(err));
	};



	return (
		<div className="main">
			<div className="mainDiv">
				<form onSubmit={(e) => handleSubmit(e)}>
					<span>Enter a single search term (required) : </span>
					<input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
				</form>
				{
					results.length > 0 ? <NasaDisplay results={results} /> : null
				}
			</div>
		</div>
	);


}

export default Nasa;