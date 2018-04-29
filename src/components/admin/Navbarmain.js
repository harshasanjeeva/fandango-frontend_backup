import React, { Component } from 'react';
import { Button, Dropdown,Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from "../Login";
import history from '../History';
import Homemain from '../Homemain'
import '../../App.css';



class Navbarmain extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
       
          isOpen: false,
          isOpens: false,
          isOpensthree: false,
          dropdownOpen: false,
          dropdownOpens:false,
          dropdownOpensthree:false
        };
      }


      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
          dropdownOpen: !this.state.dropdownOpen,
          // dropdownOpen1:!this.state.dropdownOpen1
        });
      }

  render() {
    return (
      <div >
  
      <div >
        <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">

        <img src={require('../../images/1050x171.gif')} width="170" height="30" alt="" />

       

        </NavbarBrand>
          
     
            <Nav className="ml-auto" navbar>


                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                Dashboard
              </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Dashboards</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem href="/admindash">Movie Analytics</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem href="/adminanalytics">User Analytics</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>

            </Nav>
        
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav>
                <NavItem>
                <NavLink href="/" style={{color:"silver"}}>Sign Out</NavLink>
                </NavItem>



            </Nav>
          </Collapse>
        </Navbar>




      </div>


  
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {
        user:state.user
    };

}


export default connect(mapStateToProps)(Navbarmain);


// <Route exact path="/login" render={() => (
//   <div>
//       <Login/>
//       console.log("done with login");



//   </div>
// )}/>