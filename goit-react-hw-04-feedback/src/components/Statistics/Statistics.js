import PropTypes from 'prop-types';
import Box from 'components/Box';
import Notification from 'components/Notification';
import { StatList, StatListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box>
      {total ? (
        <>
          <StatList>
            <StatListItem>
              <p>Good: {good}</p>
            </StatListItem>
            <StatListItem>
              <p>Neutral: {neutral}</p>
            </StatListItem>
            <StatListItem>
              <p>Bad: {bad}</p>
            </StatListItem>
          </StatList>

          <StatList>
            <StatListItem>
              <p>Total: {total}</p>
            </StatListItem>
            <StatListItem>
              <p>Positive feedback: {positivePercentage}%</p>
            </StatListItem>
          </StatList>
        </>
      ) : (
        <Notification message="There is no feedback" type="failure" />
      )}
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
