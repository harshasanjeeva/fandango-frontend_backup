import React, { Component } from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '.././App.css';
import Navbarmain from './Navbarmain';
import {connect} from 'react-redux';
import history from './History';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ButtonToolbar, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav } from 'reactstrap';


let style1={listStyleType: 'none',overflow:'hidden'};
let style2={float:'left',display:'inline-block'};




class AllTheatresAndTimings extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:''

        };

    }



    returnTheatreTiming = (timings) => {
            return timings.map((timing)=>{
                return(
                    <ListGroupItem style={{color:'green'}}>
                        {timing}
                    </ListGroupItem>
                    );
                });
            }
    renderList()
    {
        return this.props.theatres.map((theatre) => {
            return (
        <div class="theater__wrap" style={{border:'solid', borderColor:'1px', borderWidth: "0.5px", padding: "7px"}}>
            <div class="theater__header" >

                <div class="theater__name-wrap">
                    <h3 style={{color:'orange'}}>
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
        const {location} = this.props;
        return (<div id="har" style={{backgroundColor: "black"}}>
            <Navbarmain />

            <Tabs>
            <TabList >
              <Tab style={{color: "orange"}}>Overview</Tab>
              <Tab style={{color: "orange"}}>Movie Times + Tickets</Tab>
              <Tab style={{color: "orange"}}>Synopsis</Tab>
              <Tab style={{color: "orange"}}>Reviews</Tab>
              <Tab style={{color: "orange"}}>Trailer</Tab>
            </TabList>
        
            <TabPanel>
             
            <div className="row">

            <div className="col-md-4" align="left" style={{border: '1px solid black'}} >
                <div className="col-md-12" align="left">
                    <a href="#"><img src="" height="200px" width="200px"/></a>
                    <div>
                        <div style={{color: "white"}}>
                            <strong style={{color: "white"}}>Movie:</strong>
                        </div>
                        <div style={{color: "white"}}>
                    <strong>Released:</strong> 
                        </div>
                        <div style={{color: "white"}}>
                    <strong>Genre:</strong>
                        </div>
                    <div style={{color: "white"}}>
                    <strong>Theatre:</strong>
                    </div>
                    </div>


                </div>

                    <div className="col-sm-8" >
                        <div style={{color: "white"}}>
                        {<strong>Movie booking here</strong>}
                        </div>

                        {<strong style={{color: "white"}}>Show Timings:</strong>}

                        <ButtonToolbar>
                        <Button color="warning"
                                onClick={(event) => this.props.log(this.state)}>7:30 PM</Button>

<span />
                            <Button color="warning" bsSize="small"
                            onClick={() => {
                                // history.push('/tickets');
                                this.props.log(this.state)
                            }}>8:00 PM</Button>

                            <Button color="warning"
                                    onClick={(event) => this.props.log(this.state)}>8:30 PM</Button>
                            <Button color="warning"
                                    onClick={(event) => this.props.log(this.state)}>9:00 PM</Button>
                            <Button color="warning"
                                    onClick={(event) => this.props.log(this.state)}>10:00 PM</Button>
                            <Button color="link"
                                  onClick={(event)=>{

                                this.handleTheatresClick(event)}}><strong>SEE ALL THEATRES + MOVIE TIMINGS</strong></Button>
                        </ButtonToolbar>

                    </div>
                    </div>

                    <div className="col-md-8" alight="left">
                    <Container className="test" >


                    <Row>
                        <Col style={{backgroundColor:'black', float:'left',color:'white'}}>Theatres List for <h4 style={{color:'white'}}>{location.state.movieName}</h4></Col>
                    </Row>
    
    
                    <Row>
                        <ListGroup className="listgroupMovies" style={{color:'white'}}>
                            {this.renderList()}
                        </ListGroup>
                    </Row>
    
    
                </Container>
                </div>
          

        </div>












            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
          </Tabs>




    


            </div> );

    }}
function mapStateToProps(state) {
    return {
        theatres:state.theatres
    };
}


export default connect(mapStateToProps)(AllTheatresAndTimings);



