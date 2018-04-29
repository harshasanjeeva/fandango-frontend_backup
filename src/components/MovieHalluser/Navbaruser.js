import React, { Component } from 'react';
import { Button, Dropdown,Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from ".././Login";
import history from '.././History';
import Homemain from '.././Homemain'
import '../.././App.css';
import {actiongetmoviehall, actiongetmovies, actionmovieuserlogin,setstatus} from "../../actions/loginactions";



class Navbaruser extends Component {

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
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>



                                <NavItem>
                                    <NavLink onClick={(event) => {
                                       // this.props.getallmovies(this.state);
                                        history.push('/allmovies')} }>Add halls</NavLink>
                                </NavItem>


                                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle nav caret>
                                        My Account
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Options</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/">Tickets</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/payments">Make Payments</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/profile" onclick="">Profile</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>


                                <NavItem>
                                    <NavLink
                                             onClick={(event) => {
                                                 this.props.logi("logout");
                                                 } }
                                             href="/"
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

      logi : (data) => dispatch(setstatus(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log(stores.user.stores.movieuserlogin_status);
    return {
        login_status :stores.user.stores.movieuserlogin_status,


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbaruser);


// <Route exact path="/login" render={() => (
//   <div>
//       <Login/>
//       console.log("done with login");



//   </div>
// )}/>