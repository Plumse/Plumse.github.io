import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Navbar.css';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href={process.env.PUBLIC_URL + '/'} id="navbartext">Plamen Mateev</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="homeNavbar" href={process.env.PUBLIC_URL + '/'}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="aboutNavbar" href={process.env.PUBLIC_URL + '/About'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="contactNavbar" href={process.env.PUBLIC_URL + '/Contact'}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar
