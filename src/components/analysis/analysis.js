import React, { Component } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



class Analysis extends Component {
    
    dailyAnalysis = (event) => {
        event.preventDefault();
        this.props.history.push('/graphday');
    }
    weeklyAnalysis = (event) => {
        event.preventDefault();
        this.props.history.push('/graphweek');
    }
    monthlyAnalysis = (event) => {
        event.preventDefault();
        this.props.history.push('/graphmonth');
    }
    
    
    render() {
        return (
            <div className="row container">
                <button className="col-md-4" onClick={this.dailyAnalysis}>Daily Analysis</button>
                <button className="col-md-4" onClick={this.weeklyAnalysis}>Weekly Analysis</button>
                <button className="col-md-4" onClick={this.monthlyAnalysis}>Monthly Analysis</button>
            </div>
        )
    }
}

export default Analysis;
