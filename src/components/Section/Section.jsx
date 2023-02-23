import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <div>{children}</div>;
};
Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
