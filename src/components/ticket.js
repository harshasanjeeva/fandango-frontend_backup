import React, {Component} from 'react';
import { Row, Col, Input} from 'reactstrap';
import { Card} from 'reactstrap';
import {connect} from 'react-redux';
import history from "./History";
import Navbarmain from './Navbarmain'


class ticket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userid,
            movie_id: this.props.movieid,
            general:0,
            student: 0,
            children: 0,
            general_amount:'',
            student_amount:'',
            children_amount:'',
            modal: false,
            total_amount:0,
            total_tickets:0,
            prevdata2:""
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
        history.push('/');
    }


    render() {
        const { olddata } = this.props;
        if (this.props.tick){
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
                                            <h1>Ticket Selection</h1>
                                        </div>
                                        <div >
                                            <strong>General:</strong>
                                            <Input

                                                type="number"
                                                label="No of Tickets"
                                                placeholder="Enter Number"
                                                value={this.state.general}
                                                onChange={(event) => {
                                                    this.setState({
                                                        general:parseInt(event.target.value),
                                                        general_amount: parseInt(event.target.value * 10)
                                                    });
                                                }}
                                            />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <strong>Student:</strong>
                                            <Input

                                                type="number"
                                                label="student"
                                                placeholder="Enter Number"
                                                value={this.state.student}
                                                onChange={(event) => {
                                                    this.setState({
                                                        student: parseInt(event.target.value),
                                                        student_amount: event.target.value * 8
                                                    });
                                                }}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <strong>Children:</strong>
                                            <Input

                                                type="number"
                                                label="children"
                                                placeholder="Enter Number"
                                                value={this.state.children}
                                                onChange={(event) => {
                                                    this.setState({
                                                        children: parseInt(event.target.value),
                                                        children_amount: event.target.value * 7
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">

                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={() =>{
                                                    this.setState({
                                                        prevdata2: olddata,
                                                        total_amount:this.state.general_amount+this.state.student_amount+this.state.children_amount,
                                                        total_tickets:this.state.children+this.state.student+this.state.general
                                                    })
                                                    history.push
                                                    ({
                                                        pathname: '/Payments',
                                                        state: this.state
                                                    });
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
        userid : 123,
        movieid: 456
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ticket);
