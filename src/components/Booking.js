
import React, {Component} from 'react';
import {actionbook} from '../actions/loginactions';
import "../../node_modules/video-react/dist/video-react.css";
import { Button, ButtonToolbar} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import { Player } from 'video-react';
import Navbarmain from './Navbarmain';

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date:'',
            genre: '',
            theatre: '',
            Movie:"",
            rating: 2,
            timings:"",
            prevdata:"",
            user_id:""

        };
        this.toggle = this.toggle.bind(this);
        this.handleTheatresClick = this.handleTheatresClick.bind(this);
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
    handleTheatresClick=(event)=>{
        this.props.log(this.state);
        history.push
        ({
            pathname: '/alltheatresAndTimings',
            state: { movieName: this.props.movie.movieName }
        });
    }




    render() {

        const { location } = this.props;


        if (this.props.booked===true){
            this.navigate();
        }

        return (
            <div className="booking" style={{backgroundColor: "black"}}>
                <div>
                    <Navbarmain/>
                </div>

                <div className="row">

                    <div className="col-md-4" align="left" style={{border: '1px solid black'}} >
                        <div className="col-md-12" align="left">
                            <a href="#"><img src={this.props.movie.movieLink} height="200px" width="200px"/></a>
                            <div>
                                <div>
                                    <strong>Movie:</strong> {this.props.movie.movieName}
                                </div>
                                <div>
                                    <strong>Released:</strong> {this.props.movie.movieTiming}
                                </div>
                                <div>
                                    <strong>Genre:</strong> {this.props.movie.movieType}
                                </div>
                                <div>
                                    <strong>Theatre:</strong> {this.props.theatres[0].theatreName}
                                </div>
                            </div>


                        </div>

                        <div className="col-sm-8" >
                            <div>
                                {<strong>Movie booking here</strong>}
                            </div>

                            {<strong style={{color: "white"}}>Show Timings:</strong>}

                            <ButtonToolbar>
                                <Button color="info"
                                        onClick={(event) => {
                                            this.setState({
                                                prevdata: location,
                                                user_id:this.props.user_id,// get userid
                                                timings:"7:00"
                                            })
                                            history.push
                                            ({
                                                pathname: '/Ticket',
                                                state: this.state
                                            });
                                        }}>7:00 PM</Button>
                                <Button color="info" bsSize="small"
                                        onClick={(event) => {
                                            this.setState({
                                                prevdata: location,
                                                user_id:this.props.user_id,
                                                timings:"8:00"
                                            })
                                            history.push
                                            ({
                                                pathname: '/Ticket',
                                                state: this.state
                                            });
                                        }}>8:00 PM</Button>

                                <Button color="info"
                                        onClick={(event) => {
                                            this.setState({
                                                prevdata: location,
                                                user_id:this.props.user_id,// get userid
                                                timings:"8:30"
                                            })
                                            history.push
                                            ({
                                                pathname: '/Ticket',
                                                state: this.state
                                            });
                                        }}>8:30 PM</Button>
                                <Button color="info"
                                        onClick={(event) => {
                                            this.setState({
                                                prevdata: location,
                                                user_id:this.props.user_id,// get userid
                                                timings:"9:00"
                                            })
                                            history.push
                                            ({
                                                pathname: '/Ticket',
                                                state: this.state
                                            });
                                        }}>9:00 PM</Button>
                                <Button color="info"
                                        onClick={(event) => {
                                            this.setState({
                                                prevdata: location,
                                                user_id:this.props.user_id,// get userid
                                                timings:"10:00"
                                            })
                                            history.push
                                            ({
                                                pathname: '/Ticket',
                                                state: this.state
                                            });
                                        }}>10:00 PM</Button>
                                <Button color="link"
                                        onClick={(event)=>{
                                            this.handleTheatresClick(event)}}><strong>SEE ALL THEATRES + MOVIE TIMINGS</strong></Button>
                            </ButtonToolbar>
                        </div>
                    </div>

                    <div className="col-md-8" alight="left">
                        {<strong>Movie Trailer</strong>}
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={this.props.movie.movieVideoLink}/>
                    </div>

                </div>
                {location.state.movieId}
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionbook(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        movie:stores.user.booking.booking_data,
        theatres:stores.theatres,
        user_id: stores.user.stores.user_id
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
