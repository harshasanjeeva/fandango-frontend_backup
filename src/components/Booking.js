import React, {Component} from 'react';
import {actionbook} from '../actions/loginactions';
import "../../node_modules/video-react/dist/video-react.css";
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import { Player } from 'video-react';
import Navbarmain from './Navbarmain';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date:'',
            genre: '',
            theatre: '',
            Movie:"",
            rating: 2,
            timing:""
        };
        this.toggle = this.toggle.bind(this);
        this.handleTheatresClick = this.handleTheatresClick.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // componentWillMount(){
    //     this.setState({
    //         date:'April 13 2018',
    //         genre: 'action/adventure',
    //         theatre: 'Inox Movies',
    //         Movie:"Fast and Furious",
    //         rating: 2,
    //         timing:""
    //     });
    // }

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
            // {/*<Alert color="primary">*/}
            //     {/*Loggedin Successfully!*/}
            // {/*</Alert>*/}
            this.navigate();
        }






        return (
            <div className="booking" style={{backgroundColor: "#696969"}}>
                <div>
                    <Navbarmain/>
                </div>
                <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
            
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
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

                            {<strong>Show Timings:</strong>}

                            <ButtonToolbar>
                            <Button color="warning"
                                    onClick={(event) => this.props.log(this.state)}>7:30 PM</Button>

<span />
                                <Button color="warning" bsSize="small"
                                onClick={() => {
                                    // history.push('/tickets');
                                    this.props.log(this.state)
                                }}>8:00 PM</Button>

                                <Button color="warning"
                                        onClick={(event) => this.props.log(this.state)}>8:30 PM</Button>
                                <Button color="warning"
                                        onClick={(event) => this.props.log(this.state)}>9:00 PM</Button>
                                <Button color="warning"
                                        onClick={(event) => this.props.log(this.state)}>10:00 PM</Button>
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
        theatres:stores.theatres
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
