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

    return (  <div style={{backgroundColor:"black"}}> 


      <NavHeaderLogin />
<br />
        <Card style={{ 
            
            width: 600,
            margin: 'auto',
            height: 750,
            backgroundColor:"black",
            border:"solid white",
            borderWidth:"0.5px"
}}>
<img src={require('./image3.png')} alt="Card image cap" style={{ 
            
  width: 137,
  margin: 'auto',
  marginTop:'10px',
 height: 138,
  borderRadius: 75}}/>

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
            <CardTitle style={{color:"orange"}} >User Profile Page</CardTitle>

            <Form>
                <FormGroup row>
                
                  <Label for="name" style={{color:"white"}}>Name</Label>
                  <Col>
                  <Input style={{backgroundColor:"black",color:"silver"}} type="name" name="name" id="name" value={this.state.first_name} placeholder="Name" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                        first_name: event.target.value
                                    });
                                }} />
                  </Col>
                </FormGroup>


                <FormGroup row>
                
                  <Label for="email" style={{color:"white"}}>Email</Label>
                  <Col>
                  <Input style={{backgroundColor:"black",color:"silver"}} type="email" name="semail" id="semail" value={this.state.email} placeholder="Email" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             email: event.target.value
                                    });
                                }} />
                       </Col>         
                </FormGroup>



                <FormGroup row>
            
                <Label for="phone" style={{color:"white"}}>Phone</Label>
                <Col>
                <Input style={{backgroundColor:"black",color:"silver"}} type="number" name="number" id="number" value={this.state.phone} placeholder="Phone" onChange={(event) => {
                  console.log(this.state);                
                  this.setState({
                           phone: event.target.value
                                  });
                              }} />
                              </Col>
              </FormGroup>

              <div>
                     
                     
                     
              <span id="label-left" style={{color:"white"}}>Cardholder Name</span>
            
              <Input
              style={{backgroundColor:"black",color:"silver"}}
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
                      <span id="label-left" style={{color:"white"}}>Card Number</span>
                      <Input style={{backgroundColor:"black",color:"silver"}}
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
                  <span for="exampleEmail" id="label-left" style={{color:"white"}}>CVV</span>
                  <Input
                  style={{backgroundColor:"black",color:"silver"}}
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
                  <Input 
                  style={{backgroundColor:"black",color:"silver"}}
                      type="text"
                      placeholder="MM/YY"
                      value={this.state.expdate}
                      onChange={(event) => {
                          this.setState({
                              expdate: event.target.value
                          });
                      }}
                  />
             
<br />





            </Form>
      

                <Button color="primary" style={{marginRight:"10px"}} onClick={() => {
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
