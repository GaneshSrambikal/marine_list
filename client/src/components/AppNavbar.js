import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
export default class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="success" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">MARINE_LIST</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://github.com/GaneshSambikal/">
                  Github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://github.com/GaneshSambikal/">
                  Github
                </NavLink>
              </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
