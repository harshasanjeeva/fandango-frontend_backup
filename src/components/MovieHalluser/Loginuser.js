import React, {Component} from 'react';
import {actionmovieuserlogin} from '../../actions/loginactions';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "../History";
import Navbarmain from '../Navbarlogout';
import {actiongetmoviehall} from '../../actions/loginactions';
import {actiongetmovies} from '../../actions/loginactions';
import {actiongethalls} from '../../actions/loginactions';


class Loginuser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            modal: false

        };
        this.toggle = this.toggle.bind(this);
        this.navigate = this.navigate.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    navigate() {
        console.log("movies===>")
        setTimeout(function () {
            history.push('/hallinfo');
        }, 3000)

        var d = {
            hallId: this.props.hallId
        }

            this.props.getmovies(d);
            this.props.getallmovies(d);

    }


    render() {

        if (this.props.login_status){
            this.navigate();
        }

        return (
            <div style={{backgroundColor:"black" ,height: "100% !important"}}>
                <Navbarmain />
                <Row>
                    <Col> </Col>
                    <Col>
                        <Card style={{backgroundColor:"black", border: "solid",
                            borderColor: "white"}}>
                            <div>
                                <div>

                                </div>
                                <div >
                                </div>

                                <div >
                                    <form>
                                        <div >
                                            <h1 style={{color:"white"}}>FANDANGO </h1>
                                            <h1>Login</h1>
                                        </div>
                                        <div >
                                            <Input

                                                type="text"
                                                label="Username"
                                                placeholder="Enter email Address"
                                                value={this.state.email}
                                                onChange={(event) => {
                                                    this.setState({
                                                        email: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <br />
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

                                                    this.props.log(this.state);
                                                    this.setState({movieuserlogin_status:false})}}>
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
        log : (data) => dispatch(actionmovieuserlogin(data)),

        getmovies : (data) => dispatch(actiongetmoviehall(data)),
        getallmovies : (data) => dispatch(actiongetmovies(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log(stores.user.stores.movieuserlogin_status);
    return {
        login_status :stores.user.stores.movieuserlogin_status,
        hallId :stores.user.stores.hall_id


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginuser);
