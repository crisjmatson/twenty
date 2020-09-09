import React from 'react';

const NytResults = (props) => {
  return (
    <div>
      <div>
        { props.results.map(result => {
          return (
            <div key={result._id}>
            <h2>{result.headline.main}</h2>
            {result.multimedia.length > 1 ? <img alt="article" src={`https://api.nasa.gov/planetary/earth/imagery${result.multimedia[1].url}`} /> : ''}
            <p>
              {result.snippet}
              <br />
              {result.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            <a href={result.web_url}><button>Click ME</button></a>
          </div>
          )
        })}
      </div>
    </div>
  )
}


export default NasaDisplay;