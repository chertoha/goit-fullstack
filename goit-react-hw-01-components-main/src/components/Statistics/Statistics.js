import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import randomColor from 'utils/randomColor';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import { Title, List, ListItem } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Box bg="secondaryBgd" pt={6} pb={6}>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} bgdColor={randomColor()}>
              <StatisticsItem label={label} percentage={percentage} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
