import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, click }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          onClick={() => click(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func,
};

export default FeedbackOptions;
