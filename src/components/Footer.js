import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Homemain from './Homemain'
import Navbarheader from './Navbarlogout'
import {Link} from 'react-router-dom';


class Footer extends Component {

  render() {
    return (
      <div >

        <div className="container-fluid">
        <div className = "row" style={{
          backgroundColor: 'black',
          color:'#ffffff',
          boxShadow: '0px 500px 0px 500px #000',
          paddingTop: '50px',
          paddingLeft: '200px',
          fontSize:'small'
        }}>
    		<div className="col-md-4">
    			<strong><h4>Services</h4></strong><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Movies</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Collections</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}></Link><br/><br/>
    		</div>
    		<div className="col-md-4">
    			<strong><h4>Account</h4></strong><br/><br/>
    			<Link to="/" style={{color: 'white'}}>Account Preference</Link><br/><br/>
    			<Link to="/" style={{color: 'white'}}>My Bookings</Link><br/><br/>  		
    		</div>
    		<div className="col-md-4">
    			<strong><h4>About</h4></strong><br/><br/>
    			Project-group 11
    		</div>
    	</div>
    	</div>

      </div>
    );
  }
}




export default withRouter(Footer);
