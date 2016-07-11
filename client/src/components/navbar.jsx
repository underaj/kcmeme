import React from 'react';

export const Navbar = (props) => (
  <nav className="navbar navbar-inverse bg-inverse navbar-static-top">
    <div className="container">
      <ul className="nav navbar-nav navbar-left">
       <li className="nav-item active">
         <a className="nav-link">KC PROTIPS</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">Hello {props.user}!</a>
       </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <button type="button" className="btn btn-default navbar-btn">Sign in</button>
        </li>
      </ul>
    </div>
  </nav>
);

