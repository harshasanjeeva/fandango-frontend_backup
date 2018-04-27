import React, { Component } from 'react';
import {connect} from "react-redux";

import history from "./History";
import {Input, Card, Row,Col, CardBody,CardHeader} from 'reactstrap';
import {Button} from 'reactstrap';
import Navbarmain from './Navbarmain'
import { Alert } from 'reactstrap';


class Payments extends Component {
    constructor(props) {
        super(props);

    this.state = {
        user_id:this.props.user_id,
        name: '',
        creditcard: '',
        cvv:'',
        expdate:'',
        amounts:0,
        freelancer:0
    };
}

    navigate() {
        history.push('/');
    }

    render() {
       if (this.props.status === 200) {
            this.navigate();
        }
        return (<div style={{backgroundColor: "black", height:1000 }}>
            <Navbarmain/>
    
<div style=  {{borderColor:"white",
                        
border:"solid",
borderWidth:"1px"

                }}>
                    <Card style={{ 
            
                        width: 400,
                        margin: 'auto',
                        height: 519,
                        marginBottom:0,
                        backgroundColor: "black",
                        borderColor:"white !important",
                        
                        border:"solid",
                        

                                        }}>
                        <Alert color="success">
                            {this.props.message}
                        </Alert>
                  

                        <CardHeader style={{ 
                        backgroundColor: "#2c456c",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#F7F7F7"}}
                        
                        >Credit or Debit Card</CardHeader>
                        <CardBody>
                   
                        <div>
                     
                     
                     
                        <span id="label-left" style={{ marginBottom:"0px !important", color:"white"}}>Cardholder Name</span>
                      
                        <Input style={{ marginBottom:"0px !important"}}
                                
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
                       
                        <div>
                        <span for="exampleEmail" id="label-left" style={{color:"white"}}>Amount</span>
                            <Input
                                
                                type="number"
                                placeholder="Amount"
                                value={this.state.amounts}
                                onChange={(event) => {
                                    this.setState({
                                        amounts: event.target.value
                                    });
                                }}
                            />
                        </div>



                        <div>
                        <span for="exampleEmail" id="label-left" style={{color:"white"}}>FreeLancer Id</span>
                            <Input
                                
                                type="number"
                                placeholder="1234"
                               
                                onChange={(event) => {
                                    this.setState({
                                        freelancer: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <br/>
                        <div>
                        <Button color="success" onClick={() => {
                            history.push('/')
                        }}>Make Payment</Button>
                        </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
    
        )
    }
}

const mapStateToProps =(user)=> {
    
    return {
        user_id: 111,
        status : "False",
        message : "success"
    };
}
export default connect(mapStateToProps)(Payments);