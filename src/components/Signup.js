import React, {Component} from 'react';
import PropTypes from 'prop-types';
import history from "./History";
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';
import { Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import Navbarmain from './Navbarlogout';
class Signup extends Component {

   /* static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };*/

    state = {
        email: '',
        name: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            email: '',
            name: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/');
    }

    render() {

        if (this.props.signin){
            alert("sign up successfull");
            this.navigate();
        }
        return (
            <div style={{backgroundColor:"black" ,height: "700px !important"}}>
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
                            <h2 style={{color:"orange"}}>Login</h2>
                        </div>
                        <p style={{paddingLeft:10,float:"left" ,color:"white"}}>Email </p>
                        <div style={{paddingLeft:100,paddingRight:100 }}>
                            <Input
                                
                            type="text"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <br />

                        <p style={{paddingLeft:10,float:"left" ,color:"white"}}>Name </p>
                        <div style={{paddingLeft:100,paddingRight:100 }}>
                            <Input
                                
                            type="text"
                            label="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={(event) => {
                                this.setState({
                                    name: event.target.value
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
                        onClick={() => this.props.Sign(this.state)}>
                        Submit
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
        Sign : (data) => dispatch(actionsign(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.user.signup_status
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);