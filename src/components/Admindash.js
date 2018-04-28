import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { withRouter } from 'react-router-dom';
import Homemain from './Homemain'
import Navbarheader from './Navbarlogout'
import {Link} from 'react-router-dom';
import Footer from './Footer'
import {Row,Col} from 'reactstrap'
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
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Red"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Green"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	}
]

    var chartData= {
        labels: ["January", "February", "March", "April", "May", "June", "July","MOV","mov","mov"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "#0077BE",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40,10,50,60]
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
       <h4 style={{color:"silver",float:"left"}}>Movies with its revenue/year</h4>
       <BarChart data={chartData} width="500" height="250" style={{float:"left"}}/>
       </Col>

       <Col>
       <h4 style={{color:"silver",float:"left",marginLeft:"60px"}}>Movies with its revenue/year</h4>
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




export default withRouter(Admindash);