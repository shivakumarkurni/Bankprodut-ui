import React, { Component } from 'react';
import axios from 'axios';
import LeftBar from '../left-bar/left-bar'

class ListOfTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: localStorage.getItem("userName"),
            accNo: localStorage.getItem("accNo"),
            amount: localStorage.getItem("amount"),
            data: []
        }
    }
    componentDidMount() {
        this.getData().then(response => {
            console.log(response.data)
            this.setState({ data: response.data });
        });


    }
    getData = () => {
        return new Promise((resolve, reject) => {

            // axios.get('http://10.117.189.114:8087/bank/transactions?fromAccount=' +this.props.userDetails.accNo).then(function (response) {

            axios.get('http://10.117.189.114:8087/bank/transactions/123').then(function (response) {
                console.log(response);
                resolve(response);
                console.log(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }


    // home = (event) => {
    //     event.preventDefault();
    //     this.props.history.push('/home');
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.history.push('/fundtransfer');
    // }
    // logout = (event) => {
    //     event.preventDefault();
    //     this.props.history.push('/');
    // }


    render() {
        return (

            <div className="row">

                <div className="col-md-2">
                    <LeftBar />
                </div>

                <div className="col-md-10">
                    <div className="row home-header-content">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                                <h1>Hi: {this.state.userName} </h1>
                            </div>

                            <div className="col-md-4">
                                <h1 className="acc-no">Account Number: {this.state.accNo} </h1>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <h1 className="acc-no">Account Balance: {this.state.amount} </h1>
                            </div>
                        </div>
                    </div>


                    <div className="container">



                        <div className="row">
                            <h5 className="list-title">LIST OF TRANSACTIONS</h5>
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">FROM</th>
                                            <th scope="col">TO</th>
                                            <th scope="col">AMOUNT</th>
                                            <th scope="col">DATE</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.data.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{item.transactionId}</td>
                                                    <td>{item.fromAccount}</td>
                                                    <td>{item.toAccount}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.date}</td>

                                                </tr>
                                            )

                                        })}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                    <button className="btn btn-lg btn-primary btn-block " type="submit" onClick={this.handleSubmit}>
                        Fund Transfer</button>

                </div>

            </div>
        )
    }
}
export default ListOfTransaction;