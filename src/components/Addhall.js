import React, {Component} from 'react';
import {actionaddhall} from '../actions/loginactions';
import { Form, FormGroup, Label, Container, Row, Col, Input} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import Navbarmain from './Navbarmain'


class Addhall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin_id: this.props.adminid,
            movie_id: this.props.movieid,
            time1:'',
            time2:'',
            time3:'',
            time4:'',
            time5:'',
            tickets:0,
            screen:0,
            price:0

        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }




    navigate()
    {
        history.push('/');
    }


    render() {

        if (this.props.add===true){
            // {/*<Alert color="primary">*/}
            //     {/*Loggedin Successfully!*/}
            // {/*</Alert>*/}
            this.navigate();
        }






        return (
            <div style={{backgroundColor:"white" ,height: "100% !important"}}>
                <Navbarmain />
                <Row>

                    <Col>
                        <Card style={{backgroundColor:"white", border: "solid", align: "left",
                            borderColor: "white"}}>
                            <div>
                                <div>

                                </div>
                                <div >
                                </div>

                                <div >
                                    <form>
                                        <div >
                                            <h1 style={{color:"white"}}>FANDANGO </h1>
                                            <h1>Add Movie Halls</h1>
                                        </div>
                                        <div >

                                            <Form>
                                                <div>
                                                    <div>
                                                    <strong>Select Movie Times:</strong>
                                                    </div>
                                                    <Input

                                                        type="checkbox"
                                                        label="time1"
                                                        placeholder="Enter Title"
                                                        value={this.state.time1}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                time1: "7:00 PM"
                                                            });
                                                        }}
                                                    /> <strong>7:00 PM</strong>

                                                    <div>
                                                    <Input

                                                        type="checkbox"
                                                        label="time2"
                                                        placeholder="Enter Title"
                                                        value={this.state.time2}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                time2: "8:00 PM"
                                                            });
                                                        }}
                                                    /> <strong>8:00 PM</strong>
                                                    </div>

                                                    <div>
                                                        <Input

                                                            type="checkbox"
                                                            label="time1"
                                                            placeholder="Enter Title"
                                                            value={this.state.time3}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    time3: "9:00 PM"
                                                                });
                                                            }}
                                                        /> <strong>9:00 PM</strong>
                                                    </div>
                                                    <div>
                                                        <Input

                                                            type="checkbox"
                                                            label="time1"
                                                            placeholder="Enter Title"
                                                            value={this.state.time4}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    time4: "10:00 PM"
                                                                });
                                                            }}
                                                        /> <strong>10:00 PM</strong>
                                                    </div>

                                                    <div>
                                                        <Input

                                                            type="checkbox"
                                                            label="time1"
                                                            placeholder="Enter Title"
                                                            //value={this.state.time5}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    time5: "11:00 PM"
                                                                });
                                                            }}
                                                        /> <strong>11:00 PM</strong>
                                                    </div>
                                                </div>

                                                <div>
                                                    <strong>Number of Tickets:</strong>
                                                    <Input

                                                        type="number"
                                                        label="rating"
                                                        placeholder="Enter number of tickets"
                                                        value={this.state.tickets}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                tickets: parseInt(event.target.value)
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Screen Number:</strong>
                                                    <Input

                                                        type="number"
                                                        label="screen"
                                                        placeholder="Screen number"
                                                        value={this.state.screen}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                screen: parseInt(event.target.value)
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Ticket Price:</strong>
                                                    <Input

                                                        type="number"
                                                        label="screen"
                                                        placeholder="Enter ticket price"
                                                        value={this.state.price}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                price: parseInt(event.target.value)
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        onClick={() => this.props.log(this.state)}>
                                                        Add
                                                    </button>
                                                </div>




                                            </Form>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col> </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionaddhall(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        add : stores.user.stores.addhall_status,
        adminid : 123,
        movieid:456
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Addhall);

