import React, {Component} from 'react';
import {actionbook} from '../../actions/loginactions';
import { Button, ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import history from ".././History";
import { Player } from 'video-react';
import Navbarmain from '.././Navbarmain';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

class Details extends Component {

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
        this.props.log(this.state);
        history.push
        ({
            pathname: '/addhallinfo',
            state:{movieName:data.movieName, movieLink: data.movieLink, movieTiming: data.movieTiming}
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
            <div className="booking" style={{backgroundColor:"black",height:"1000px"}}>
                <div>
                    <Navbarmain/>
                </div>

                <div className="row">

                    <div className="col-md-4" align="left" >
                        <div className="col-md-12" align="left">
                        <img top width="100%" src={location.state.movieLink} height="300px" width="250px" />
                            <Card style={{backgroundColor:"black"}}>
                             
                                <CardBody>
                                    <CardTitle><strong style={{color:"orange"}}>Movie: </strong> <span style={{color:"silver"}}>{location.state.movieName}</span></CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Release Day: </strong> <span style={{color:"silver"}}>{location.state.movieTiming}</span></CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Genre: </strong> <span style={{color:"silver"}}>{location.state.movieType}</span></CardTitle>
                                    <CardTitle><strong style={{color:"orange"}}>Cast: </strong> <span style={{color:"silver"}}>{location.state.cast}</span></CardTitle>



                                    <Button color="info" onClick={(event)=>{

                                        this.handledetailsClick(event,location.state)}}>Add Hall Details</Button>
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
        log : (data) => dispatch(actionbook(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        movie:stores.user.movies.booking_data,
        theatres:stores.theatres
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
