import { MovieAboutItemStyled } from 'components/MovieAboutItem/MovieAboutItem.styled';
import { MovieDetailsStyled } from '../pages/MovieDetails.styled';
import { getInfo } from '../services/getMovies';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Hearts } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';


const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getInfo(movieId).then(result => {
      setMovie(result.data);
      setIsLoad(true);
    });
  }, [movieId]);
  const { title, poster_path, release_date, popularity, overview, genres } =
    movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();
  return (
    <div>
      {isLoad ? (
        <>
          <Link to={backLink}>
            <BiArrowBack size="14" color="tomato" />
            <MovieDetailsStyled>
              <span>Back</span>
            </MovieDetailsStyled>
          </Link>
          <MovieAboutItemStyled>
            <img src={imageURL} width="400" alt={title} />
            <div>
              <h1>
                {title} ({releaseYear})
              </h1>
              <h2>Popularity: {Math.round(popularity)} </h2>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              {genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </div>
          </MovieAboutItemStyled>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
        </>
      ) : (
        <Hearts 
          height="80"
          width="80"
          color="tomato"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <Outlet />
    </div>
  );
};

export default MovieInfo;