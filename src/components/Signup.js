import React, {Component} from 'react';
import PropTypes from 'prop-types';
import history from "./History";
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';

class Signup extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        email: '',
        name: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            email: '',
            name: '',
            password: ''
        });
    }

    navigate()
    {
        history.push('/');
    }

    render() {

        if (this.props.signin){
            alert("sign up successfull");
            this.navigate();
        }
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                </div>

                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Signup</h1>
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">

                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.Sign(this.state)}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Sign : (data) => dispatch(actionsign(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.user.sign
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);