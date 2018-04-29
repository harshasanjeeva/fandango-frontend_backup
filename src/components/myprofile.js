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

    
    render() {
        return (
            <div style={{backgroundColor:"black"}}>
                    <div>
                        <NavHeaderLogin />
                        <br />
                        <Card style={{

                            width: 600,
                            margin: 'auto',
                            height: 950,
                            backgroundColor:"black"
                        }}>
                            <img src={require('./image3.png')} alt="Card image cap" style={{

                                width: '136px',
                                margin: 'auto',
                                marginTop:'136px',
                                height: 140,
                                borderRadius: 73}}/>

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
                                <CardTitle style={{color:"orange"}}>User Profile Page</CardTitle>

                                <Form>
                                    <FormGroup row>

                                        <Label for="name" style={{color:"white"}}>Name</Label>
                                        <Col style={{color:"silver"}}>
                                            {this.props.first_name} &nbsp; {this.props.last_name}
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>

                                        <Label for="email" style={{color:"white"}}>Email</Label>
                                        <Col style={{color:"silver"}}>
                                            {this.props.email}
                                        </Col>
                                    </FormGroup>



                                    <FormGroup row>

                                        <Label for="phone" style={{color:"white"}}>Phone</Label>
                                        <Col style={{color:"silver"}}>
                                            {this.props.phone}
                                        </Col>
                                    </FormGroup>

                                    <div>

                                        <p id="label-left" style={{color:"white"}}>Cardholder Name</p> &nbsp;
                                      <span style={{color:"silver"}}>  {this.props.card_holder_name} </span>

                                    </div>
                                    <br/>



                                    <Row>
                                        <Col style={{color:"white"}}>
                                            <p id="label-left" >Card Number</p> &nbsp;
                                        <span style={{color:"silver"}}>    {this.props.credit_card} </span>

                                        </Col>
                                        <Col style={{color:"white"}}>
                                            <p for="exampleEmail" id="label-left">CVV</p>  &nbsp;
                                         <span style={{color:"silver"}}>   {this.props.cvv} </span>

                                        </Col>
                                    </Row>
                                    <br/>


                                    <p for="exampleEmail" id="label-left" style={{color:"white"}}>Expiry date</p> &nbsp;
                                  <span style={{color:"silver"}}>  {this.props.expdate}</span>

                                    <br/>
                                    <br/>


                                    <Button color="info" onClick={(event)=>{
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