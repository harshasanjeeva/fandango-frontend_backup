
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
            oldstate:""
        };
    }

    navigate() {
        history.push('/');
    }

    render() {
        const { olddata2 } = this.props;
        if (this.props.status) {
            this.navigate();
        }
        return (<div>
                <Navbarmain/>


                <Card style={{

                    width: 400,
                    margin: 'auto',
                    height: 530,
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
                                <p id="label-left" >Card Number</p>
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
                                <p for="exampleEmail" id="label-left">CVV</p>
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




                        <p for="exampleEmail" id="label-left">Expiry date</p>
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
                        <br/>
                        <div>
                            <Button color="success" onClick={() => {
                                this.setState({
                                    oldstate: olddata2
                                })
                                this.props.pay(this.state)
                            }}>Make Payment</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>

        )
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
        status : "False",
        message : "success"
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Payments);

