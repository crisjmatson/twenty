// import React from 'react';
// import Nasa from './Nasa';

// const NasaDisplay = (props) => {
//   return (
//     <div>
//       <div>
//         { props.results.map(results => {
//           return (
//             <div key={results._id}>
//             <h2>{results.headline.main}</h2>
//             {results.multimedia.length > 1 ? <img alt="article" src={`https://api.nasa.gov/planetary/earth/imagery${results.multimedia[1].url}`} /> : ''}
//             <p>
//               {results.snippet}
//               <br />
//               {results.keywords.length > 0 ? ' Keywords: ' : ''}
//             </p>
//             <ul>
//               {results.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
//             </ul>
//             <a href={results.web_url}><button>Click ME</button></a>
//           </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }


// export default NasaDisplay;