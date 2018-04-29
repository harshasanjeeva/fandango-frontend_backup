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
            <div className="booking">
                <div>
                    <Navbarmain/>
                </div>

                <div className="row">

                    <div className="col-md-4" align="left" >
                        <div className="col-md-12" align="left">
                            <Card>
                                <CardImg top width="100%" src={location.state.movieLink} height="300px" width="180px" />
                                <CardBody>
                                    <CardTitle><strong>Movie: </strong>{location.state.movieName}</CardTitle>
                                    <CardTitle><strong>Release Day: </strong>{location.state.movieTiming}</CardTitle>
                                    <CardTitle><strong>Genre: </strong>{location.state.movieType}</CardTitle>
                                    <CardTitle><strong>Cast: </strong>{location.state.cast}</CardTitle>



                                    <Button onClick={(event)=>{

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
