import React, {Component} from 'react';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "../History";
import Navbarmain from '../Navbarlogout';
import {actionAdminLogin,getMovieHalls} from '../../actions/loginactions';


class adminHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            modal: false
        };
        this.adminLogin = this.adminLogin.bind(this);
    }

    adminLogin() {
        this.props.log(this.state);
        this.props.getMovieHalls();
        setTimeout(function () {
            history.push
            ({
                pathname: '/adminHome'
            });
        },1000);
    }


    render() {



        return (
            <div style={{backgroundColor: "black", height: "100% !important"}}>
                <Navbarmain/>
                <Row>
                    <Col> </Col>
                    <Col>
                        <Card style={{
                            backgroundColor: "black", border: "solid",
                            borderColor: "white"
                        }}>
                            <div>
                                <div>

                                </div>
                                <div>
                                </div>

                                <div>
                                    <form>
                                        <div>
                                            <h1 style={{color: "white"}}>FANDANGO </h1>
                                            <h1 style={{color: "white"}}>Admin Login</h1>
                                        </div>
                                        <div>
                                            <Input

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
                                        <br/>
                                        <div className="form-group">
                                            <Input

                                                type="password"
                                                label="password"
                                                placeholder="Enter Password"
                                                value={this.state.password}
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
                                                onClick={(event) => {
                                                    this.adminLogin()
                                                }}>x
                                                Login
                                            </button>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }


}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionAdminLogin(data)),
        getMovieHalls: () => dispatch(getMovieHalls())
    };
}
const mapStateToProps =(state)=> {
    return state
}
export default connect(mapStateToProps,mapDispatchToProps)(adminHome);
