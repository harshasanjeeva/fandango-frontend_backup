import React, {Component} from 'react';
import {actioneditmoviedetails, actiongetmoviehall, editstatus} from '../../actions/loginactions';
import { Row, Col, Input, Form,Button} from 'reactstrap';
import {Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from ".././History";
import Navbarmain from '.././Navbarlogout';
import {actiongetmovies} from '../../actions/loginactions';


class Editmoviedetails extends Component {

    constructor(props) {

        super(props);
        const { location } = this.props;
        this.state1 = {
            time1: location.state.time1,
            time2: location.state.time2,
            time3: location.state.time3,
            time4: location.state.time4,
            time5: location.state.time5,

        };

        this.state = {
            moviename: location.state.moviename,
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            time5: '',
            hallId: location.state.hallId,
            tickets: location.state.tickets,
            screen: location.state.screen,
            price: location.state.price
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
            <div style={{backgroundColor:"black" ,height: "1000px"}}>
                <Navbarmain />
                <Row>

                    <Col>
                        <Card style={{backgroundColor:"black"}}>
                            <div>
                                <div>

                                </div>
                                <div >
                                </div>

                                <div >
                                    <form>
                                        <div >
                                            <h1 style={{color:"orange"}}>FANDANGO </h1>
                                            <h1 style={{color:"silver"}}>Edit Movie Halls</h1>
                                        </div>
                                        <div >

                                            <Form>
                                                <div>

                                                    <div>
                                                        <strong style={{color:"silver"}}>Movie Title:</strong>
                                                        <Input
                                                            style={{backgroundColor:"black",color:"silver"}}
                                                            type="text"
                                                            label="title"
                                                            placeholder="Enter the movie name"
                                                            value={this.state.moviename}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    moviename: event.target.value
                                                                });
                                                            }}
                                                        />
                                                    </div>

                                                    <div>
                                                        <strong  style={{color:"silver"}} >Current Show Timings: </strong> {this.state1.time1} {this.state1.time2} {this.state1.time3} {this.state1.time4} {this.state1.time5}

                                                    </div>
                                                    <div>
                                                        <strong style={{color:"silver"}}>Select New Movie Times:</strong>
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
                                                    /> <strong style={{color:"silver"}}>7:00 PM</strong>

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
                                                        /> <strong style={{color:"silver"}}>8:00 PM</strong>
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
                                                        /> <strong style={{color:"silver"}}>9:00 PM</strong>
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
                                                        /> <strong style={{color:"silver"}}>10:00 PM</strong>
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
                                                        /> <strong style={{color:"silver"}}>11:00 PM</strong>
                                                    </div>
                                                </div>

                                                <div>
                                                    <strong style={{color:"silver"}}>Number of Tickets:</strong>
                                                    <Input
                                                    style={{backgroundColor:"black",color:"silver"}}
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
                                                    <strong style={{color:"silver"}}>Screen Number:</strong>
                                                    <Input
                                                    style={{backgroundColor:"black",color:"silver"}}
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
                                                    <strong style={{color:"silver"}}>Ticket Price:</strong>
                                                    <Input
                                                    style={{backgroundColor:"black",color:"silver"}}
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
<br />
                                                <div>
                                                    <Button
                                                    color="success"
                                                        className="btn btn-primary"
                                                        type="button"
                                                        onClick={() => {this.props.log(this.state);
                                                        this.props.edi(false);}}>
                                                        Save
                                                    </Button>
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
       log : (data) => dispatch(actioneditmoviedetails(data)),
        getmovies : (data) => dispatch(actiongetmoviehall(data)),
        edi : (data) => dispatch(editstatus(data)),

    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    console.log(stores.user.stores.login_status);
    return {
        edit_status :stores.user.stores.editmoviedata_status
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Editmoviedetails);
