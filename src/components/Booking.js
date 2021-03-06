
import React, {Component} from 'react';
import {actionbook} from '../actions/loginactions';
import "../../node_modules/video-react/dist/video-react.css";
import { Button, ButtonToolbar,Card,ListGroupItem,CardTitle,Input,ListGroup} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import { Player } from 'video-react';
import Navbarmain from './Navbarmain';
import {analytics,actionsubmitreviews,actiongetreviews,actiongetthreatre} from '../actions/loginactions';

import { withRouter } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "video-react/dist/video-react.css";
class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            genre: '',
            theatre: '',
            Movie: "",
            rating: 2,
            timings:"",
            prevdata:"",
            user_id:"",
            numofclick:2,
            componentname:"Movies details",
            userid: ""

        };
        this.toggle = this.toggle.bind(this);
        this.handleTheatresClick = this.handleTheatresClick.bind(this);

        this.analytics = this.analytics.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    navigate() {
        history.push('/');
    }

    handleTheatresClick = (event) => {
        this.props.log(this.state);
        history.push
        ({
            pathname: '/alltheatresAndTimings',
            //state: { movieName: location.state.movieName }
        });
        this.analytics();
        this.props.analytics(this.state);
    }

    analytics = ()=>{
        this.setState({
            numofclick: parseFloat(this.state.numofclick) + 1,
            userid:123   
        })
        console.log("number of clicks",this.state.numofclick)
        this.props.analytics(this.state);
    }



    renderReviewList=()=>
    {

        const reviews=this.props.movie.reviews;
        if (reviews.length !== 0 && reviews !== null && reviews !== undefined)
        {

            return reviews.map((review) => {
                return (
                    <ListGroupItem action
                                   key={review} style={{backgroundColor:"black",color:"silver", border:"solid white",borderWidth:"0.5px",padding:"5px"}}>
                        <div>
                            <span>{review}</span>
                        </div>

                    </ListGroupItem>

                );
            });

        }


    }











    render(){
        const { location } = this.props;
        console.log("booking -==>",location.state.movieId, location.state.movieName,location.state.genre, location.state.release);



        if (this.props.booked===true){
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
                 
                  <Tab style={{color: "orange"}} onClick={(event) => {
                    this.props.getreviews({movieName:location.state.movieName})
                }}>Reviews</Tab>
                  <Tab style={{color: "orange"}}>Trailer</Tab>
                </TabList>
            
                <TabPanel style={{backgroundColor: "black", height:"1000px"}}>







                <div className="row">

                    <div className="col-md-4" align="left" style={{border: '1px solid black'}} >
                        <div className="col-md-12" align="left">
                            <a href="#"><img src={this.props.movie.movieLink} height="200px" width="200px"/></a>
                            <div>
                                <div  style={{color: "white"}}>
                                    <strong>Movie:</strong> {this.props.movie.movieName}
                                </div>
                                <div  style={{color: "white"}}>
                                    <strong>Released:</strong> {this.props.movie.movieTiming}
                                </div>
                                <div  style={{color: "white"}}>
                                    <strong>Genre:</strong> {this.props.movie.movieType}
                                </div>
                                <div  style={{color: "white"}}>
                                    <strong>Theatre:</strong> {this.props.theatres[0].theatreName}
                                </div>
                            </div>


                        </div>

                        <div className="col-sm-8" >
                            <div  style={{color: "white"}}>
                                {<strong>Movie booking here</strong>}
                            </div>

                            {<strong style={{color: "white"}}>Show Timings:</strong>}

                            <ButtonToolbar>
                            <Button color="warning"
                                    onClick={(event) => {
                                        this.setState({
                                        user_id:this.props.user_id,// get userid
                                        timings:"7:30"
                                    })
                                        console.log("in BOOKINGS===>",this.state)
                                        setTimeout(function(){
                                        history.push
                                        ({
                                        pathname: '/BookTicket',             //       theatrename, location.state.timings
                                        state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release,theatrename:"AMC Eastridge 15",timings:"Friday 23 April 2017 7:30 pm"}
                                    });

                                    },1000)
                                    }}>7:30 PM</Button>

                                                <span />
                                <Button color="warning" bsSize="small"
                                        onClick={(event) => {
                                       
                                        this.analytics();
                                    this.setState({
                                        user_id:this.props.user_id,// get userid
                                        timings:"8:00"
                                    })
                                        console.log("in BOOKINGS===>",this.state)
                                        setTimeout(function(){
                                        history.push
                                        ({
                                        pathname: '/BookTicket',
                                        state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release,theatrename:"AMC Eastridge 15",timings:"Friday 23 April 2017 7:30 pm"}
                                    });

                                    },1000)
                                    }}>8:00 PM</Button>

                                <Button color="warning"
                                        onClick={(event) => {
                                            this.analytics();
                                            this.props.analytics(this.state);

                                            this.setState({
                                                user_id:this.props.user_id,// get userid
                                                timings:"8:30"
                                            })
                                            console.log("in BOOKINGS===>",this.state)
                                            setTimeout(function(){
                                                history.push
                                                ({
                                                    pathname: '/BookTicket',
                                                    state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release,theatrename:"AMC Eastridge 15",timings:" Friday 23 April 2017 8:30 pm"}
                                                });

                                            },1000)
                                        }}>8:30 PM</Button>
                                <Button color="warning"
                                        onClick={(event) => {
                                        this.setState({
                                        //prevdata: location.state.movieId,
                                        user_id:this.props.user_id,// get userid
                                        timings:"9:00"
                                    })
                                    this.analytics();
                                        console.log("in BOOKINGS===>",this.state)
                                        setTimeout(function(){
                                        history.push
                                        ({
                                        pathname: '/BookTicket',
                                        state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release, theatrename:"AMC Eastridge 15", timings: "Friday 23 April 2017 9:00 pm"}
                                    });

                                    },1000)
                                    }}>9:00 PM</Button>
                                <Button color="warning"
                                        onClick={(event) => {
                                            this.analytics();
                                        
                                            this.setState({
                                                //prevdata: location.state.movieId,
                                                user_id:this.props.user_id,// get userid
                                                timings:"10:00"
                                            })
                                            console.log("in BOOKINGS===>",this.state)
                                            setTimeout(function(){
                                                history.push
                                                ({
                                                    pathname: '/BookTicket',
                                                    state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release, theatrename:"AMC Eastridge 15", timings: "Friday 23 April 2017 10:00 pm"}
                                                });

                                            },1000)
                                        }}>10:00 PM</Button>

                                <Button color="link"
                                        onClick={(event) => {
                                            this.analytics();
                                            this.setState({
                                                user_id:this.props.user_id// get userid
                                            })
                                            console.log("in BOOking ALL theatre ===>",this.state)
                                            setTimeout(function(){
                                                history.push
                                                ({
                                                    pathname: '/alltheatresAndTimings',
                                                    state: {  movieIds: location.state.movieId, movieNames:location.state.movieName,genre:location.state.genre, release:location.state.release}
                                                });

                                            },3000)

                                        this.props.threatre({movieName:location.state.movieName});
                                        }}><strong>SEE ALL THEATRES + MOVIE TIMINGS</strong></Button>
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
                {location.state.movieId}

            </div>
            </TabPanel>
            <TabPanel style={{backgroundColor: "black", height:"1000px"}}>
              
              
              <div className="row justify-content-md-middle">
              <div style={{marginLeft:"600px"}}>
                  <Card style={{backgroundColor:"black"}}>
                      <CardTitle style={{color:"silver"}}>USER REVIEWS</CardTitle>
                      <div className="form-group" style={{color:"orange"}}>
                          Movie_Name:<span style={{color:"silver"}}>{location.state.movieName}</span>
                      </div>
                      <Input type="name" style={{backgroundColor:"black",color:"silver"}}
                             placeholder="Enter Reviews"
                             onChange={(event) => {
                                 this.setState({
                                     reviews: event.target.value
                              });
                              }} />
                      <Button color="primary" onClick={(event) => {
                          this.props.submitreviews({movieName:location.state.movieName,reviews:this.state.reviews})
                      }}>Submit Review</Button>
<br />
                      <div>
                      <h5 style={{color:"silver"}}> Earlier Reviews </h5>
                          <ListGroup>
                          {this.renderReviewList()}
                          </ListGroup>
                      </div>
                  </Card>


              </div>
          </div>
            </TabPanel>
            <TabPanel style={{backgroundColor: "black", height:"1000px"}}>
            <h2>Any content 2</h2>
          </TabPanel>
          </Tabs>



            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionbook(data)),
        analytics : (data) => dispatch(analytics(data)),
        submitreviews: (data) => dispatch(actionsubmitreviews(data)),
        getreviews: (data) => dispatch(actiongetreviews(data)),
        threatre :(data) => dispatch(actiongetthreatre(data)),
    };
}

const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        movie:stores.user.booking.booking_data,
        theatres:stores.theatres,
        user_id:stores.user.stores.user_id,
        reviews: "stores.user.reviews.reviews"
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
