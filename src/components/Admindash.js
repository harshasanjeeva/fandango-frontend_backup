import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { withRouter } from 'react-router-dom';
import Homemain from './Homemain'
import Navbarheader from './admin/Navbarmain'
import {Link} from 'react-router-dom';
import Footer from './Footer'
import {Row,Col} from 'reactstrap'
import {actiongetmovies, actionmovies, analytics} from "../actions/loginactions";
import {connect} from "react-redux";
Charts(FusionCharts);



class Admindash extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }



  render() {
    const myDataSource = {
        chart: {
        caption: 'Harry\'s SuperMart',
        subCaption: 'Top 5 stores in last month by revenue',
        numberPrefix: '$',
        theme: 'carbon',
        },
        data: [
        {
            label: 'Bakersfield Central',
            value: '880000',
        },
        {
            label: 'Garden Groove harbour',
            value: '730000',
        },
        {
            label: 'Los Angeles Topanga',
            value: '590000',
        },
        {
            label: 'Compton-Rancho Dom',
            value: '520000',
        },
        {
            label: 'Daly City Serramonte',
            value: '330000',
        },
        ],
    };
 
var LineChart = require("react-chartjs").Line;   
var BarChart = require("react-chartjs").Bar;
var DoughnutChart = require("react-chartjs").Doughnut;
var data = [
	{
		value: this.props.revenue_list[0],
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: this.props.halls_list[0]
	},
	{
		value: this.props.revenue_list[1],
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: this.props.halls_list[1]
	},
	{
		value: this.props.revenue_list[2],
		color: "#FDB45C",
		highlight: "#FFC870",
		label: this.props.halls_list[2]
	},

    {
        value: this.props.revenue_list[3],
        color: "#008080",
        highlight: "#008080",
        label: this.props.halls_list[3]
    },

    {
        value: this.props.revenue_list[4],
        color: "#0000FF",
        highlight: "#0000FF",
        label: this.props.halls_list[4]
    },

    {
        value: this.props.revenue_list[5],
        color: "#000080",
        highlight: "#000080",
        label: this.props.halls_list[5]
    },

    {
        value: this.props.revenue_list[6],
        color: "#FF00FF",
        highlight: "#FF00FF",
        label: this.props.halls_list[6]
    },

    {
        value: this.props.revenue_list[7],
        color: "#800080",
        highlight: "#800080",
        label: this.props.halls_list[7]
    },

    {
        value: this.props.revenue_list[8],
        color: "#00FFFF",
        highlight: "#00FFFF",
        label: this.props.halls_list[8]
    },

    {
        value: this.props.revenue_list[9],
        color: "#008000",
        highlight: "#008000",
        label: this.props.halls_list[9]
    }


]

    var chartData= {
        labels: this.props.movies_list,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "#0077BE",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.props.rev_list
            }
            // {
            //     label: "My Second dataset",
            //     fillColor: "rgba(151,187,205,0.2)",
            //     strokeColor: "rgba(151,187,205,1)",
            //     pointColor: "rgba(151,187,205,1)",
            //     pointStrokeColor: "#fff",
            //     pointHighlightFill: "#fff",
            //     pointHighlightStroke: "rgba(151,187,205,1)",
            //     data: [28, 48, 40, 19, 86, 27, 90]
            // }
        ]
    };
    return (
      <div style={{backgroundColor:"black"}}>
  
      <div >



       <Navbarheader />
       <Row>
       <Col>
       <h4 style={{color:"silver",float:"left"}}>city wise revenue/year</h4>
       <BarChart data={chartData} width="500" height="250" style={{float:"left"}}/>
       </Col>

       <Col>
       <h4 style={{color:"silver",float:"left",marginLeft:"60px"}}>show first 10 movies with its revenue/year</h4>
       <LineChart data={chartData} width="600" height="250"/>
       </Col>

       </Row >
       <h5 style={{color:"silver"}}>10 halls who sold maximum number of tickets last month with its revenue</h5>
       <DoughnutChart data={data}  width="600" height="250"/>
  
        

      <Footer />


      </div>


  
      </div>
    );


  }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionmovies(data)),
        getmovies : (data) => dispatch(actiongetmovies(data)),
        analytics : (data) => dispatch(analytics(data))
    };
}


function mapStateToProps(state) {
    console.log(state);
    console.log("halls_list in admindash:",state.user.graph1.halls_list);
    console.log("revenue_list in admindash:",state.user.graph1.revenue_list);
    console.log("movies_list in admindash:",state.user.graph2.movies_list);
    console.log("revenue_list in admindash:",state.user.graph2.revenue_list);

    return {
        halls_list:state.user.graph1.halls_list,
        revenue_list:state.user.graph1.revenue_list,
        movies_list:state.user.graph2.movies_list,
        rev_list:state.user.graph2.revenue_list,


    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Admindash);



