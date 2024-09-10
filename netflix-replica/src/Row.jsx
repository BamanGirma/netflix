import React,{useEffect, useState} from 'react'
import './Row.css'
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies] = useState([]);
  useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        // console.log("response object",request.data.results);
        setMovies(request.data.results)
        return request;
    }
    fetchData();
  },[fetchUrl])
  console.log(movies);
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
            {movies.map((movie) => {
              return(
              <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              />
            );
            })}
      </div>
    </div>
  )
}

export default Row
