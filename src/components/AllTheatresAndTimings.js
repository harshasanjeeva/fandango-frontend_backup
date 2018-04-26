import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '.././App.css';

import {connect} from 'react-redux';
import history from './History';
let style1={listStyleType: 'none',overflow:'hidden'};
let style2={float:'left',display:'inline-block'};
class AllTheatresAndTimings extends Component {

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

    returnTheatreTiming = (timings) => {
            return timings.map((timing)=>{
                return(
                    <ListGroupItem>
                        {timing}
                    </ListGroupItem>
                    );
                });
            }
    renderList()
    {
        return this.props.theatres.map((theatre) => {
            return (
        <div class="theater__wrap">
            <div class="theater__header">

                <div class="theater__name-wrap">
                    <h3>
                      {theatre.theatreName}
                    </h3>
                </div>

                <div>
                    <span>{theatre.theatreAddress}</span>
                </div>
                <div>
                    <NavLink>Map</NavLink>
                    <NavLink>Amenities</NavLink>
                </div>
            </div>

            <ListGroup className="listgroupStyle" >

                <ListGroupItem>


                    <h3>
                        Select a movie time to buy Standard Showtimes
                    </h3>


                    <ul class="theater__amentiy-list">

                        <li class="mop-theater__amenity-icon-wrap">
                            <NavLink>Closed caption</NavLink>
                        </li>

                        <li class="mop-theater__amenity-icon-wrap">
                            <NavLink>Accessibility devices available</NavLink>
                        </li>

                    </ul>
                    <ListGroup className="listgroupStyle" >

                        {this.returnTheatreTiming(theatre.movieTimings) }

                    </ListGroup>
                </ListGroupItem>

            </ListGroup>

        </div>
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
                    <div><h2>Theatres List</h2></div>
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
        theatres:state.theatres
    };
}


export default connect(mapStateToProps)(AllTheatresAndTimings);



