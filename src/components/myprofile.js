import React from 'react';
//import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionprof, actionview} from "../actions/loginactions";
import { Card, CardTitle,Row,Col, Button, Form, FormGroup, Label, Input, FormText, CardBody,NavItem, NavLink } from 'reactstrap';
import NavHeaderLogin from './Navbarmain';
import history from "./History";

class myprofile extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const {location} = this.props;
        console.log(location.state.user_id);
        var data={user_id:location.state.user_id};
        this.props.profile(data);
    }
    render() {
        return (
            <div>
                    <div>
                        <NavHeaderLogin />
                        <br />
                        <Card style={{

                            width: 600,
                            margin: 'auto',
                            height: 750,
                        }}>
                            <img src={require('./image3.png')} alt="Card image cap" style={{

                                width: 120,
                                margin: 'auto',
                                marginTop:'10px',
                                height: 140,
                                borderRadius: 50}}/>

                            <br/>

                            <FormGroup row>

                                <Col>
                                    <Input type="file" name="file" id="exampleFile" onChange={(event) => {
                                        const payload = new FormData();

                                        payload.append('mypic', event.target.files[0]);
                                        console.log("filllle==>",payload)

                                        this.props.upload(payload);
                                    }} style={{paddingLeft: "10px"}}/>
                                </Col>

                                <FormText color="muted" style={{paddingLeft: "20px", paddingRight: "10px"}}>
                                    This is some placeholder block-level help text for the above input.
                                    It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </FormGroup>

                            <hr />
                            <CardBody>
                                <CardTitle>User Profile Page</CardTitle>

                                <Form>
                                    <FormGroup row>

                                        <Label for="name">Name</Label>
                                        <Col>
                                            {this.props.first_name} &nbsp; {this.props.last_name}
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>

                                        <Label for="email">Email</Label>
                                        <Col>
                                            {this.props.email}
                                        </Col>
                                    </FormGroup>



                                    <FormGroup row>

                                        <Label for="phone">Phone</Label>
                                        <Col>
                                            {this.props.phone}
                                        </Col>
                                    </FormGroup>

                                    <div>

                                        <p id="label-left">Cardholder Name</p> &nbsp;
                                        {this.props.card_holder_name}

                                    </div>
                                    <br/>



                                    <Row>
                                        <Col>
                                            <p id="label-left" >Card Number</p> &nbsp;
                                            {this.props.credit_card}

                                        </Col>
                                        <Col>
                                            <p for="exampleEmail" id="label-left">CVV</p>  &nbsp;
                                            {this.props.cvv}

                                        </Col>
                                    </Row>
                                    <br/>


                                    <p for="exampleEmail" id="label-left">Expiry date</p> &nbsp;
                                    {this.props.expdate}

                                    <br/>
                                    <br/>


                                    <Button onClick={(event)=>{
                                        history.push('/profile');
                                    }}> Edit
                                    </Button>



                                </Form>



                            </CardBody>
                        </Card>
                    </div>

            </div>

        )
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        profile : (data) => dispatch(actionview(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log(stores.user.stores.user_id)
    return {
        user_id: stores.user.editProfile.editProfile.user_id,
        first_name : stores.user.editProfile.editProfile.first_name,
        last_name : stores.user.editProfile.editProfile.last_name,
        address : stores.user.editProfile.editProfile.address,
        city : stores.user.editProfile.editProfile.city,
        state : stores.user.editProfile.editProfile.state,
        zipcode : stores.user.editProfile.editProfile.zipcode,
        phone : stores.user.editProfile.editProfile.phone,
        email : stores.user.editProfile.editProfile.email,
        credit_card:stores.user.editProfile.editProfile.credit_card,
        card_holder_name:stores.user.editProfile.editProfile.card_holder_name,
        cvv:stores.user.editProfile.editProfile.cvv,
        expdate:stores.user.editProfile.editProfile.expdate
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(myprofile);