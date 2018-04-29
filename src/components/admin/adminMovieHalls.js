import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {addHall, getMovieHalls, viewAllUsers} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "../History";


class adminMovieHalls extends Component {

    constructor(props) {
        super(props);

        this.state = {

            hallName:'',
            hallId:'',
            hallAddress:'',
            searchHallName:'',
            type:'add'

        };
    }


    renderTheatres = () =>
    {
        const movieHalls = this.props.movieHalls;
        if (movieHalls.length !== 0 && movieHalls !== null && movieHalls !== undefined)
        {
            var filteredHalls = movieHalls.filter(
                (movieHall) => {
                    return movieHall.hallName.toLowerCase().indexOf(this.state.searchHallName.toLowerCase()) !== -1;
                }
            );


            return filteredHalls.map((movieHall) => {
                return (

                    <ListGroupItem action
                                   key={movieHall.hallId} style={{color:"orange",backgroundColor:"black"}}>

                            {movieHall.hallName}
                            <br/>
                            <Button color="success" onClick={(event)=>{
                                history.push
                                ({
                                    pathname: '/addUser',
                                    state: { hallId: movieHall.hallId }
                                });
                            }}>
                                Add User
                            </Button> &nbsp;
                            <Button onClick={(event)=>{
                                document.getElementById("addHallh3").innerText="Edit Movie Hall";
                                document.getElementById("addHallButton").innerText="Update";
                                document.getElementById("hallId").value=movieHall.hallId;
                                this.state.hallId=document.getElementById("hallId").value;
                                document.getElementById("hallName").value=movieHall.hallName;
                                this.state.hallName=document.getElementById("hallName").value;
                                document.getElementById("hallAddress").value=movieHall.hallAddress;
                                this.state.hallAddress=document.getElementById("hallAddress").value;
                                this.state.type='update';
                                this.props.getMovieHalls();
                                setTimeout(function () {
                                    history.push
                                    ({
                                        pathname: '/adminMainPage'
                                    });
                                },1000)

                            }}>
                                Edit
                            </Button> &nbsp;
                            <Button onClick={(event)=>{
                                var data ={hallId:movieHall.hallId};
                                this.props.viewAllUsers(data);
                                setTimeout(function () {
                                    history.push
                                    ({
                                        pathname: '/viewUsers',
                                        state: { hallId: movieHall.hallId }
                                    });

                                },1000)}}>View Users
                            </Button>


                    </ListGroupItem>

                );
            });

        }


    }


    render() {
        return (
            <div style={{backgroundColor: "black",height:"1100px"}}>
            <Container>
                

                <Row style={{marginTop:"20px",color:"white"}}>
                                Enter Movie Hall Name
                    <Col>
                        <FormGroup style={{marginLeft:"20px"}}>
                            <Input
                            placeholder="Search Movie Hall name"
                             type="text"
                             label="Search Movie Halls"
                             value={this.state.searchHallName}
                             onChange={(event) => {
                                this.setState({
                                    searchHallName: event.target.value
                                });
                            }}
                        />

                        </FormGroup>
                    </Col>

                </Row>

                <Row>
                <Col style={{backgroundColor:"black"}}>
                <ListGroup style={{backgroundColor:"black"}}>
                    {this.renderTheatres()}
                </ListGroup>
                </Col>

                <Col>
                    <h3 id="addHallh3"  style={{color:"white"}}>Add New Movie Hall</h3>
                    <br/>
                    <FormGroup style={{marginLeft:"20px"}}>
                        <Input
                            type="text"
                            id="hallId"
                            label="Enter Hall Id"
                            placeholder="Enter Hall Id"
                            value={this.state.hallId}
                            onChange={(event) => {
                                this.setState({
                                    hallId: event.target.value
                                });
                            }}
                        />
                        <br/>
                        <Input
                            type="text"
                            id="hallName"
                            label="Enter Hall Name"
                            placeholder="Enter Hall Name"
                            value={this.state.hallName}
                            onChange={(event) => {
                                this.setState({
                                    hallName: event.target.value
                                });
                            }}
                        /><br/>
                        <Input
                            type="text"
                            id="hallAddress"
                            label="Enter Hall Address"
                            placeholder="Enter Hall Address"
                            value={this.state.hallAddress}
                            onChange={(event) => {
                                this.setState({
                                    hallAddress: event.target.value
                                });
                            }}
                        />
                        <br/>
                        <Button  id="addHallButton" color="primary" onClick={(event)=> {
                            var data={hallId:this.state.hallId, hallName: this.state.hallName, hallAddress: this.state.hallAddress, type: this.state.type}
                            this.props.addHall(data)
                        }}>
                            Add Hall
                        </Button>

                    </FormGroup>
                </Col>

                </Row>


            </Container>

            </div> );

    }}
function mapStateToProps(state) {
    return {
        movieHalls:state.user.movieHalls.movieHalls.hallData
    };
}
const mapDispatchToProps =(dispatch)=> {
    return {
        addHall : (data) => dispatch(addHall(data)),
        viewAllUsers : (data) => dispatch(viewAllUsers(data)),
        getMovieHalls: () => dispatch(getMovieHalls())
    };
}


export default connect(mapStateToProps,mapDispatchToProps) (adminMovieHalls);
