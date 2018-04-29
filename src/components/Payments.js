import React, { Component } from 'react';
import {connect} from "react-redux";
import history from "./History";
import {Input, Card, Row,Col, CardBody,CardHeader} from 'reactstrap';
import {Button} from 'reactstrap';
import Navbarmain from './Navbarmain'
import { Alert } from 'reactstrap';
import {actionpayment} from "../actions/loginactions";


class Payments extends Component {
    constructor(props) {
        super(props);

    this.state = {
        user_id:this.props.user_id,
        name: '',
        creditcard: '',
        cvv:'',
        expdate:'',
        movieid:0,
        movieName:"",
        total_amount:0,
        total_tickets:0,
        genre:"",
        release:"",
        timings:"",
        theatrename:"",
        student:0,
        children:0,
        general:0
    };
}


    navigate() {
        history.push('/');
    }

    render() {
        const { location } = this.props;
        console.log("Payments==>",location.state.movieId, location.state.movieName, location.state.total_amount, location.state.total_tickets,location.state.theatrename, location.state.timings, this.props.user_id)
       if (this.props.status) {
            this.navigate();
        }
        return (
            <div style={{backgroundColor: "black", height:1000 }}>
            <Navbarmain/>
    
            <div style=  {{borderColor:"white",
                border:"solid",
                borderWidth:"1px"
                }
                }>
                    <Card style={{ 
            
                        width: 400,
                        margin: 'auto',
                        height: 519,
                        marginBottom:0,
                        backgroundColor: "black",
                        borderColor:"white !important",
                        border:"solid"
                     }}>

                        <Alert color="success">
                            {this.props.message}
                        </Alert>

                        <Alert color="danger">
                            Please pay ${location.state.total_amount}
                        </Alert>

                        <CardHeader style={{
                        backgroundColor: "#2c456c",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#F7F7F7"}}
                        >Credit or Debit Card</CardHeader>
                        <CardBody>
                        <div>



                            <p id="label-left">Cardholder Name</p>

                            <Input

                                type="text"

                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <Row>
                            <Col>
                                <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Card Number</span>
                                <Input
                                    name="email"
                                    type="text"

                                    value={this.state.creditcard}
                                    onChange={(event) => {
                                        this.setState({
                                            creditcard: event.target.value
                                        });
                                    }}
                                />
                            </Col>
                            <Col>


                            <span for="exampleEmail" id="label-left" style={{color:"white"}}>CVV</span>
                            <Input
                               
                                type="number"
                                placeholder="Enter CVV"
                                value={this.state.cvv}
                                onChange={(event) => {
                                    this.setState({
                                        cvv: event.target.value
                                    });
                                }}
                            />
                          </Col>
                          </Row>


                        <Row>
                            <Col>
                        <span for="exampleEmail" id="label-left" style={{color:"white"}}>Expiry date</span>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="MM/YY"
                                value={this.state.expdate}
                                onChange={(event) => {
                                    this.setState({
                                        expdate: event.target.value
                                    });
                                }}
                            />
                            </Col>
                        </Row>

                        <br/>
                        <div>
                        <Button color="success" onClick={() => {
                            this.setState({
                                movieid:location.state.movieId,
                                movieName:location.state.movieName,
                                genre:location.state.genre,
                                release:location.state.release,
                                total_amount:location.state.total_amount,
                                total_tickets:location.state.total_tickets,
                                theatrename:location.state.theatrename,
                                timings:location.state.timings,
                                children:location.state.children,
                                student:location.state.student,
                                general:location.state.general
                            })
                            this.props.pay(this.state)
                        }}>Make Payment</Button>

                        <br/>
                            </div>
                    </CardBody>
                </Card>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        pay : (data) => dispatch(actionpayment(data))
    };
}
const mapStateToProps =(stores)=> {
    
    return {
        user_id: stores.user.stores.user_id,
        status : stores.user.stores.status,
        message : "success"
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Payments);
