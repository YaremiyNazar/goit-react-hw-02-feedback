import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ allStates, title, total, positivePersentage }) => (
  <div className={css.section}>
    <h3 className={css.title}>{title}</h3>
    <p>Good: {allStates.good}</p>
    <p>Neutral: {allStates.neutral}</p>
    <p>Bad: {allStates.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePersentage}%</p>
  </div>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  title: PropTypes.string,
  positivePersentage: PropTypes.number.isRequired,
  allStates: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),


};
export default Statistics;
