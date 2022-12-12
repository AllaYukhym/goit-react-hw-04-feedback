import { useState } from 'react';
// import PropTypes from 'prop-types';
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

// class OldApp extends React.Component {
// static defaultProps = {
//   initialGood: 0,
//   initialNeutral: 0,
//   initialBad: 0,
// };
// static propTypes = {
//   initialGood: PropTypes.number.isRequired,
//   initialNeutral: PropTypes.number.isRequired,
//   initialBad: PropTypes.number.isRequired,
// };
// state = {
//   good: this.props.initialGood,
//   neutral: this.props.initialNeutral,
//   bad: this.props.initialBad,
// };
// handleOnClickGood = () => {
// this.setState(prevS => ({
//   good: prevS.good + 1,
// }));
// };
// handleOnClickNeutral = () => {
// this.setState(prevS => ({
//   neutral: prevS.neutral + 1,
// }));
// };
// handleOnClickBad = () => {
// this.setState(prevS => ({
//   bad: prevS.bad + 1,
// }));
// };
// countTotalFeedback = (good, neutral, bad) => {
//   let total = 0;
//   total = good + neutral + bad;
//   return total;
// };
// countPositiveFeedbackPercentage = (good, neutral, bad) => {
//   let positivePercentage = 0;
//   positivePercentage =
//     Math.round((100 / (good + neutral + bad)) * (good + neutral)) + '%';
//   return positivePercentage;
// };
// render() {
// return (
//   <Container>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
//         onLeaveFeedback={{
//           good: this.handleOnClickGood,
//           neutral: this.handleOnClickNeutral,
//           bad: this.handleOnClickBad,
//         }}
//       />
//       <Statistics
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//         total={this.countTotalFeedback(
//           this.state.good,
//           this.state.neutral,
//           this.state.bad
//         )}
//         positivePercentage={this.countPositiveFeedbackPercentage(
//           this.state.good,
//           this.state.neutral,
//           this.state.bad
//         )}
//       />
//     </Section>
//     <Notification
//       message="There is no feedback"
//       good={this.state.good}
//       neutral={this.state.neutral}
//       bad={this.state.bad}
//     />
//   </Container>
// );
// }
// }
