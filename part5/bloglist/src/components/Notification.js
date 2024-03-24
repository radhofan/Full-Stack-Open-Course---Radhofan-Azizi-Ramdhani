import React from 'react';
import PropTypes from 'prop-types';

const notificationStyle = {
  color: 'white',
  fontSize: 20,
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const errorStyle = {
  ...notificationStyle,
  background: 'red'
};

const successStyle = {
  ...notificationStyle,
  background: 'green'
};

const Notification = ({ errorMessage, successMessage }) => {
  if (!errorMessage && !successMessage) {
    return null;
  } else if (successMessage) {
    return (
      <div id='success' style={successStyle}>
        {successMessage}
      </div>
    );
  } else {
    return (
      <div id='error' style={errorStyle}>
        {errorMessage}
      </div>
    );
  }
};

Notification.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
};

export default Notification;
