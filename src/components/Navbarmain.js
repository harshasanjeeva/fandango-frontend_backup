import React, { Component } from 'react';
import {  Dropdown,Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {connect} from 'react-redux';

import history from './History';
import '.././App.css';
import {actionreal,actiondel,actionview, signout} from "../actions/loginactions";
import { withRouter } from 'react-router-dom';



class Navbarmain extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
       
          isOpen: false,
          // isOpens: false,
          // isOpensthree: false,
         dropdownOpen: false,
   //       dropdownOpens:false,
          // dropdownOpensthree:false
        };
      }


      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
         dropdownOpen: !this.state.dropdownOpen,
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


         {/*
          <NavbarToggler onClick={this.toggle} />
         */} 


         
            <Nav className="ml-auto"  navbar>


  
                <NavItem >
                    <NavLink onClick={(event) => history.push('/Movies')}    >Movies</NavLink>
                </NavItem>

                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                My Account
                </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Options</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => {
                          var data={user_id:this.props.user_id};
                          this.props.real(data);

                         setTimeout(function(){
                          history.push('/realticket');
                         },3000) 
                          }}>Tickets</DropdownItem>


                      <DropdownItem divider />
                      <DropdownItem onClick={() => {
                    history.push
                    ({
                        pathname: '/myprofile',
                        state: { user_id: this.props.user_id}
                    });
                    var data={user_id:this.props.user_id};
                    this.props.profile(data);
                    setTimeout(function () {
                        history.push
                        ({
                            pathname: '/myprofile'
                        });
                    });

                }}> View Profile</DropdownItem>





                      <DropdownItem divider />
                      <DropdownItem onClick={() => {
                          var data={user_id:this.props.user_id};
                          this.props.profile(data);
                          setTimeout(function () {
                              history.push('/profile');
                          });
                          }}>Edit Profile</DropdownItem>







                    </DropdownMenu>
                  </Dropdown>

                  </Nav>

                  <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav>
                  <NavItem>
                  <NavLink  onClick={() => {
                          this.props.del(this.props.user_id),
                              history.push('/')}}>Delete Account</NavLink>
                  </NavItem>

                <NavItem>
                <NavLink href="/" style={{color:"white"}}
                onClick={() => {
                  this.props.signout(this.props.user_id),
                      history.push('/')
                    
                    }}
                >Sign Out</NavLink>
                </NavItem>


            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
    );
  }
}


const mapDispatchToProps =(dispatch)=> {
    return {
        real : (data) => dispatch(actionreal(data)),
        del : (data) => dispatch(actiondel(data)),
        profile : (data) => dispatch(actionview(data)),
        signout : (data) => dispatch(signout(data))
    };
}

const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        //movie:stores.user.booking.booking_data,
        //theatres:stores.theatres,
        user_id:stores.user.stores.user_id
    };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbarmain));


// <Route exact path="/login" render={() => (
//   <div>
//       <Login/>
//       console.log("done with login");



//   </div>
// )}/>