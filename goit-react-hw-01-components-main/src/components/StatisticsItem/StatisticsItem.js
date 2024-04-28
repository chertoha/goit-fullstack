import PropTypes from 'prop-types';

import { StatLabel, StatPercentage } from './StatisticsItem.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
