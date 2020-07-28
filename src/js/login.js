
import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={this.props.onSubmit}>
          <label><h2>User Name:</h2></label>
          <input className="input-div" type="text" placeholder="UserName" type="text" required />
          <label><h2>Password:</h2></label>
          <input className="input-div" type="password" placeholder="Password" required />
          <input className="loginButton" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}


export default Login;
