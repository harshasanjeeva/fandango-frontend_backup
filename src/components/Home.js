import React, { Component } from 'react';

import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import history from './History';
class Home extends Component {
  render() {
    return (
      <div >
  
        <div>
        Home
        </div>
  
      </div>
    );
  }
}
const mapStateToProps = (user) => {
  console.log("user-->",user)

}


export default withRouter(connect(mapStateToProps)(Home));
