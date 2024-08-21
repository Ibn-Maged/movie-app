import { useNavigate } from "react-router-dom";
import "./movie.css"
const Movie = ({title, poster_path, id, customImage}) => {
    const api_img_path = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`details/${id}`);
    }
    return (
    <div className="card col-3" style={{width: "18rem"}} onClick={handleClick}>
    {customImage ? <img src={customImage} className="card-img-top" alt="poster"/> :
     <img src={(api_img_path + poster_path)} className="card-img-top" alt="poster"/>}
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
    </div>
    </div>
    )
}

export default Movie