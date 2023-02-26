import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={css.title}>{title}</h3>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
