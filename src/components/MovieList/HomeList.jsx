import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeList = ({ movies, state }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { title, id } = movie;
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={state}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeList;

HomeList.propType = {
  state: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
