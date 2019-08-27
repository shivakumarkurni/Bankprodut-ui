import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

export default class GraphMonth extends PureComponent {
  constructor() {
    super()
    this.state = {
      trendingStockList: []
    }
  }
  componentDidMount() {

    this.getData().then(response => {
      console.log(response.data)
      this.setState({ trendingStockList: response.data });
    });


  }
  getData = () => {


    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.181:9093/bank/analysis/month').then((response) => {
        resolve(response);
        console.log(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

//   back = () => {
//     this.props.history.push(`/listOfStocks`)
//   }



  render() {
    return (
      <div className="row">
        <div className="container header-title">
          <span className="graph">Top Trending Stocks</span>
          <button className="cancel-btn" onClick={this.back}>Back</button>


          <BarChart
            width={500}
            height={300}
            data={this.state.trendingStockList}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="productName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="productId" fill="#696969" />
          </BarChart>
        </div>
      </div>
    );
  }
}


