import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleLogin, setUsername, setPassword, username, password }) => {
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username <input id='username' type="text" value={username} name="Username" onChange={handleUsernameChange} />
      </div>
      <div>
        password <input id='password' type="password" value={password} name="Password" onChange={handlePasswordChange} />
      </div>
      <button id='login-button' type="submit">login</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;
