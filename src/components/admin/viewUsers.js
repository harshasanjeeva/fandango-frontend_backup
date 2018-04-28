import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {actionmovies, actiongetmovies, addHall,addUserToHall} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "../History";


class viewUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email:'',
            password:'',
            confPassword:''

        };
    }

    renderList()
    {
        return this.props.hallUsers.map((hallUser) => {
            return (

                <ListGroupItem action
                               key={hallUser.hallId}>

                    Hall User Email : {hallUser.hallUserEmail}<br/>
                    Hall User Id: {hallUser.hallUserId}<br/>


                </ListGroupItem>

            );
        });
    }



    render() {
        const {location}=this.props;
        return (
            <Container>
                <Navbarmain/>
                <h3> All Users </h3>

                <ListGroup>

                {this.renderList()}

                </ListGroup>


            </Container>

        );

    }}
function mapStateToProps(state) {
    return {
        hallUsers:state.user.viewAllUsers.viewAllUsers.userData
        //hallUsers:state.movieHalls
    };
}




export default connect(mapStateToProps) (viewUsers);
