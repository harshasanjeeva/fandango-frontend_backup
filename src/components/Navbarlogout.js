import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { withRouter } from 'react-router-dom';
//import Login from "./Login";
//import history from './History';
//import Homemain from './Homemain'



class Navbarlogout extends Component {

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
                <NavLink href="/signup" to="/signup">Signup</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/login">Sign In</NavLink>
            </NavItem>

                <NavItem>
                    <NavLink href="/movieuser">Movie User</NavLink>
                </NavItem>

            <NavItem>
                <NavLink href="/adminLogin">Admin Panel</NavLink>
            </NavItem>




            </Nav>
          </Collapse>
        </Navbar>




      </div>


  
      </div>
    );
  }
}






export default withRouter((Navbarlogout));