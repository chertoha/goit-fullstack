import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import { Box } from 'components/Box/Box';

const Section = ({ title, children }) => {
  return (
    <Box bg="bgd" pt={6} pb={6} textAlign={'center'} as="section">
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
