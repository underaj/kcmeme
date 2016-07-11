import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  sendSignUpForm() {
    this.props.signup({username: this.state.username, password: this.state.password});
    this.setState({
      username: '',
      password: ''
    });
  }

  updateUserForm(value) {
    this.setState({
      username: value
    });
  }

  updatePassForm(value) {
    this.setState({
      password: value
    });
  }

  render() {
    return (
      <div className="post-title">
        Username
        <input className="signup-input" type="text" onChange={ (event) => this.updateUserForm(event.target.value) } value={this.state.username} />
        Password
        <input className="signup-input" type="password" onChange={ (event) => this.updatePassForm(event.target.value) } value={this.state.password} />
        <button onClick={this.sendSignUpForm.bind(this)}>
          Signup
        </button>
      </div>
    );
  }
}
