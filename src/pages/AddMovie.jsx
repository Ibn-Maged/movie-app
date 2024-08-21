import { useContext } from "react"
import { moviesContext } from "../contexts/MoviesContextProvider"
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const { addMovie } = useContext(moviesContext);
  const navigate = useNavigate();
  const movie = {};
  const handleSubmit = (e) =>{
    e.preventDefault();
    movie.title = e.target.title.value;    
    movie.release_date = e.target.releaseDate.value;
    movie.vote_average = parseFloat(e.target.rating.value);
    movie.overview = e.target.overview.value;
    const genres = document.querySelectorAll(".form-check-input");
    const genre_ids = [];
    for(let i = 0; i < genres.length; ++i){
      if(genres[i].checked){
        genre_ids.push(parseInt(genres[i].value));
      }
    }
    movie.genre_ids = genre_ids;
    const id = addMovie({...movie});
    navigate(`/details/${id}`)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      movie.customImage = reader.result;
    };
      reader.readAsDataURL(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Movie Title</label>
        <input type="text" className="form-control" id="title" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="releaseDate" className="form-label">Release Date</label>
        <input type="date" className="form-control" id="releaseDate" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="text" className="form-control" id="rating" required/>
      </div>
      <div className="d-flex flex-wrap mb-3 col-12">
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="action" value="28"/>
          <label className="form-check-label" htmlFor="action">Action</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="adventure" value="12"/>
          <label className="form-check-label" htmlFor="adventure">Adventure</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="animation" value="16"/>
          <label className="form-check-label" htmlFor="animation">Animation</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="comedy" value="35"/>
          <label className="form-check-label" htmlFor="comedy">Comedy</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="crime" value="80"/>
          <label className="form-check-label" htmlFor="crime">Crime</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="documentary" value="99"/>
          <label className="form-check-label" htmlFor="documentary">documentary</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="drama" value="18"/>
          <label className="form-check-label" htmlFor="drama">Drama</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="family" value="10751"/>
          <label className="form-check-label" htmlFor="family">Family</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="fantasy" value="14"/>
          <label className="form-check-label" htmlFor="fantasy">Fantasy</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="history" value="36"/>
          <label className="form-check-label" htmlFor="history">History</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="horror" value="27"/>
          <label className="form-check-label" htmlFor="horror">Horror</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="music" value="10402"/>
          <label className="form-check-label" htmlFor="music">Music</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="mystery" value="9648"/>
          <label className="form-check-label" htmlFor="mystery">Mystery</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="romance" value="10749"/>
          <label className="form-check-label" htmlFor="romance">Romance</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="scienceFiction" value="878"/>
          <label className="form-check-label" htmlFor="scienceFiction">Science Fiction</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="tvMovie" value="10770"/>
          <label className="form-check-label" htmlFor="tvMovie">TV Movie</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="thriller" value="53"/>
          <label className="form-check-label" htmlFor="thriller">Thriller</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="war" value="10752"/>
          <label className="form-check-label" htmlFor="war">War</label>
        </div>
        <div className="form-check form-check-inline col-1">
          <input className="form-check-input" type="checkbox" id="western" value="37"/>
          <label className="form-check-label" htmlFor="western">Western</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="overview" className="form-label">Overview</label>
        <textarea type="text" className="form-control" id="overview" style={{height:"150px"}} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="image">Movie Poster</label>
        <input type="file" className="form-control" id="image" onChange={handleImageChange} required/>
      </div>
      <button type="submit" className="btn btn-primary">Add Movie</button>
    </form>
  )
}
