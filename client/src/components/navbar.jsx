import React from 'react';
import SignInForm from './signin.jsx';
import SignUpForm from './signup.jsx'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  render() {
    var signInOrLogOut;
    var loggedInAs;
    var signUp;
    if (this.props.username === 'ANONYMOUS') {
      loggedInAs = '';
      signUp = <NavDropdown eventKey={1} title="Sign Up" id="basic-nav-dropdown">
                 <SignUpForm signup={this.props.signup} />
               </NavDropdown>
      signInOrLogOut = <NavDropdown eventKey={2} title="Log In" id="basic-nav-dropdown">
                         <SignInForm signin={this.props.signin} />
                         <MenuItem divider />
                         <MenuItem eventKey={2.2}>Sign Up?</MenuItem>
                       </NavDropdown>
    } else {
      signUp = '';
      loggedInAs = <Navbar.Text>
                     Signed in as: {this.props.username}!
                   </Navbar.Text>
      signInOrLogOut= <NavItem eventKey={2} href="/api/users/signout">Sign Out</NavItem>
    }

    return (
      <Navbar inverse fluid staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">KC PROTIPS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav pullRight>
            {loggedInAs}
            {signUp}
            {signInOrLogOut}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

