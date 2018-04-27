import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button} from 'reactstrap';
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



    // componentWillMount(){
    // this.props.getmovies("");
    // }



    renderList()
    {

        const movies=this.props.movies;
        if (movies.length !== 0 && movies !== null && movies !== undefined)
        {
        var filteredMovies=movies.filter(
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

                        <NavLink  onClick={(event)=>{

                            this.handleMoviesClick(event,movie)}}>

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
                </Col  >
                    <Col  >
                     

                            <Button>
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'action'
                                    })
                                }}>ACTION</a>
                            </Button>
                    </Col>
                    <Col  >
                            <Button >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'drama'
                                    })
                                }}>DRAMA</a>
                            </Button>
                            </Col>
                            <Col>
                            <Button >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'comedy'
                                    })
                                }}>COMEDY</a>

                                </Button >
                                </Col>

                                <Col>
                                <Button >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'romance'
                                    })
                                }}>ROMANCE</a>
                                </Button >
                                </Col>

                                <Col>
                                <Button >
                                <a onClick={(event) => {
                                    this.setState({
                                        movieType:'horror'
                                    })
                                }}>HORROR</a>
                                </Button >
                                </Col>

                                <Col>
                                <Button >
                                <a onClick={(event) => {
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
           movies:state.user.movies.movie_data.moviedata,
        //     movies: 
        //  [ { _id: '5ae11550734d1d48c4cbc875',
        //         movieId: 1,
        //         movieName: 'Disobedience',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Horror',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae115bb734d1d48c4cbc8a9',
        //         movieId: 2,
        //         movieName: 'The Test and Art of Thinking',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Drama',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae115d9734d1d48c4cbc8ae',
        //         movieId: 3,
        //         movieName: 'I feel Pretty',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Comedy',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae115f8734d1d48c4cbc8b4',
        //         movieId: 4,
        //         movieName: 'Kings',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg',    movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Action',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae11614734d1d48c4cbc8bb',
        //         movieId: 5,
        //         movieName: 'Let the Sunshine In',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/208107/images/masterrepository/fandango/208107/letthesunshinein-2018.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Romance',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae11634734d1d48c4cbc8da',
        //         movieId: 6,
        //         movieName: 'Avengers: Infinity Wars',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Sci-Fi',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' },
        //       { _id: '5ae11651734d1d48c4cbc8eb',
        //         movieId: 7,
        //         movieName: 'Ready Player One',
        //         movieLink: 'https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/204139/images/masterrepository/fandango/204139/rpo_new_main_vert_dom_2764x.jpg',
        //         movieTiming: 'Friday 23 April 2017',
        //         movieType: 'Sci-Fi',
        //         movieVideoLink: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' } ]

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Movies);
