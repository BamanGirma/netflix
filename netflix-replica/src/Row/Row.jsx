import React,{useEffect, useState} from 'react'
import './Row.css'
import axios from '../axios'
import youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");
  useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        // console.log("response object",request.data.results);
        setMovies(request.data.results)
        return request;
    } 
    fetchData();
  },[fetchUrl])
  // console.log(movies);
  const opts = {
    height : "390",
    width : "100%",
    playerVars :{
      autoplay : 1,
    }
  };
  const handleClick = (movie) =>{
      if(trailerUrl){
        setTrailerUrl("");
      }else{
      movieTrailer(movie?.title || movie?.name || movie.original_name).then((url) => {
        // to extract query parameters from a URL.
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
      }
  };
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
            {movies.map((movie) => {
              return(
              <img
              onClick={()=>handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
              alt={movie.name}
              />
            );
            })}
      </div>
      <div style={{padding:"40px"}}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  )
}

export default Row
