
import React from "react";

class Login extends React.Component {
  
  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form >
          <label><h2>User Name:</h2></label>
          <input className="input-div" type="text" placeholder="username" type="text" required />
          <label><h2>Password:</h2></label>
          <input className="input-div" type="password" placeholder="password" required />
          <input className="loginButton" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
