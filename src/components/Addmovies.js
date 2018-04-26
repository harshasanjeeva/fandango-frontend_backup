import React, {Component} from 'react';
import {actionaddmovies} from '../actions/loginactions';
import { Form, Row, Col, Input} from 'reactstrap';
import { Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";;
import Navbarmain from './Navbarmain'

class Addmovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin_id: this.props.adminid,
            title:'',
            trailer:'',
            cast: '',
            release_date:'',
            ratings:'',
            photos: '',
            length:'',
            theatres:'',
            reviews: '',
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }




    navigate()
    {
        history.push('/addhall');
    }


    render() {

        if (this.props.add==true){
    //alert("movie add successfull");
            this.navigate();
        }






        return (
            <div style={{backgroundColor:"white" ,height: "100% !important"}}>
                <Navbarmain />
                <Row>

                    <Col>
                        <Card style={{backgroundColor:"white", border: "solid", align: "left",
                            borderColor: "white"}}>
                            <div>
                                <div>

                                </div>
                                <div >
                                </div>

                                <div >
                                    <form>
                                        <div >
                                            <h1 style={{color:"white"}}>FANDANGO </h1>
                                            <h1>Add Movies</h1>
                                        </div>
                                        <div >

                                            <Form>
                                                <div>
                                                    <strong>Title:</strong>
                                                    <Input

                                                        type="text"
                                                        label="title"
                                                        placeholder="Enter Title"
                                                        value={this.state.title}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                title: event.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Trailer Link:</strong>
                                                    <Input

                                                        type="text"
                                                        label="trailer"
                                                        placeholder="Enter Trailer Link"
                                                        value={this.state.trailer}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                trailer: event.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Movie Cast:</strong>
                                                    <Input

                                                        type="textarea"
                                                        label="cast"
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
                                                    <strong>Release Date:</strong>
                                                    <Input

                                                        type="date"
                                                        label="release"
                                                        placeholder="Enter release date"
                                                        value={this.state.release_date}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                release_date: event.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Ratings:</strong>
                                                    <Input

                                                        type="number"
                                                        label="rating"
                                                        placeholder="Enter ratings"
                                                        value={this.state.ratings}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                ratings: parseInt(event.target.value)
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Photos:</strong>
                                                    <Input

                                                        type="file"
                                                        label="photos"
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
                                                    <strong>Movie length:</strong>
                                                    <Input

                                                        type="text"
                                                        label="length"
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
                                                    <strong>See it in:</strong>
                                                    <Input

                                                        type="text"
                                                        label="theatres"
                                                        placeholder="Theatres"
                                                        value={this.state.theatres}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                theatres: event.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <strong>Ratings & Reviews</strong>
                                                    <Input

                                                        type="textarea"
                                                        label="review"
                                                        placeholder="Ratings & Reviews"
                                                        value={this.state.reviews}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                reviews: event.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        onClick={() => this.props.log(this.state)}>
                                                        Add
                                                    </button>
                                                </div>


                                            </Form>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col> </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionaddmovies(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores.user.stores.addmovie_status);
    console.log(stores);
    return {

        add : stores.user.stores.addmovie_status,
        adminid : 123,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Addmovies);

