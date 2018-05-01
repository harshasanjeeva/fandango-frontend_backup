
import React, {Component} from 'react';
import { Row, Col, Input} from 'reactstrap';
import { Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import Navbarmain from './Navbarmain'
import { withRouter } from 'react-router-dom';



class BookTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userid,
            movie_id: this.props.movieid,
            general:1,
            student: 1,
            children: 1,
            general_amount:'',
            student_amount:'',
            children_amount:'',
            modal: false,
            total_amount:1,
            total_tickets:1,
            prevdata2:""
        };
        this.toggle = this.toggle.bind(this);
        this.handleMoviesClick = this.handleMoviesClick.bind(this);

   
        // genre:location.state.genre, release:location.state.release,
        // theatrename:location.state.theatrename, timings: location.state.timings, general:a,
        // student:b, children:c
        
    }





    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleMoviesClick = (event,data) => {
        event.preventDefault();
       
        this.setState({
            prevdata2: data,
            total_amount:parseInt(this.state.general_amount)+parseInt(this.state.student_amount)+parseInt(this.state.children_amount),
            total_tickets:parseInt(this.state.children)+parseInt(this.state.student)+parseInt(this.state.general)
        })
        var total = parseInt(this.state.general_amount)+parseInt(this.state.student_amount)+parseInt(this.state.children_amount)
        var tickets = parseInt(this.state.children)+parseInt(this.state.student)+parseInt(this.state.general)
        
        
        var x = this.state.total_amount;
        var y = this.state.total_tickets;
        var a = this.state.general;
        var b = this.state.student;
        var c = this.state.children;
        console.log("-->",x,y,a )
        console.log("-->", data.theatrename,data.timings )
        
        console.log("====> data.movieIds",data.movieIds)
        console.log("====> data.movieNames",data.movieNames)
        console.log("====> total",total)
        console.log("====> tickets",tickets)
        console.log("====> data.genre",data.genre  )
        console.log("====> data.release",data.release  )
        console.log("====> data.theatrename",data.theatrename )
        console.log("====> data.timings",data.timings )
        console.log("====> a",a )
        console.log("====> b",b )
        console.log("====> c",c)


        setTimeout(function(){history.push
        ({
            pathname: '/Payments',
            state: {  movieId: data.movieIds, 
                movieName:data.movieNames, total_amount:total,
                total_tickets:tickets, genre:data.genre, release:data.release,
                theatrename:data.theatrename, timings: data.timings, general:a,
                student:b, children:c}
        });
    },1000)

    }


    navigate()
    {
        history.push('/');
    }


    render() {
        const { location } = this.props;
        console.log("-->",location)
        //console.log("Tickets -==>",location.state.movieIds, location.state.movieNames,location.state.genre,location.state.release, location.state.theatrename, location.state.timings)

   

        return (
            <div style={{backgroundColor:"black" ,height: "1000px"}}>
                <Navbarmain />
                <br />
                <Row>
                    <Col>
                        <Card style={{          width: 600,
                            marginLeft: '300px',
                            height: 450,
                            backgroundColor:"black",
                            border:"solid white",
                            borderWidth:"0.5px",
                            borderColor: "white"}}>
                            <div>
                                <div>

                                </div>
                                <div >
                                </div>

                                <div >
                                    <form>
                                        <div >
                                            <h1 style={{color:"orange"}}>FANDANGO </h1>
                                            <h1 style={{color:"silver"}}>Ticket Selection</h1>
                                        </div>
                                        <div >
                                            <strong style={{float:"left",color:"white"}}>General:</strong>
                                            <Input
                                            style={{backgroundColor:"black",color:"silver"}}
                                                type="number"
                                                label="No of Tickets"
                                                placeholder="Enter Number"
                                                //value={this.state.general}
                                                onChange={(event) => {
                                                    this.setState({
                                                        general:parseInt(event.target.value),
                                                        general_amount: parseInt(event.target.value)  * 10
                                                    });
                                                }}
                                            />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <strong style={{float:"left",color:"white"}}>Student:</strong>
                                            <Input
                                            style={{backgroundColor:"black",color:"silver"}}
                                                type="number"
                                                label="student"
                                                placeholder="Enter Number"
                                                // value={this.state.student}
                                                onChange={(event) => {
                                                    this.setState({
                                                        student: parseInt(event.target.value),
                                                        student_amount: parseInt(event.target.value) * 8
                                                    });
                                                }}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <strong style={{float:"left",color:"white"}}>Children:</strong>
                                            <Input
                                            style={{backgroundColor:"black",color:"silver"}}
                                                type="number"
                                                label="children"
                                                placeholder="Enter Number"
                                                //value={this.state.children}
                                                onChange={(event) => {
                                                    this.setState({
                                                        children: parseInt(event.target.value),
                                                        children_amount: parseInt(event.target.value) * 7
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">

                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={(event) =>{

                                                    this.handleMoviesClick(event,location.state);

                                                }}>
                                                Continue to seat selection
                                            </button>
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
        //log : (data) => dispatch(actionticket(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        tick : stores.user.ticket_status,
        movieid: 456
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookTicket));
