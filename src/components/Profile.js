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
          "name": this.props.name,
          "email":this.props.email,
          "phone":this.props.phone,

          "userid":this.props.userid,
        
          "cardholdername":"",
          "creditcard":"",
          "cvv":"",
          "expdate":""
        };

        // this.toggle = this.toggle.bind(this);
      }



callworks(){

   history.push('/');
}

callEditProfile(){

  history.push('/');
}
  render() {
      console.log("userrssss",this.props.username)
    return (  <div style={{backgroundColor:"black"}}> 
      {this.props.isLoggedIn ?
        <div>
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
            <CardTitle style={{color:"white"}}>User Profile Page</CardTitle>

            <Form>
                <FormGroup row>
                
                  <Label for="name" style={{color:"white"}}>Name</Label>
                  <Col>
                  <Input type="name" name="name" id="name" value={this.state.name} placeholder="Name" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             name: event.target.value
                                    });
                                }} />
                  </Col>
                </FormGroup>


                <FormGroup row>
                
                  <Label for="email" style={{color:"white"}}>Email</Label>
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
            
                <Label for="phone" style={{color:"white"}}>Phone</Label>
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
                     
                     
                     
              <span id="label-left" style={{color:"white"}}>Cardholder Name</span>
            
              <Input
                      
                      type="text"
                     
                      
                      onChange={(event) => {
                          this.setState({
                              cardholdername: event.target.value
                          });
                      }}
                  />
      
                
              </div>
          
            
          
              <Row>
                  <Col>
                      <span id="label-left" style={{color:"white"}}>Card Number</span>
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
             
<br />





            </Form>
      

                <Button color="primary" onClick={() => {
                    console.log("state on click",this.state)
                   this.props.profile(this.state);
                   // this.callworks();
                  }} >Save</Button>{' '}
                  <Button color="secondary" onClick={() => {
                    
                    
                    this.callworks();
                    
                  }}>Cancel</Button>
            
            </CardBody>
        </Card>
</div>
        : history.push('/')}
        </div>
    )
  }
}
const mapStateToProps = (stores) => {
    
      return{
        name: "",
        email: "",
        user_id: stores.user.stores.user_id,
        isLoggedIn: true,
        phone: "",
        about: "",
        skills: ""

      }

  }

  const mapDispatchToProps = (dispatch) => {
    console.log("dispatch",dispatch)
    return {
      profile : (data) => dispatch(editProfile(data))
    }
  }


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));
