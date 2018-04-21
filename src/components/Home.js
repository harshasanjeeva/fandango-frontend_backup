import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import history from './History';
import Homemain from './Homemain'

class Home extends Component {

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
      <div >
  
      <div >
        <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">

        <img src={require('../images/1050x171.gif')} width="170" height="30" alt="" />

       

        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Signup</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/">Sign In</NavLink>
            </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Homemain />



      </div>
  
      </div>
    );
  }
}



const mapStateToProps = (user) => {
  console.log("user-->",user)

}


export default withRouter(connect(mapStateToProps)(Home));
