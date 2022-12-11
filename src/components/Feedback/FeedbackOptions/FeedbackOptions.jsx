import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackButton type="button" onClick={onLeaveFeedback.good}>
        {options.good}
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onLeaveFeedback.neutral}>
        {options.neutral}
      </FeedbackButton>
      <FeedbackButton type="button" onClick={onLeaveFeedback.bad}>
        {options.bad}
      </FeedbackButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.shape({
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
  }),
};
