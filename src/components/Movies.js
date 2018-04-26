import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import '.././App.css';
import {actionmovies,actiongetmovies} from '../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'


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
        this.props.history.push
        ({
            pathname: '/booking',
            state: { movieId: movieId }
        });
        this.props.log(movieId)
    }
    componentWillMount(){
    this.props.getmovies("");
    }
    renderList()
    {

        const movies=this.props.movies;
        var filteredMovies;
        setTimeout(function(){
         filteredMovies=movies.filter(
            (movie) => {
                return movie.movieType.toLowerCase().indexOf(this.state.movieType.toLowerCase())!==-1;
            }
        );
        },500)

        return  setTimeout(function(){filteredMovies.map((movie) => {
            return (
                <ListGroupItem action
                key={movie.movieId}>
                        <img src={movie.movieLink}/>
                    <div >
                        <NavLink  onClick={(event)=>{

                            this.handleMoviesClick(event,movie)}}>
                            {movie.movieName}
                        </NavLink>
                        <span>{movie.movieTiming}</span>
                    </div>

                </ListGroupItem>

            );
        }); },1000)
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
            movies:state.user.movies.movie_data
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Movies);
