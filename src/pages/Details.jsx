import { useContext } from "react";
import { useParams } from "react-router-dom"
import { moviesContext } from "../contexts/MoviesContextProvider";
import star from "../assets/star.svg"
import "../styles/details.css"
const img_path = "https://image.tmdb.org/t/p/w500/";

const Details = () => {
  const params = useParams();
  const {movies, movieGenres} = useContext(moviesContext);
  const currentMovie = movies[params.id];
  return (
    <div className="d-flex col-12 flex-wrap gap-5">
      <div className="col-lg-4">
        {currentMovie.poster_path ? <img src={img_path + currentMovie.poster_path} alt="" className="poster-image img-fluid"/> : 
          <img src={currentMovie.customImage} alt="" className="poster-image img-fluid"/>
        }
      </div>
      <div className="d-flex flex-column col-lg-7">
        <div className="d-flex justify-content-between align-items-center">
          <h1>{currentMovie.title}</h1>
          <div className="secondary-text">
            <img src={star} alt="star" className="star-icon"/> 
            {currentMovie.vote_average.toFixed(1)} / 10
          </div>
        </div>
        <div className="secondary-text mb-5">
          {currentMovie.release_date}
        </div>
        <p className="overview-text">
          {currentMovie.overview}
        </p>
        <div className="d-flex">
          {currentMovie.genre_ids.map(id=>{
            for(let i = 0; i < movieGenres.length; ++i){
              if(movieGenres[i].id == id){
                return <div className="me-4 btn btn-outline-secondary genre">{movieGenres[i].name}</div>;
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Details