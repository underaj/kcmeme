import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse fluid staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">KC PROTIPS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav>
            <Navbar.Text>
              Signed in as: {this.props.user}!
            </Navbar.Text>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={2} title="Log In" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Action</MenuItem>
              <MenuItem eventKey={2.2}>Another action</MenuItem>
              <MenuItem eventKey={2.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

