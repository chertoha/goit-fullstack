import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box as="section" pl={7} pt={5}>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
