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
                               key={hallUser.hallId} style={{backgroundColor:"black",width:"50",border:"solid white",borderWidth:"0.5 px"}}>
                    <span style={{color:"silver"}}>  Hall User Id: {hallUser.hallUserId} </span><br/> 
                   <span > Hall User Email : {hallUser.hallUserEmail}  </span><br/>
                


                </ListGroupItem>

            );
        });
    }



    render() {
        const {location}=this.props;
        return (
            <div style={{backgroundColor:"black",height:"1100px"}}>
            <Navbarmain/>
            <Container>
               
                <h3 style={{color:"orange"}}> All Users </h3>

                <ListGroup style={{backgroundColor:"black",border:"solid"}}>

                {this.renderList()}

                </ListGroup>


            </Container>

            </div> );

    }}
function mapStateToProps(state) {
    return {
        hallUsers:state.user.viewAllUsers.viewAllUsers.userData
        //hallUsers:state.movieHalls
    };
}




export default connect(mapStateToProps) (viewUsers);
