import axios from 'axios';
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


// this is like to make request from this end point https://api.themoviedb.org/3/movie.top_rated
instance.get("/movie.top_rated");
export default instance;