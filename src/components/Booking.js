import React, {Component} from 'react';
import {actionbook} from '../actions/loginactions';
import "../../node_modules/video-react/dist/video-react.css";
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import { Player } from 'video-react';
import Navbarmain from './Navbarmain';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "video-react/dist/video-react.css";
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
            <div className="booking" style={{backgroundColor: "black"}}>
                <div>
                    <Navbarmain/>
                </div>
                <Tabs>
                <TabList >
                  <Tab style={{color: "orange"}}>Overview</Tab>
                  <Tab style={{color: "orange"}}>Movie Times + Tickets</Tab>
                  <Tab style={{color: "orange"}}>Synopsis</Tab>
                  <Tab style={{color: "orange"}}>Reviews</Tab>
                  <Tab style={{color: "orange"}}>Trailer</Tab>
                </TabList>
            
                <TabPanel>
                 
                <div className="row">

                <div className="col-md-4" align="left" style={{border: '1px solid black'}} >
                    <div className="col-md-12" align="left">
                        <a href="#"><img src={this.props.movie.movieLink} height="200px" width="200px"/></a>
                        <div>
                            <div style={{color: "white"}}>
                                <strong style={{color: "white"}}>Movie:</strong> {this.props.movie.movieName}
                            </div>
                            <div style={{color: "white"}}>
                        <strong>Released:</strong> {this.props.movie.movieTiming}
                            </div>
                            <div style={{color: "white"}}>
                        <strong>Genre:</strong> {this.props.movie.movieType}
                            </div>
                        <div style={{color: "white"}}>
                        <strong>Theatre:</strong> {this.props.theatres[0].theatreName}
                        </div>
                        </div>


                    </div>

                        <div className="col-sm-8" >
                            <div style={{color: "white"}}>
                            {<strong>Movie booking here</strong>}
                            </div>

                            {<strong style={{color: "white"}}>Show Timings:</strong>}

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

                <div className="col-md-8" alight="left" >
                    {<strong style={{color: "white"}}>Movie Trailer</strong>}
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={this.props.movie.movieVideoLink}
                        style={{borderColor: "white", border:"solid"}}
                        />

                </div>

            </div>












                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
              </Tabs>
        

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
