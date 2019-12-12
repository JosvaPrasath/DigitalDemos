import React, { Component } from "react";

class Login extends Component {
  constructor() {
      super();
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.username === 'admin' && this.state.password === 'admin') {
        this.props.history.push('/home')
    } else {
        alert('Please enter a valid User name and Password');
    }
  }

  validateUserName = () => {
    const { username } = this.state;
    this.setState({
      usernameError:
        username.length > 4 ? null : 'User Name should not be empty and must be longer than 3 characters'
    });
  }

  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError:
        password.length > 4 ? null : 'Password should not be empty and must be longer than 3 characters'
    });
  }

  render() {
    return (
      <div className="form login-form">
        <p className="label">LOGIN HERE</p>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'> User name</label>
            <input id="username"
              className={`form-control ${this.state.usernameError ? 'is-invalid' : ''}`}
              value={this.state.username}
              onBlur={this.validateUserName}
              onChange={event => this.setState({ username: event.target.value }, () => { this.validateUserName() })}
            />
            <div className='invalid-feedback'>{this.state.usernameError}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id="password"
              className={`form-control ${this.state.passwordError ? 'is-invalid' : ''}`}
              value={this.state.password}
              onBlur={this.validatePassword}
              onChange={event => this.setState({ password: event.target.value }, () => { this.validatePassword() })}
            />
            <div className='invalid-feedback'>{this.state.passwordError}</div>
          </div>
          <br></br>
          <div>
            <button type='submit' className='btn btn-success btn-block'>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
