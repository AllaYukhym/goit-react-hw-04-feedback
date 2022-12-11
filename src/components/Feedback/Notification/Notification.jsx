import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export const Notification = ({ message, good, neutral, bad }) => {
  return (
    <>
      {good === 0 && neutral === 0 && bad === 0 && (
        <NotificationText>{message}</NotificationText>
      )}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
