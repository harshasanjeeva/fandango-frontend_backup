import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {actionmovies, actiongetmovies, addHall,addUserToHall} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "../History";


class addUser extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email:'',
            password:'',
            confPassword:''

        };
    }



    render() {
        const {location}=this.props;
        return (
            <Container>
                <Navbarmain/>
                <h3> Add User to Hall {location.state.hallId}</h3>

                <FormGroup style={{marginLeft:"20px"}}>
                    <Input
                        type="text"
                        label="Enter Email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({
                                email: event.target.value
                            });
                        }}
                    />
                    <br/>
                    <Input
                        type="password"
                        label="Enter Password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({
                                password: event.target.value
                            });
                        }}
                    /><br/>
                    <Input
                        type="text"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        value={this.state.confPassword}
                        onChange={(event) => {
                            this.setState({
                                confPassword: event.target.value
                            });
                        }}
                    />
                    <br/>
                    <Button onClick={(event)=>{
                        var data={email:this.state.email, password: this.state.password,hallId:location.state.hallId};
                        this.props.addUserToHall(data);

                    }}>
                        Add
                    </Button>
                </FormGroup>


            </Container>

        );

    }}
function mapStateToProps(state) {
    return {
        movieHalls:state.movieHalls
    };
}

const mapDispatchToProps =(dispatch)=> {
    return {
        addUserToHall : (data) => dispatch(addUserToHall(data))
    };
}


export default connect(mapStateToProps,mapDispatchToProps) (addUser);
