import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const moviesContext = createContext();

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const discoverPath = "/discover/movie?sort_by=popularity.desc";
const genrePath = "/genre/movie/list?"

const MoviesContextProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [movieGenres, setGenres] = useState([]);

  const addMovie = (movie)=>{
    setMovies([...movies, movie]);
  }
  useEffect(()=>{
    axios.get(url + discoverPath + apiKey).then(res=>setMovies(res.data.results));
    axios.get(url + genrePath + apiKey).then(res=>setGenres(res.data.genres));
  }, [])

  return (
    <moviesContext.Provider value={{movies, movieGenres, addMovie }}>
        {children}
    </moviesContext.Provider>
  )
}

export default MoviesContextProvider