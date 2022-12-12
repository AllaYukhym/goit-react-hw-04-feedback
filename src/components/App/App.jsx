import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { Section } from '../Feedback/Section/Section';
import { Statistics } from '../Feedback/Statistics/Statistics';
import { FeedbackOptions } from '../Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from '../Feedback/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnClickGood = () => {
    setGood(prevState => prevState + 1);
  };

  const handleOnClickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleOnClickBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = (good, neutral, bad) => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let positivePercentage = 0;
    positivePercentage =
      Math.round((100 / (good + neutral + bad)) * (good + neutral)) + '%';
    return positivePercentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          onLeaveFeedback={{
            good: handleOnClickGood,
            neutral: handleOnClickNeutral,
            bad: handleOnClickBad,
          }}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        />
      </Section>
      <Notification
        message="There is no feedback"
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </Container>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
