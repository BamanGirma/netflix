import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Row from './Row/Row'
import requests from './requests'
import Banner from './Banner/Banner'
import Nav from './Nav/Nav'
function App() {

  return (
    <div className='App'>
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = 'Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documenteries Movies' fetchUrl={requests.fetchDocumenteries}/>
    </div>
  )
}

export default App
