import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftBar from '../left-bar/left-bar'


class StatementList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: {
                month:'',
                date:'',
                year:'',
                transactionType:''
            },
            list: []
        }
    }

    handleChange = (event) => {
        const { list1 } = this.state;
        list1[event.target.name] = event.target.value;
        this.setState({ list1 });
    }

    handleSubmit = () => {
        //  const { list1 } = this.state
        //  const cardNo = '121133';
        //  const month = '08';
        //  const year = '19';
        let date={
            cardNo:this.state.list1.cardNo,
             date:"/month/"+this.state.list1.month+"/year/"+this.state.list1.year,

        }
         
        axios.get('http://10.117.189.114:8088/bank/creditcard/statement/card/'+date).then( (response)=> {
            console.log(response.data);
            this.props.history.push('/statementList');     
            this.setState({ list: response.data })
        }).catch(function (err) {
            console.log(err)
        })
    }

    

   

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <LeftBar />
                </div>
                <div className="col-md-10">
                    <h1 className="list-payees">Statement</h1>

                    <div>
                        <label>Enter Card Details:</label>
                        <input type ="number"></input>
                    </div>


                    <div className="form-group col-md-2">
                            <label>Month</label>
                            <select onChange={this.handleChange} name="place" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2">
                            <label>Year</label>
                            <select onChange={this.handleChange} name="place" className="form-control">
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                            </select>
                        </div>

                        <br/>
                        <br/>
                        <button onClick={this.handleSubmit}>Get Statement</button>

                    <table className="table table-striped">
                        <thead>
                            <tr><th><b>Date</b></th>
                                <th><b>Amount</b></th>
                                <th><b>Type</b></th></tr>
                            
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.date}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.transactionType}</td>
                                           
                                           </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}
export default StatementList;