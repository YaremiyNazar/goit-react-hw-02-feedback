import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ allStates, total, positivePersentage }) => (
  <div className={css.section}>
    <h3 className={css.title}>Statistics</h3>
    <p>Good: {allStates.good}</p>
    <p>Neutral: {allStates.neutral}</p>
    <p>Bad: {allStates.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePersentage}%</p>
  </div>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
export default Statistics;
