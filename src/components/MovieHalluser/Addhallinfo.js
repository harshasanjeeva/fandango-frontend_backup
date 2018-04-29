import React, {Component} from 'react';
import {actionaddmoviedetails, actiongetmoviehall} from '../../actions/loginactions';
import { Row, Col, Input, Form} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from ".././History";
import Navbarmain from '.././Navbarlogout';
import {actiongetmovies} from '../../actions/loginactions';
import {withRouter} from "react-router-dom";


class Addhallinfo extends Component {

    constructor(props) {

        super(props);
        const { location } = this.props;
        this.state = {
            moviename: location.state.movieName,
            movieimage: location.state.movieLink,
            movieTiming: location.state.movieTiming,
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            time5: '',
            tickets: 0,
            screen: 0,
            price: 0,
            hallId: this.props.hallId
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
        console.log("movies===>")
        history.push('/hallinfo');
        var d = {
            hallId:this.state.hallId
        }
        this.props.getmovies(d);

    }


    render() {
        const { location } = this.props;

        if (this.props.edit_status){
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
                                            <h1>Add Movie Hall Info</h1>
                                        </div>
                                        <div >

                                            <Form>
                                                <div>

                                                    <div>
                                                        <strong>Movie Name: {this.state.moviename}</strong>

                                                    </div>


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
                                                            value={this.state.time5}
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
                                                        onClick={() => {this.props.log(this.state);
                                                            this.setState({addmoviedata_status:false})}}>
                                                        ADD
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
        log : (data) => dispatch(actionaddmoviedetails(data)),
        getmovies : (data) => dispatch(actiongetmoviehall(data))

    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log("here");
    return {
        edit_status :stores.user.stores.addmoviedata_status,
        hallId :stores.user.stores.hall_id
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addhallinfo));
