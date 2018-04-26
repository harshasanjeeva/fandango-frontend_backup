import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {actionbook} from '../actions/loginactions';
import "../../node_modules/video-react/dist/video-react.css";
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import history from "./History";
import image from '../images/5.png';
import { Player } from 'video-react';
import StarRating from 'react-star-rating';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
//import history from "./history";

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date:'April 13 2018',
            genre: 'action/adventure',
            theatre: 'Inox Movies',
            Movie:"Fast and Furious",
            rating: 2,
            timing:""

        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    state = {
        date:'April 13 2018',
        genre: 'action/adventure',
        theatre: 'Inox Movies',
        Movie:"Fast and Furious",
        rating: 2,
        timing:""
    };

    componentWillMount(){
        this.setState({
            date:'April 13 2018',
            genre: 'action/adventure',
            theatre: 'Inox Movies',
            Movie:"Fast and Furious",
            rating: 2,
            timing:""
        });
    }

    navigate()
    {
        history.push('/');
    }




    render() {


        if (this.props.booked===true){
            // {/*<Alert color="primary">*/}
            //     {/*Loggedin Successfully!*/}
            // {/*</Alert>*/}
            this.navigate();
        }






        return (
            <div className="booking" style={{backgroundColor: "#696969"}}>
                <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/">

                        <img src={require('../images/1050x171.gif')} width="170" height="30" alt="" />
                        <div>

                        </div>



                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>

                <div className="row">

                <div className="col-md-4" align="left" style={{border: '1px solid black'}} >
                    <div className="col-md-12" align="left">
                        <a href="#"><img src={image} height="200px" width="200px"/></a>
                        <div>
                            <div>
                                <strong>Movie:</strong> {this.state.Movie}
                            </div>
                            <div>
                        <strong>Released:</strong> {this.state.date}
                            </div>
                            <div>
                        <strong>Genre:</strong> {this.state.genre}
                            </div>
                        <div>
                        <strong>Theatre:</strong> {this.state.theatre}
                        </div>
                        </div>


                    </div>

                        <div className="col-sm-8" >
                            <div>
                            {<strong>Movie booking here</strong>}
                            </div>

                            {<strong>Show Timings:</strong>}

                            <ButtonToolbar>
                            <Button color="info"
                                    onClick={() => this.props.log(this.state)}>7:30 PM</Button>


                                <Button color="info" bsSize="small"
                                onClick={() => {
                                    // history.push('/tickets');
                                    this.props.log(this.state)
                                }}>8:00 PM</Button>

                                <Button color="info"
                                        onClick={(event) =>{
                                            this.setState({
                                                timing: event.timing.value
                                            })
                                            this.props.log(this.state)

                                        }}>8:30 PM</Button>
                                <Button color="info"
                                        onClick={(event) =>{
                                            this.setState({
                                                timing: event.timing.value
                                            })
                                            this.props.log(this.state)

                                        }}>9:30 PM</Button>
                                <Button color="info"
                                        onClick={(event) =>{
                                            this.setState({
                                                timing: event.timing.value
                                            })
                                            this.props.log(this.state)

                                        }}>10:30 PM</Button>
                                <Button color="link"
                                        onClick={() => this.props.log(this.state)}><strong>SEE ALL THEATRES + MOVIE TIMINGS</strong></Button>
                            </ButtonToolbar>

                        </div>

                </div>

                <div className="col-md-8" alight="left">
                    {<strong>Movie Trailer</strong>}
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>

                </div>

            </div>


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
        booked : stores.user.booking_status,
        // userid
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
