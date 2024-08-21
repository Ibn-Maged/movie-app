import { useContext } from "react"
import { moviesContext } from "../contexts/MoviesContextProvider"
import Movie from "./Movie"

const Movies = () => {
    const { movies } = useContext(moviesContext);
    if(movies.length == 0) return <div>Loading</div>
    return (
      <div className="d-flex flex-wrap justify-content-between gap-5">
        {movies.map((movie, index)=><Movie title={movie.title} poster_path={movie.poster_path} id={index} customImage={movie.customImage} key={index}></Movie>)}
      </div>
    )
}

export default Movies