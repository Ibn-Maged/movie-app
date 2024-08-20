const Movie = ({title, overview, poster_path, genre_ids, release_date, vote_average, vote_count}) => {
    const api_img_path = "https://image.tmdb.org/t/p/w500/";
    return (
      <div>
        <div>name: {title}</div>
        <div>overview: {overview}</div>
        <div><img src={api_img_path + poster_path} alt="Movie Poster" /></div>
      </div>
    )
}

export default Movie