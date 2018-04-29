import React, {Component} from 'react';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "../History";
import Navbarmain from '../Navbarlogout';
import {actionAdminLogin, actiongetmovies, getMovieHalls} from '../../actions/loginactions';
import { withRouter } from 'react-router-dom';

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
        this.props.getMovies();
        setTimeout(function () {
            history.push
            ({
                pathname: '/adminMainPage',
                state:""
            });
        },6000);
    }


    render() {



        return (            <div style={{backgroundColor:"black" ,height: "700px !important"}}>
        <Navbarmain />
        <br />
        <br />
        <Row style={{backgroundColor:"black" ,height: "600px"}}>
        
        <Col> 
        <img src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png" width="320" height="140" alt="" />
        
        </Col>
        <Col>
        <br />
  
        <Card style={{backgroundColor:"black", border: "solid",
        borderColor: "white", height:"350px", width:"451px"}}>
        <div>
            <div>
            
            </div>
            <div >
            </div>

            <div >
                <form>
                    <div >
                    <h1 style={{color:"white"}}>FANDANGO-VIP </h1>
                   
                        <h2 style={{color:"orange"}}>Admin Login</h2>
                    </div>
                    <p style={{paddingLeft:10,float:"left" ,color:"white"}}>Email </p>
                    <div style={{paddingLeft:100,paddingRight:100 }}>
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
<br />
                    <p style={{paddingLeft:10,float:"left" ,color:"white"}}>Password </p>
                    <div className="form-group"  style={{paddingLeft:100,paddingRight:100 }}>
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
                    }}>Admin       Login
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
        getMovieHalls: () => dispatch(getMovieHalls()),
        getMovies : (data) => dispatch(actiongetmovies(data))
    };
}
const mapStateToProps =(state)=> {
    return state
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(adminHome));
