import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

/*
types = success, failure, 
default type

styles in Notification.styled.js
*/

const Notification = ({ message, type }) => {
  return <Message type={type}>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Notification;
