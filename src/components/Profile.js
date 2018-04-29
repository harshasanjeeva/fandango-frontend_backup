import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card,  CardBody, CardTitle} from 'reactstrap';
import NavHeaderLogin from './Navbarmain';
import history from './History'
import { Link } from 'react-router-dom';
import {editProfile} from "../actions/loginactions";




class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user_id: this.props.user_id,
          email:this.props.email,
          phone:this.props.phone,
          first_name:this.props.first_name,
          last_name:this.props.last_name,
          credit_card:this.props.credit_card,
          card_holder_name:this.props.card_holder_name,
          cvv:this.props.cvv,
          address:this.props.address,
          city:this.props.city,
          state:this.props.state,
          zipcode:this.props.zipcode,
          expdate:this.props.expdate
        };

        // this.toggle = this.toggle.bind(this);
      }


  render() {
      console.log("userrssss",this.props.username)
    return (  <div> 

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
                  <Input type="name" name="name" id="name" value={this.state.first_name} placeholder="Name" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                        first_name: event.target.value
                                    });
                                }} />
                  </Col>
                </FormGroup>


                <FormGroup row>
                
                  <Label for="email">Email</Label>
                  <Col>
                  <Input type="email" name="semail" id="semail" value={this.state.email} placeholder="Email" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             email: event.target.value
                                    });
                                }} />
                       </Col>         
                </FormGroup>



                <FormGroup row>
            
                <Label for="phone">Phone</Label>
                <Col>
                <Input type="number" name="number" id="number" value={this.state.phone} placeholder="Phone" onChange={(event) => {
                  console.log(this.state);                
                  this.setState({
                           phone: event.target.value
                                  });
                              }} />
                              </Col>
              </FormGroup>

              <div>
                     
                     
                     
              <p id="label-left">Cardholder Name</p>
            
              <Input
                      
                      type="text"
                     
                      value={this.state.card_holder_name}
                      onChange={(event) => {
                          this.setState({
                              card_holder_name: event.target.value
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
                          
                          value={this.state.credit_card}
                          onChange={(event) => {
                              this.setState({
                                  credit_card: event.target.value
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







            </Form>
      

                <Button color="primary" onClick={() => {
                    console.log("state on click",this.state)
                   this.props.profile(this.state);
                    history.push('/movies');
                  }} >Save</Button>
                  <Button color="secondary" onClick={() => {

                    
                  }}>Cancel</Button>
            
            </CardBody>
        </Card>
</div>)

  }
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

  const mapDispatchToProps = (dispatch) => {
    console.log("dispatch",dispatch)
    return {
      profile : (data) => dispatch(editProfile(data))
    }
  }


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));
