import React, {Component} from 'react';
import { Container,Row,Col,ListGroupItem,ListGroup,NavLink,Button} from 'reactstrap';
import '.././App.css';
import Navbarmain from './Navbarmain';
import {connect} from 'react-redux';
import history from './History';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ButtonToolbar} from 'reactstrap';


let style1={listStyleType: 'none',overflow:'hidden'};
let style2={float:'left',display:'inline-block'};


var dummymovieid;
var dummymovieName;

var dummygenre;
var dummyrelease;
var dummyuser_id;
class AllTheatresAndTimings extends Component {

    constructor(props) {
        super(props);

        this.state = {

            movieType:'',
            movieId:''

        };

    }



    returnTheatreTiming = (timings,name) => {
        console.log("in mapped timinings theatre===>",timings.theatreName)
        //movieTimings
        return timings.map((timing)=>{
            return(
                <Button style={{color:'green'}}>
                    <Button color="warning"
                            onClick={(event) => {
                                this.setState({
                                    user_id:this.props.user_id,// get userid
                                    timings:timing
                                })


                                console.log("movieis-->",dummymovieid, "moviename-->",dummymovieName,"genre-->",dummygenre, "release-->",dummyrelease, "theatrename-->",name, "timings-->",timing, "userid-->",dummyuser_id)
                                console.log("in All theatres")
                                setTimeout(function(){
                                    history.push
                                    ({
                                        pathname: '/BookTicket',
                                        state: {movieIds: dummymovieid, movieNames:dummymovieName,genre:dummygenre, release:dummyrelease, theatrename:name, timings:timing, user_id:dummyuser_id}
                                    });
                                },1000)
                            }}>{timing}</Button>
                </Button>
            );
        });
    }
    renderList()
    {
        const {location} = this.props;
        dummymovieid=location.state.movieIds;
        dummymovieName=location.state.movieNames;
        dummygenre=location.state.genre;
        dummyrelease=location.state.release;
        dummyuser_id=location.state.user_id;
        console.log("All theatres -==>",location.state.movieIds, location.state.movieNames,location.state.genre, location.state.release);
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
                            {this.returnTheatreTiming(theatre.movieTimings,theatre.theatreName) }

                            </ListGroup>
                        </ListGroupItem>

                    </ListGroup>

                </div>
            );
        });
    }

    render() {
        const {location} = this.props;
        console.log("All theatres -==>",location.state.movieIds, location.state.movieNames,location.state.genre, location.state.release, location.state.user_id);

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
                                        <strong style={{color: "white"}}>Movie:{location.state.movieNames}</strong>
                                    </div>
                                    <div style={{color: "white"}}>
                                        <strong>Released:{location.state.release}</strong>
                                    </div>
                                    <div style={{color: "white"}}>
                                        <strong>Genre:{location.state.genre}</strong>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-md-8" alight="left">
                            <Container className="test" >
                                <Row>
                                    <Col style={{backgroundColor:'black', float:'left',color:'white'}}>Theatres List for <h4 style={{color:'white'}}></h4></Col>
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