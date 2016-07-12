import React from 'react';
import SignInForm from './signin.jsx'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  render() {
    var signInOrLogOut;
    var loggedInAs;
    if (this.props.username === 'ANONYMOUS') {
      loggedInAs = '';
      signInOrLogOut = <NavDropdown eventKey={1} title="Log In" id="basic-nav-dropdown">
                         <SignInForm signin={this.props.signin} />
                         <MenuItem divider />
                         <MenuItem eventKey={1.1}>Sign Up?</MenuItem>
                       </NavDropdown>
    } else {
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
            {signInOrLogOut}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

