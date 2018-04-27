import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import {actionmovies,actiongetmovies} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from '../Navbarmain'
import history from "../History";


class adminHome extends Component {

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

    componentWillReceiveProps(nextProps){
        history.push('/movies');
    }

    render() {
        return (
            <div>

            </div>

        );

    }}


export default (adminHome);
