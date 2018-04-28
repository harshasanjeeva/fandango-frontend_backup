import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Homemain from './Homemain'
import Navbarheader from './Navbarlogout'
import {Link} from 'react-router-dom';
import Footer from './Footer'

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }



  render() {
    return (
      <div >
  
      <div >



       <Navbarheader />


        <Homemain />

      <Footer />


      </div>


  
      </div>
    );
  }
}




export default withRouter(Home);
