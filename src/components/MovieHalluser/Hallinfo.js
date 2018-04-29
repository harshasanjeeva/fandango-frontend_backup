import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from "react-router-dom";
import '../.././App.css';
import {actionmovies,actiongetmovies} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbaruser from './Navbaruser'
import history from ".././History";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

class Hallinfo extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:'',
            hall_name: this.props.hall_name,
            hall_address: this.props.hall_address


        };
        this.handleMoviesClick=this.handleMoviesClick.bind(this);
        this.handlehallClick=this.handlehallClick.bind(this);
    }

    handleMoviesClick = (event,movie) => {
        event.preventDefault();
        history.push
        ({
            pathname: '/booking',
            state: { movieId: movie.movieId }
        });
       // this.props.log(movie);
    }

    handlehallClick = (event,movie) => {
        console.log("in handleclick",movie.movieTiming)
        event.preventDefault();
        history.push
        ({
            pathname: '/details',

            state: {moviename:movie.moviename, movieTiming:movie.movieTiming, hallId: movie.hallId, time1:movie.time1, time2:movie.time2, time3:movie.time3, time4:movie.time4, time5:movie.time5,movieimage:movie.movieimage, tickets:movie.tickets, screen:movie.screen, price:movie.price }
        });
        //this.props.log(movie);
    }



    // componentWillMount(){
    // this.props.getmovies("");
    // }



    renderList()
    {

        const movies=this.props.halls;



        return movies.map((movie) => {
            return (
                <ListGroupItem action
                               key={movie.hallId}>
                    <img src={movie.movieimage}/>
                    <div >

                     <div>
                        <strong>{movie.moviename}</strong>
                     </div>









                        <span>{movie.movieTiming}</span>



                    </div>

                    <div>
                        <Link
                            key={movie.hallId}
                            to={{
                                pathname: `/booking`,
                                state: { hallId: movie.hallId }
                            }}>
                        <NavLink  onClick={(event)=>{

                            this.handlehallClick(event,movie)}}>

                            {"Details"}
                        </NavLink>
                        </Link>


                    </div>



                </ListGroupItem>

            );
        });


    }


    render() {
        return (
            <div>

                <Navbaruser />
                <div>
                    <Card>
                        <CardImg top width="100%" />
                        <CardBody>
                            <CardTitle><strong>Hall Name:</strong> {this.state.hall_name}</CardTitle>
                            <CardTitle><strong>Hall Address:</strong> {this.state.hall_address}</CardTitle>

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
      //  log : (data) => dispatch(actionmovies(data)),
      //  getmovies : (data) => dispatch(actiongetmovies(data))
    };
}
function mapStateToProps(state) {
    console.log("state==>",state);
    console.log(state.user.stores.hall_name);
    console.log("hello",state.user.stores.hall_address);
    console.log("about to print");
    console.log(state.user.halls.hall_data.halldata)

    return {
        halls:state.user.halls.hall_data.halldata,
        hall_name: state.user.stores.hall_name,
        hall_address: state.user.stores.hall_address

    };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Hallinfo));
