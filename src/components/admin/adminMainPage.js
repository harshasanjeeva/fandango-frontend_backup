import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import '../../App.css';
import {addHall, viewAllUsers} from '../../actions/loginactions';
import {connect} from 'react-redux';
import Navbarmain from './Navbarmain';
import AdminHome from './adminMovieHalls';
import AdminMovies from './adminMovies';
import { withRouter } from 'react-router-dom';
import history from "../History";
import {actionAdminLogin, getMovieHalls} from "../../actions/loginactions";

class adminMainPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div style={{backgroundColor:"black"}}>
            <Navbarmain/>   
            <br />
            <Container >
          
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            onClick={() => { this.toggle('1'); }}
                            style={{color:"orange",border:"solid white",borderWidth:"0.5px"}}>
                            Movie Halls
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => { this.toggle('2'); }}
                            style={{color:"orange",border:"solid white",borderWidth:"0.5px"}} >
                            Movies
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <AdminHome></AdminHome>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        {/*<Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>*/}
                        <AdminMovies></AdminMovies>
                    </TabPane>
                </TabContent>
            </Container>
            </div> );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionAdminLogin(data)),
        getMovieHalls: () => dispatch(getMovieHalls())
    };
}
const mapStateToProps = (state)=> {
    return
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(adminMainPage));