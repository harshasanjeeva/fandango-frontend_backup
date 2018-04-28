import React, { Component } from 'react';
import {connect} from "react-redux";
import history from "./History";
import {Input, Card, Row,Col, CardBody,CardHeader, NavLink, NavItem} from 'reactstrap';
import {Button} from 'reactstrap';
import Navbarmain from './Navbarmain'
import { Alert } from 'reactstrap';


class realticket extends Component {


    render() {
        //const { location } = this.props;
        //console.log("In Real ticket==>",location.state.movieId, location.state.movieName, location.state.total_amount, location.state.total_tickets,location.state.theatrename, location.state.timings, this.props.user_id)
        return (<div style={{backgroundColor: "Orange", height:1000 }}>
                <Navbarmain/>

                <div style=  {{borderColor:"Green",
                    border:"solid",
                    borderWidth:"1px"
                }
                }>
                    <Card style={{

                        width: 400,
                        margin: 'auto',
                        height: 519,
                        marginBottom:0,
                        backgroundColor: "blue",
                        borderColor:"white !important",
                        border:"solid"
                    }}>


                        <Alert color="success">
                            Please Save your Ticket
                        </Alert>

                        <CardHeader style={{
                            backgroundColor: "#cfedf4",
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#F7F7F7"}}
                        >Credit or Debit Card</CardHeader>
                        <CardBody>
                            <div>
                                <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Tickets Booked By: {this.props.name}</span>
                            </div>
                            <div>
                            <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Movie Name: {this.props.movieName}</span>
                        </div>
                            <div>
                                <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Theatre Name: {this.props.TheatreName}</span>
                            </div>
                            <div>
                                <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Ticket Amount: {this.props.total_amount}</span>
                            </div>

                            <Row>
                                <Col>
                                    <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>No. of Children Seats: {this.props.children}</span>
                                </Col>
                                <Col>
                                    <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>No. of Student Seats: {this.props.student}</span>
                                </Col>
                                <Col>
                                    <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>No. of General Seats: {this.props.general}</span>
                                </Col>
                            </Row>

                            <br/>
                            <NavItem>
                                <NavLink href="/Movies"><Button color="success">Return To Movies</Button></NavLink>
                            </NavItem>
                        </CardBody>
                    </Card>
                </div>
            </div>

        )
    }
}

const mapStateToProps =(stores)=> {
    console.log(stores)
    return {
        user_id: stores.user.realticket.user_id,
        name:stores.user.realticket.realticket.name,
        movieName:stores.user.realticket.realticket.movieName,
        TheatreName:stores.user.realticket.realticket.theatrename,
        total_amount:stores.user.realticket.realticket.total_amount,
        children:stores.user.realticket.realticket.children,
        student:stores.user.realticket.realticket.student,
        general:stores.user.realticket.realticket.general,
        message : "success"
    };
}
export default connect(mapStateToProps)(realticket);