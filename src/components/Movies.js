import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '.././App.css';
import {actionmovies,actiongetmovies} from '../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "./History";


class Movies extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:''

        };
        this.handleMoviesClick=this.handleMoviesClick.bind(this);
    }

    handleMoviesClick = (event,movie) => {
        event.preventDefault();
        history.push
        ({
            pathname: '/booking',
            state: { movieId: movie.movieId }
        });
        this.props.log(movie);
    }




    renderList() {

        const movies = this.props.movies;
        if (movies.length !== 0 && movies !== null && movies !== undefined)
        {
            var filteredMovies = movies.filter(
                (movie) => {
                    return movie.movieType.toLowerCase().indexOf(this.state.movieType.toLowerCase()) !== -1;
                }
            );


        return filteredMovies.map((movie) => {
            return (
                <ListGroupItem action
                               key={movie.movieId}>
                    <img src={movie.movieLink}/>
                    <div>

                        <Link
                            key={movie.movieId}
                            to={{
                                pathname: `/booking`,
                                state: {movieId: movie.movieId}
                            }}>

                            <NavLink onClick={(event) => {

                                this.handleMoviesClick(event, movie)
                            }}>

                                {movie.movieName}
                            </NavLink>
                        </Link>

                        <span>{movie.movieTiming}</span>
                    </div>

                </ListGroupItem>

            );
        });

    }


    }


    render() {
        return (
            <div>
            <Navbarmain />
            <Container className="test">
                <Row>
                    <Col style={{backgroundColor:'grey', float:'left'}}><h4 style={{color:'white'}}>Filter by Movie Genres</h4></Col>
                </Row>

                <Row>
                    <Col>
                        <ListGroup className="listgroupStyle" >

                            <ListGroupItem>
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'action'
                                    })
                                }}>ACTION</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'drama'
                                    })
                                }}>DRAMA</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'comedy'
                                    })
                                }}>COMEDY</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'romance'
                                    })
                                }}>ROMANCE</a>
                            </ListGroupItem>

                            <ListGroupItem>
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'horror'
                                    })
                                }}>HORROR</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'sci-fi'
                                    })
                                }}>SCI-FI</a>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col><h2 >Opening This Week</h2></Col>
                </Row>
                <Row>
                    <ListGroup className="listgroupMovies">
                        {this.renderList()}
                    </ListGroup>

                </Row>

                <Row>
                    <div><h2>Now Playing</h2></div>
                </Row>
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
        log : (data) => dispatch(actionmovies(data)),
        getmovies : (data) => dispatch(actiongetmovies(data))
    };
}
function mapStateToProps(state) {
    console.log(state);

    return {
            movies:state.user.movies.movie_data.moviedata

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Movies);
