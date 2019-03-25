import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

class Navb extends React.Component {
    constructor(props) {
        super(props);
      }
 
    render() {
    return (
      <div>
         <Navbar color="dark" light expand="md">
          <NavbarBrand style={{color:"#fff"}} href="/">THE<span style={{fontWeight:"bold"}}>ROOM</span></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:"#fff"}} href="/">Recently Add <i className="fa fa-clock-o"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"#fff"}} href="/">Popular Hotels <i className="fa fa-star"></i></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Location
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Kuala Lumpur
                  </DropdownItem>
                  <DropdownItem>
                    Malacca
                  </DropdownItem>
                  <DropdownItem>
                    Goerge Town
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
export default Navb;