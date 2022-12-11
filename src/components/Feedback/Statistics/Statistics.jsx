import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {(good > 0 || neutral > 0 || bad > 0) && (
        <StatisticsList>
          <StatisticsItem>
            <StatisticsText>Good: {good}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Neutral: {neutral}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Bad: {bad}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Total: {total}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>
              Positive feedback: {positivePercentage}
            </StatisticsText>
          </StatisticsItem>
        </StatisticsList>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
