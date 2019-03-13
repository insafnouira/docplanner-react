import React from 'react';
import './navbar.css';
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

export default class Example extends React.Component {
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
        <Navbar color="light" light expand="md " fixed="top" >
          <NavbarBrand href="/">
             <img  className='logo' src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='logo'/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className='nav'>
            <Nav className="ml-auto " navbar >
              <NavItem>
                <NavLink href="/components/" className='nav1 active aaa'> About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar navv>
                <DropdownToggle nav caret>
                Departement
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   Marketing & PR
                  </DropdownItem>
                  <DropdownItem>
                    Customer Success & Sales
                  </DropdownItem>
                  <DropdownItem>
                    IT, Product, Design & UX
                  </DropdownItem>
                  <DropdownItem>
                   Finance & Administration
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    HR & More
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}