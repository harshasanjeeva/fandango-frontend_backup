import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button,FormGroup,Input,Card,CardTitle,CardText,DropdownToggle,DropdownItem,DropdownMenu,Dropdown,Form} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {actionaddmovies, addHall, getMovieHalls, viewAllUsers} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain'
import history from "../History";


class adminMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieName:'',
            movieVideoLink:'',
            movieLink:'',
            cast: '',
            movieType:'Drama',
            movieTiming:'',
            rating:'',
            photos: '',
            length:'',
            reviews: '',
            modal: false,
            dropdownOpen: false,
            searchMovieName:''
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    renderTheatres = () =>
    {
        const movies = this.props.movies;
        if (movies.length !== 0 && movies !== null && movies !== undefined)
        {
            var filteredMovies = movies.filter(
                (movie) => {
                    return movie.movieName.toLowerCase().indexOf(this.state.searchMovieName.toLowerCase()) !== -1;
                }
            );


            return filteredMovies.map((movie) => {
                return (

                    <ListGroupItem action
                                   key={movie._id} style={{backgroundColor:"black",padding:"10px"}}>

                        <Card body style={{backgroundColor:"black",padding:"10px",border:"solid white"}}>
                            <CardTitle style={{color:"orange"}}><span>Movie Name: </span>{movie.movieName}</CardTitle>
                            <CardText style={{color:"white"}}><span>Movie Category: </span>{movie.movieType}</CardText>
                            <Button onClick={(event)=>{
                                document.getElementById("addMovie").innerText="Update Movie";
                                document.getElementById("addMovieButton").innerText="Update";
                                document.getElementById("movieName").value=movie.movieName;
                                this.state.movieName=document.getElementById("movieName").value;
                                document.getElementById("movieLink").value=movie.movieVideoLink;
                                this.state.movieVideoLink=document.getElementById("movieLink").value;
                                document.getElementById("cast").value=movie.cast;
                                this.state.cast=document.getElementById("cast").value;
                                document.getElementById("movieType").value=movie.movieType;
                                this.state.movieType=document.getElementById("movieType").value;
                                document.getElementById("movieTiming").value=movie.movieTiming;
                                this.state.movieTiming=document.getElementById("movieTiming").value;
                                document.getElementById("rating").value=movie.rating;
                                this.state.rating=document.getElementById("rating").value;
                                document.getElementById("length").value=movie.length;
                                this.state.length=document.getElementById("length").value;
                                document.getElementById("reviews").value=movie.reviews;
                                this.state.reviews=document.getElementById("reviews").value;
                                this.state.type='update';
                                this.props.getMovieHalls();
                                setTimeout(function () {
                                    history.push
                                    ({
                                        pathname: '/adminMainPage'
                                    });
                                },1000)

                            }}>
                                Edit</Button>
                        </Card>
                        <br/>



                    </ListGroupItem>

                );
            });

        }


    }


    render() {
        return (
            <Container>

                <Row style={{marginTop:"20px",color:"white"}}>
                    Enter Movie Name
                    <Col>
                        <FormGroup style={{marginLeft:"20px"}}>
                            <Input
                                type="text"
                                value={this.state.searchMovieName}
                                onChange={(event) => {
                                    this.setState({
                                        searchMovieName: event.target.value
                                    });
                                }}
                            />

                        </FormGroup>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <ListGroup>
                            {this.renderTheatres()}
                        </ListGroup>
                    </Col>

                    <Col>

                        <div >
                            <h3 id="addMovie" style={{color:"teal"}}>Add New Movie</h3>
                        </div>
                        <div >

                            <Form>
                                <div>
                                    <span style={{color:"white", float:"left"}}>Title:</span>
                                    <Input

                                        type="text"
                                        id="movieName"
                                        placeholder="Enter Title"
                                        value={this.state.movieName}
                                        onChange={(event) => {
                                            this.setState({
                                                movieName: event.target.value
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Trailer Link:</span>
                                    <Input

                                        type="text"
                                        id="movieLink"
                                        placeholder="Enter Trailer Link"
                                        value={this.state.movieVideoLink}
                                        onChange={(event) => {
                                            this.setState({
                                                movieVideoLink: event.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span style={{color:"white", float:"left"}}>Movie Type:</span>


                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="movieType">
                                        <DropdownToggle caret>
                                            Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu onChange={(event)=>{
                                            this.setState({
                                                movieType:event.target.value
                                            })
                                        }}>
                                            <DropdownItem header>Action</DropdownItem>
                                            <DropdownItem onClick={(event) =>{
                                                this.setState({
                                                    movieType:event.target.innerText
                                                })
                                                console.log("event  movie type==>",event.target.innerText)

                                            }}>Drama</DropdownItem>
                                            <DropdownItem onClick={(event) =>{
                                                this.setState({
                                                    movieType:event.target.innerText
                                                })
                                                console.log("event  movie type==>",event.target.innerText)

                                            }}>Comedy</DropdownItem>
                                            <DropdownItem onClick={(event) =>{
                                                this.setState({
                                                    movieType:event.target.innerText
                                                })
                                                console.log("event  movie type==>",event.target.innerText)

                                            }}>Romance</DropdownItem>
                                            <DropdownItem onClick={(event) =>{
                                                this.setState({
                                                    movieType:event.target.innerText
                                                })
                                                console.log("event  movie type==>",event.target.innerText)

                                            }}>Horror</DropdownItem>
                                            <DropdownItem onClick={(event) =>{
                                                this.setState({
                                                    movieType:event.target.innerText
                                                })
                                                console.log("event  movie type==>",event.target.innerText)

                                            }}>Sci-Fi</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Movie Cast:</span>
                                    <Input

                                        type="textarea"
                                        id="cast"
                                        placeholder="Enter cast details"
                                        value={this.state.cast}
                                        onChange={(event) => {
                                            this.setState({
                                                cast: event.target.value
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Release Date:</span>
                                    <Input

                                        type="date"
                                        id="movieTiming"
                                        placeholder="Enter release date"
                                        value={this.state.movieTiming}
                                        onChange={(event) => {
                                            this.setState({
                                                movieTiming: event.target.value
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Ratings:</span>
                                    <Input

                                        type="number"
                                        id="rating"
                                        placeholder="Enter ratings"
                                        value={this.state.ratings}
                                        onChange={(event) => {
                                            this.setState({
                                                rating: parseInt(event.target.value)
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Photos:</span>
                                    <Input

                                        type="file"
                                        id="photos"
                                        placeholder="Add Photos"
                                        value={this.state.photos}
                                        onChange={(event) => {
                                            this.setState({
                                                photos: event.target.value
                                            });
                                        }}
                                    />
                                </div>

                                <div>
                                    <span style={{color:"white", float:"left"}}>Movie length:</span>
                                    <Input

                                        type="text"
                                        id="length"
                                        placeholder="hr:min:sec"
                                        value={this.state.length}
                                        onChange={(event) => {
                                            this.setState({
                                                length: event.target.value
                                            });
                                        }}
                                    />
                                </div>


                                <div>
                                    <span>Ratings & Reviews</span>
                                    <Input

                                        type="textarea"
                                        id="reviews"
                                        placeholder="Ratings & Reviews"
                                        value={this.state.reviews}
                                        onChange={(event) => {
                                            this.setState({
                                                reviews: [event.target.value]
                                            });
                                        }}
                                    />
                                </div>
<br />
                                <div>
                                    <Button
                                        color="success"
                                        id="addMovieButton"
                                        type="button"
                                        onClick={() => this.props.log(this.state)}>
                                        Add
                                    </Button>
                                </div>


                            </Form>


                        </div>

                    </Col>

                </Row>


            </Container>

        );

    }}
function mapStateToProps(state) {
    return {
        movies:state.user.movies.movie_data.moviedata
    };
}
const mapDispatchToProps =(dispatch)=> {
    return {
        addHall : (data) => dispatch(addHall(data)),
        viewAllUsers : (data) => dispatch(viewAllUsers(data)),
        getMovieHalls: () => dispatch(getMovieHalls()),
        log : (data) => dispatch(actionaddmovies(data))

    };
}


export default connect(mapStateToProps,mapDispatchToProps) (adminMovies);
