import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen : false
    };
  }
  toggle() {
    this.setState({
      isOpen : false
    });
  }
  render() {
    return (
      <div>
      <Navbar fixed = "top" color="light" light expand="sm">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags">Tags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
