import { useContext } from "react"
import { moviesContext } from "../contexts/MoviesContextProvider"
import Movie from "./Movie"

const Movies = () => {
    const { movies, movieGenres } = useContext(moviesContext);
    console.log(movieGenres);
    if(movies.length == 0) return <div>Loading</div>
    return (
      <div>
        {movies.map((movie)=><Movie {...movie}></Movie>)}
        Movies
      </div>
    )
}

export default Movies