import React, {Component} from 'react';
import {actionbook} from '../../actions/loginactions';
import {actionrevenuedetails} from '../../actions/loginactions';
import {actionbookingdetails} from '../../actions/loginactions';
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import history from ".././History";
import { Player } from 'video-react';
import Navbarmain from '.././Navbarmain';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

class Details extends Component {

    constructor(props) {
        super(props);
        const { location } = this.props;
        this.state = {
            date:'',
            genre: '',
            theatre: '',
            moviename: location.state.moviename,
            rating: 2,
            timing:"",
            theatrename: this.props.hall_name
        };
        this.toggle = this.toggle.bind(this);
        this.handledetailsClick = this.handledetailsClick.bind(this);
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
    handledetailsClick=(event,data)=>{
        //this.props.log(this.state);
        history.push
        ({
            pathname: '/editmoviedetails',
            state: {moviename: data.moviename, hallId: data.hallId, time1: data.time1, time2:data.time2, time3: data.time3, time4: data.time4, time5: data.time5, tickets: data.tickets, screen: data.screen, price:data.price}
        });
    }

    handlerevenueClick=(event,data)=>{


      setTimeout(function(){
            history.push
            ({
                pathname: '/revenue',
                state: {moviename: data.moviename}
            });


       },2000); //this.props.log(this.state);

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
            <div className="booking" style={{backgroundColor:"black",height:"1000px"}}>
                <div>
                    <Navbarmain/>
                </div>

                <div className="row">

                    <div className="col-md-4" align="left" >
                        <div className="col-md-12" align="left">
                        <img top width="100%" src={location.state.movieimage} height="300px" width="250px" />
                            <Card style={{backgroundColor:"black"}}>
                               
                                <CardBody>
                                    <CardTitle><strong style={{color:"orange"}}>Movie: </strong><span style={{color:"silver"}}>{location.state.moviename}</span></CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Release Day: </strong> <span style={{color:"silver"}}>{location.state.movieTiming} </span> </CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Timings: </strong> <span style={{color:"silver"}}> {location.state.time1} {location.state.time2} {location.state.time3} {location.state.time4} {location.state.time5} </span> </CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Tickets: </strong> <span style={{color:"silver"}}> {location.state.tickets} </span> </CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>screen: </strong> <span style={{color:"silver"}}> {location.state.screen} </span> </CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Price: </strong> <span style={{color:"silver"}}> {location.state.price}$ </span> </CardTitle>


                                    <Button onClick={(event)=>{

                                        this.handledetailsClick(event,location.state)}}>Edit Details</Button>
                                    <Button color="link"
                                            onClick={(event)=>{

                                                this.props.reven(this.state);
                                                this.props.booki(this.state);
                                                this.handlerevenueClick(event,location.state)}}><strong>SEE ALL Bookings + Revenue</strong></Button>



                                </CardBody>


                            </Card>
                        </div>




                    </div>

                </div>

                {location.state.movieId}


            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        reven : (data) => dispatch(actionrevenuedetails(data)),
        booki : (data) => dispatch(actionbookingdetails(data)),
        //log : (data) => dispatch(actionbook(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log("stores",stores);
   // console.log()
    return {
        movie:stores.user.movies.booking_data,
        theatres:stores.theatres,
    //    hall_name: state.user.stores.hall_name,
     //   hall_address: state.user.stores.hall_address
        hall_name :stores.user.stores.hall_name

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
