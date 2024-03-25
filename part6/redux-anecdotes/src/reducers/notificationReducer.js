const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': 
      return action.notification;
    case 'HIDE_NOTIFICATION':
      return null; 
    default:
      return state;
  }
};

export const setNotificationAction = (notification, displayTime) => { 
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION', 
      notification,
    });

    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION',
      });
    }, displayTime * 1000);
  };
};

export default notificationReducer;
