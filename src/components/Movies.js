import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '.././App.css';

import {connect} from 'react-redux';
import history from './History';
let style1={listStyleType: 'none',overflow:'hidden'};
let style2={float:'left',display:'inline-block'};
class Movies extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:''

        };
        this.handleMoviesClick=this.handleMoviesClick.bind(this);
    }

    handleMoviesClick = (event,movieId) => {
        event.preventDefault();
        history.push
        ({
            pathname: '/booking',
            state: { movieId: movieId }
        });

    }

    renderList()
    {

        const movies=this.props.movies;

        let filteredMovies=movies.filter(
            (movie) => {
                return movie.movieType.toLowerCase().indexOf(this.state.movieType.toLowerCase())!==-1;
            }
        );
        return filteredMovies.map((movie) => {
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
                            {movie.movieName}
                        </Link>

                        <span>{movie.movieTiming}</span>
                    </div>

                </ListGroupItem>

            );
        });
    }


    render() {
        return (
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


    );

    }}
function mapStateToProps(state) {
    return {
            movies:state.movies
    };
}


export default connect(mapStateToProps)(Movies);
