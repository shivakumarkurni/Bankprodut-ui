import React, { Component } from 'react';
import axios from 'axios';
import LeftBar from '../left-bar/left-bar'


class FundTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundTransfer: {
                amount: '',
                fromaccount: '',
                toaccount: '',



            }
        }
    }
    handleChange = (event) => {
        const { fundTransfer } = this.state;
        fundTransfer[event.target.name] = event.target.value;
        this.setState({ fundTransfer });
    }

    handleTransfer = () => {
        const { fundTransfer } = this.state;
        axios.post('http://10.117.189.114:8087/bank/transaction', fundTransfer).then(function (response) {
            console.log(response);
            alert("Successfully Transfered")
            // this.props.history.push('/listOfTransaction')
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className=" row">
                <div className="col-md-2">
                    <LeftBar />
                </div>
                <div className = "col-md-10">
                <form >
                    <div class="form-group  form1">
                        <label > AMOUNT</label>
                        <input type="text" class="form-control " id="fromAccountNumber" name="amount" placeholder="Enter the  from Account number" onChange={this.handleChange} />
                    </div>
                    <div class="form-group form1">
                        <label >FROM ACCOUNT NUMBER</label>
                        <input type="text" class="form-control" id="toAccountNumber" name="fromaccount" placeholder="Enter the to account number" onChange={this.handleChange} />
                    </div>
                    <div class="form-group form1">
                        <label >TO ACCOUNT NUMBER</label>
                        <input type="number" class="form-control" id="amount" name="toaccount" placeholder="Enter the amount" onChange={this.handleChange} />
                    </div>

                </form>
               
                <button className="btn btn-outline-primary btn-block" onClick={this.handleTransfer}>TRANSFER</button>
                </div>
            </div>
        )
    }
}
export default FundTransfer;