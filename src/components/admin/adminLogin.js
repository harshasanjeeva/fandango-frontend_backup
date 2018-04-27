import React, {Component} from 'react';
import {actionlogin} from '../../actions/loginactions';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "../History";
import Navbarmain from '../Navbarlogout';
//import {actionAdminLogin} from '../../actions/actionAdminLogin';


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
        if(this.state.email==="admin" && this.state.password==="admin")
        {
            this.setState({modal:true});
            history.push
            ({
                pathname: '/adminHome',
                state: { modal: this.state.modal }
            });
        }
    }


    render() {

        if (this.props.login_status) {
            var d = {movies: ''};
            this.props.getmovies(d);
            setTimeout(function(){ history.push('/movies') }, 800);
        }


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
                                                onClick={() => {
                                                    this.adminLogin()
                                                }}>
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

/*const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionAdminLogin(data))
    };
}*/
const mapStateToProps =(state)=> {
    return state
}
export default connect(mapStateToProps)(adminHome);
