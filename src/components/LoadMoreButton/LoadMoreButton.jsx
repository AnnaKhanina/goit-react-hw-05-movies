import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreButton;

LoadMoreButton.propType = {
  onClick: PropTypes.func.isRequired,
};