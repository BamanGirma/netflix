const API_KEY = 'e3614a790faf2a84e32ee94e46565642'
const requests = {
    fetchTrending: `/trending/all/week?api_key=e3614a790faf2a84e32ee94e46565642&language=en-US`,
    fetchNetflixOriginals : `https://api.themoviedb.org/3/discover/tv?api_key=e3614a790faf2a84e32ee94e46565642&with_networks=213`,
    fetchTopRatedMovies : `/tv/top_rated?api_key=e3614a790faf2a84e32ee94e46565642&language=en-US&page=1`,
    fetchActionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=e3614a790faf2a84e32ee94e46565642&with_genres=28`,
    fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=e3614a790faf2a84e32ee94e46565642&with_genres=35
`,
    fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=e3614a790faf2a84e32ee94e46565642&with_genres=27`,
    fetchRomanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=e3614a790faf2a84e32ee94e46565642&with_genres=10749`,
    fetchDocumenteries : `https://api.themoviedb.org/3/discover/movie?api_key=e3614a790faf2a84e32ee94e46565642&with_genres=99`
    
};

export default requests