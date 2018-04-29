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



class Adminanalytics extends Component {

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

var incomingdatalabel = ["Movies Page", "Movies details page", "Number of Tickets ", "Payments", "Tickets", "Profile", "Reviews"];
var incommingclicksnum = [65, 59, 80, 81, 56, 55,4]
var user1 = [65, 59, 80, 81, 56, 55, 40]
var user2 = [28, 48, 40, 19, 86, 27, 90]
var user3 =  [18, 42, 30, 29, 16, 53, 30]
var user4 = [12,32, 43, 32, 65, 34, 23]

var movieRatinglabel = ["Avengers", "abd", "asdasd ", "asdasd", "asdasd", "asdasd", "sfg"]
var movieRatingdata= [6.5, 5.9, 8.0, 8.1, 5.6, 5.5,9]


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

    var chartDatas= {
        labels: incomingdatalabel,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "#20c997",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: incommingclicksnum
            }
        ]
    };

   var movieRating ={
    labels: movieRatinglabel,
    datasets: [
        {
            label: "My First dataset",
			fillColor: "#0077BE",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
            data: movieRatingdata
        }
    ]
};
   
var PolarAreaChart = require("react-chartjs").PolarArea;

var Polar = [
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
	},
	{
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "Grey"
	},
	{
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Dark Grey"
	}

];
    


    var chartData= {
        labels: incomingdatalabel,
        datasets: [
            {
                label: "User1",
                fillColor: "rgb(244, 65, 103,0.2)",
                strokeColor: "rgb(244, 65, 103,1)",
                pointColor: "rgb(244, 65, 103,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: user1
            },
            {
                label: "User2",
                fillColor: "rgb(65, 244, 152,0.2)",
                strokeColor: "rgb(65, 244, 152,1)",
                pointColor: "rgb(65, 244, 152,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user2
            },
            {
                label: "User3",
                fillColor: "rgb(244, 158, 66,0.2)",
                strokeColor: "rgb(244, 158, 66,1)",
                pointColor: "rgb(244, 158, 66,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user3
            },
            {
                label: "User4",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: user4
            }
        ]
    };
    return (
      <div style={{backgroundColor:"black"}}>
  
      <div >



       <Navbarheader />
       <Row>
<Col>
      
       <h5 style={{color:"silver"}}>UNKNOWN</h5>
       <PolarAreaChart data={Polar}  width="300" height="200"/>

       </Col>

       <Col>
       <h5 style={{color:"silver"}}>Ratings for Movies</h5>
       <BarChart data={movieRating} width="300" height="250" style={{float:"left"}}/>
       </Col>



       <Col>
      
       <h5 style={{color:"silver"}}>UNKNOWN</h5>
       <DoughnutChart data={data}  width="300" height="200"/>
       </Col>



       </Row>
       <br />


       <Row>
       <Col>
       <h4 style={{color:"silver"}}>Total clicks per Component</h4>
       <BarChart data={chartDatas} width="700" height="250" style={{float:"left"}}/>
      
       </Col>

       <Col>
       <h4 style={{color:"silver",float:"left"}}>Top 3 Users comparision</h4>
       <LineChart data={chartData} width="700" height="250"/>
       </Col>


       </Row >
       <br />


      <Footer />


      </div>


  
      </div>
    );


  }
}




export default withRouter(Adminanalytics);