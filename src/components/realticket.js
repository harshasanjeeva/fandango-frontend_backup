import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actiondetails} from "../actions/loginactions";
import Navbarmain from './Navbarmain'
import {
    NavItem,
    NavLink,
} from 'reactstrap';


class realticket extends Component {

    render() {
        return (
        <div style={{backgroundColor:"black",height:"1000px"}}>
        <Navbarmain />
        <br />
            <Table>
                <thead>
                <tr>
                    <th style={{color:"orange"}}>Customer Name</th>
                    <th style={{color:"orange"}}>Movie Name</th>
                    <th style={{color:"orange"}}>Theatre Name</th>
                    <th style={{color:"orange"}}>Ticket Amount</th>
                    <th style={{color:"orange"}}>Children</th>
                    <th style={{color:"orange"}}>Student</th>
                    <th style={{color:"orange"}}>General</th>
                </tr>
                </thead>
                <tbody>
                {console.log(this.props.tickets)}
                {this.props.tickets.map(row => {
                    return(
                        <tr>
                            <td key={row.name} style={{color:"silver"}}>{row.name}</td>
                            <td key={row.movieName} style={{color:"silver"}}>{row.movieName}</td>
                            <td key={row.theatrename} style={{color:"silver"}}>{row.theatrename}</td>
                            <td key={row.total_amount} style={{color:"silver"}}>{row.total_amount}</td>
                            <td key={row.children} style={{color:"silver"}}>{row.children}</td>
                            <td key={row.student} style={{color:"silver"}}>{row.student}</td>
                            <td key={row.general} style={{color:"silver"}}>{row.general}</td>
                        </tr>
                    )
                })
                };
                </tbody>
            </Table>
            <NavItem>
                <NavLink href="/Movies"><Button color="success">Return to Movies</Button></NavLink>
            </NavItem>
        </div>
        );
    }
}

const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        tickets: [stores.user.realticket.realticket]
    }
}

export default connect(mapStateToProps)(realticket);