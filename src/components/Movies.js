import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup} from 'reactstrap';
import '.././App.css';

import {connect} from 'react-redux';
import history from './History';
let style1={listStyleType: 'none',overflow:'hidden'};
let style2={float:'left',display:'inline-block'};
class Movies extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
        this.handleMoviesClick=this.handleMoviesClick.bind(this);
    }

    handleMoviesClick = (event,movieId) => {
        event.preventDefault();
        history.push
        ({
            pathname: '/details',
            state: { movieId: movieId }
        });

    }

    renderList()
    {
        return this.props.movies.map((movie) => {
            return (
                <ListGroupItem action
                key={movie.movieId}>
                        <img src={movie.movieLink}/>
                    <div >
                        <a  onClick={(event)=>this.handleMoviesClick(event,movie.movieId)}>
                            {movie.movieName}<br/>
                        </a>
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
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Action%2FAdventure">ACTION</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Drama">DRAMA</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Comedy">COMEDY</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Comedy">ROMANCE</a>
                            </ListGroupItem>

                            <ListGroupItem>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Comedy">HORROR</a>
                            </ListGroupItem>

                            <ListGroupItem >
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Comedy">SCI-FI</a>
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
                    <div className='col'><h2 class="heading-size-l heading-style-1 section-header inline">Now Playing</h2></div>
                </Row>
                <Row>
                    <Col sm="12" >
                        <ListGroup className="listgroupMovies">
                            {this.renderList()}
                        </ListGroup>


                    </Col>
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
