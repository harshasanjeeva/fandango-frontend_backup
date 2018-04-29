import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../.././App.css';
import {actionmovies, actiongetmovies, actiondeletebooking, actionbookingdetails} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from '.././Navbarmain'
import history from ".././History";
import { Button, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';


class Revenuedetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:'',
            total_revenue: this.props.total_revenue,
            tax: this.props.tax,
            final_value: this.props.final_value,
            movieName: this.props.movieName,
            theatrename: this.props.hall_name

        };
        this.handlecancelbook=this.handlecancelbook.bind(this);

    }

    handlecancelbook = (event,movie) => {
        event.preventDefault();
        this.props.del({"user_id":movie.user_id,"movieName": movie.movieName });

        history.push
        ({
            pathname: '/hallinfo',
            state: {movieName:movie.movieName, movieTiming: movie.movieTiming, movieLink: movie.movieLink, cast: movie.cast, movieType: movie.movieType }
        });
        //  this.props.log(movie);
    }





    // componentWillMount(){
    // this.props.getmovies("");
    // }



    renderList()
    {

        const movies=this.props.movies;



        return movies.map((movie) => {
            return (
                <ListGroupItem action
                               key={movie.movieId}>
                    <img src={movie.movieLink}/>
                    <div >

                        <Link
                            key={movie.movieId}
                            to={{
                                pathname: `/booking`,
                                state: { movieId: movie.movieId }
                            }}>


                        </Link>

                        <div>
                            <strong>Movie Name:</strong> {movie.movieName}
                        </div>
                        <div>
                        <strong>User_id:</strong> {movie.user_id}
                        </div>
                        <div>
                        <strong>Name:</strong> {movie.name}
                        </div>
                        <div>
                        <strong>Tickets No:</strong> {movie.total_tickets}

                            <div>
                            <Button  onClick={(event)=>{

                                this.handlecancelbook(event,movie)}} >

                                Cancel
                            </Button>
                            </div>
                        </div>



                        <span>{movie.movieTiming}</span>
                    </div>



                </ListGroupItem>

            );
        });


    }


    render() {
        return (
            <div>
                <Navbarmain />

                <div className="col-md-12" align="left">
                    <Card>
                        <CardImg/>
                        <CardBody>
                            <CardTitle><strong>Total Collection: </strong>{this.state.total_revenue}</CardTitle>
                            <CardTitle><strong>Tax: </strong>{this.state.tax}</CardTitle>
                            <CardTitle><strong>Final Revenue: </strong> {this.state.final_value}</CardTitle>

                        </CardBody>


                    </Card>
                </div>

                <Container className="test">



                    <Row>
                        <ListGroup className="listgroupMovies">
                            {this.renderList()}
                        </ListGroup>

                    </Row>



                </Container>
            </div>

        );

    }}

const mapDispatchToProps =(dispatch)=> {
    return {
        del : (data) => dispatch(actiondeletebooking(data)),

    };
}
function mapStateToProps(state) {
    console.log("state",state);

    return {
        movies:state.user.bookings.book_data.booking_data,
        total_revenue: state.user.stores.total_revenue,
        tax: state.user.stores.tax,
        final_value: state.user.stores.final_value,
        hall_name: state.user.stores.hall_name,

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Revenuedetails);
