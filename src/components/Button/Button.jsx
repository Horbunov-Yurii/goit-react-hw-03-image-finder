
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const LoadMoreButton = ({ handleClick, text }) => {
  return (
    <LoadMoreBtn type="button" onClick={handleClick}>
      {text}
    </LoadMoreBtn>
  );
};


LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};