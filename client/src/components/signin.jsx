import React from 'react';

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  sendSignInForm() {
    this.props.signin({username: this.state.username, password: this.state.password});
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
        <input className="signin-input" type="text" onChange={ (event) => this.updateUserForm(event.target.value) } value={this.state.username} />
        Password
        <input className="signin-input" type="password" onChange={ (event) => this.updatePassForm(event.target.value) } value={this.state.password} />
        <button onClick={this.sendSignInForm.bind(this)}>
          Sign in
        </button>
      </div>
    );
  }
}
