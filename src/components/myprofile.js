import React from 'react';
//import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionprof, actionview} from "../actions/loginactions";
import { Card, CardTitle} from 'reactstrap';
import {NavItem, NavLink, Button
} from 'reactstrap';

class myprofile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userid:this.props.user_id

        };
    }

    componentWillMount() {
        this.props.profile(this.state.userid);
    }
    render() {
        return (
            <div className="row justify-content-md-middle">
                <div className="col-md-6">
                    <Card>
                        <CardTitle>User Details</CardTitle>
                        <div className="form-group">
                            First_Name:{this.props.First_Name}
                        </div>

                        <div className="form-group">
                            Last_Name:{this.props.Last_Name}
                        </div>

                        <div className="form-group">
                            address:{this.props.address}
                        </div>

                        <div className="form-group">
                            city:{this.props.city}
                        </div>

                        <div className="form-group">
                            state:{this.props.state}
                        </div>
                        <div className="form-group">
                            zipcode:{this.props.zipcode}
                        </div>
                        <div className="form-group">
                        phone:{this.props.phone}
                        </div>

                        <div className="form-group">
                            email:{this.props.email}
                        </div>
                        <NavItem>
                            <NavLink href="/Movies"><Button color="success">Go To Home</Button></NavLink>
                        </NavItem>
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
        user_id: stores.user.stores.user_id,
        First_Name : stores.user.stores.First_Name,
        Last_Name : stores.user.stores.Last_Name,
        address : stores.user.stores.address,
        city : stores.user.stores.city,
        state : stores.user.stores.state,
        zipcode : stores.user.stores.zipcode,
        phone : stores.user.stores.phone,
        email : stores.user.stores.email
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(myprofile);