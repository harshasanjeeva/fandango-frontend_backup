import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {actionlogin} from '../actions/loginactions';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import { Link } from 'react-router-dom';
//import history from "./history";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            Passwrd: '',
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/');
    }


    render() {

        if (this.props.loggedin===true){
            // {/*<Alert color="primary">*/}
            //     {/*Loggedin Successfully!*/}
            // {/*</Alert>*/}
            this.navigate();
        }






        return (
            <div className="row justify-content-md-center">
                <div>
                    <Navbar color="dark" light expand="md">
                        <NavbarBrand href="/">

                            <img src={require('../images/1050x171.gif')} width="170" height="30" alt="" />
                            <div>

                            </div>



                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

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
                </div>
                <div className="col-md-4-center">
                </div>

                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Enter Address"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.passwrd}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.log(this.state)}>
                                Login
                            </button>



                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.user.login_status,
        // userid
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
