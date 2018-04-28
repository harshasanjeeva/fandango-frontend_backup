import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '.././App.css';
import {actionmovies,actiongetmovies, analytics} from '../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "./History";

class Movies extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:'',
<<<<<<< HEAD
            numofclick:2,
            componentname:"Movies",
            userid:123

=======
            movieName:''
>>>>>>> 98bca1d6eb399f2b3a052c91d4d9c1b8efad83ab

        };
        this.handleMoviesClick=this.handleMoviesClick.bind(this);
        this.analytics = this.analytics.bind(this);
    }

    handleMoviesClick = (event,movie) => {
        event.preventDefault();
        history.push
        ({
            pathname: '/booking',
            state: { movieId: movie.movieId,movieName:movie.movieName, genre:movie.movieType, release:movie.movieTiming}
        });
        this.props.log(movie);
        this.props.analytics(this.state);
    }

<<<<<<< HEAD
    analytics = ()=>{
        this.setState({
            numofclick: parseFloat(this.state.numofclick) + 1    
        })
        console.log("number of clicks",this.state.numofclick)
    }


=======
>>>>>>> 98bca1d6eb399f2b3a052c91d4d9c1b8efad83ab
    renderList() {

        const movies=this.props.movies;
        if (movies.length !== 0 && movies !== null && movies !== undefined)
        {


            var filteredMoviesSearch=movies.filter(
                (movie) => {
                    return movie.movieName.toLowerCase().indexOf(this.state.movieName.toLowerCase())!==-1;
                }
            );
        var filteredMoviesGenre=filteredMoviesSearch.filter(
            (movie) => {
                return movie.movieType.toLowerCase().indexOf(this.state.movieType.toLowerCase())!==-1;
            }
        );


        return filteredMoviesGenre.map((movie) => {
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

<<<<<<< HEAD
                                this.handleMoviesClick(event, movie)
                               this.props.analytics(this.state);
                            }}>
=======
                                    this.handleMoviesClick(event, movie)
                                }}>
>>>>>>> 98bca1d6eb399f2b3a052c91d4d9c1b8efad83ab

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
            <br />
            <Container className="test">

                <Row style={{marginTop:"20px"}}>
                    Movies
                    <Col>
                        <FormGroup style={{marginLeft:"20px"}}>
                            <Input
                                type="text"
                                value={this.state.movieName}
                                onChange={(event) => {
                                    this.setState({
                                        movieName: event.target.value
                                    });
                                }}
                            />

                        </FormGroup>
                    </Col>

                </Row>
                <Row>
                    <Col style={{backgroundColor:'#343a40', float:'left'}}><h4 style={{color:'white'}}>Filter by Movie Genres</h4></Col>
                </Row>
<br/>
                <Row>
                <Col  >
                </Col  >
                <Col  >
                </Col  >
                <Col  >
                </Col  >
                <Col  >
                
                <Button>
                <a onClick={(event) => {
                    this.analytics();
                    
                }}>DUMMY</a>
            </Button>
                </Col  >

                    <Col  >
                        <Button>
                            <a onClick={(event) => {
                                this.setState({
                                    movieType:''
                                })
                            }}>ALL MOVIES</a>
                        </Button>
                    </Col>
                    <Col  >
                            <Button>
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'action'
                                    })
                                }}>ACTION</a>
                            </Button>
                    </Col>
                    <Col  >
                            <Button >
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'drama'
                                    })
                                }}>DRAMA</a>
                            </Button>
                        </Col>
                        <Col>
                            <Button >
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'comedy'
                                    })
                                }}>COMEDY</a>

                            </Button >
                        </Col>

                        <Col>
                            <Button >
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'romance'
                                    })
                                }}>ROMANCE</a>
                            </Button >
                        </Col>

                        <Col>
                            <Button >
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'horror'
                                    })
                                }}>HORROR</a>
                            </Button >
                        </Col>

                        <Col>
                            <Button >
                                <a onClick={(event) => {
                                    this.analytics();
                                    this.setState({
                                        movieType:'sci-fi'
                                    })
                                }}>SCI-FI</a>
                            </Button >



                        </Col>
                        <Col  >
                        </Col  >
                        <Col  >
                        </Col  >
                        <Col  >
                        </Col  >
                        <Col  >
                        </Col  >
                    </Row>
                    <br />
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

        ); }}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionmovies(data)),
        getmovies : (data) => dispatch(actiongetmovies(data)),
        analytics : (data) => dispatch(analytics(data))
    };
}


function mapStateToProps(state) {
    console.log(state);

    return {
        movies:state.user.movies.movie_data.moviedata
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Movies);