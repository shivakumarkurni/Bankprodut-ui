import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
import axios from 'axios';
// import './App.css';
import LeftBar from '../left-bar/left-bar'
import { withRouter } from 'react-router-dom';


class AddPayee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payeeData: {
                accountNumber:'',
                ifscCode:'',
                name:'',
                mobile:'',
                email:'',
               
            },
            notification: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.name);
        const { payeeData } = this.state;
        payeeData[event.target.name] = event.target.value;
        this.setState({ payeeData });
        console.log(this.state.payeeData);
    }

    addPayee = (event) => {
        event.preventDefault();
        const{payeeData}=this.state;
        console.log(payeeData);
        // var global = this;
        
        axios.post('http://10.117.189.248:8087/bank/fundtransfer/payee',payeeData).then((response) => {
        console.log(response);
        // localStorage.setItem("beneficiaryId", response.data.beneficiaryId);
            alert("sdfsdf")
            this.props.history.push('/generateOtp')
        }).catch(function(err){
            //this.setState({notification:err.data.message});
            alert(err);
        })
    }

    render() {
        return (
            <div className="tablesize row"><form>

                <div className="col-md-2">
                    <LeftBar />
                </div>
                <div className="col-md-10">
                    <div className="ben-details"> Pay Anyone  </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><label>Benificiary Account No:</label></td>
                            <td><input type="number" name="accountNumber" onChange={this.handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label>IFSC Code:</label></td>
                            <td><input type="text" name="ifscCode" required onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" name="name" required onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label>Mobile Number:</label></td>
                            <td><input type="mobile" name="mobile" required onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type="email" name="email" required onChange={this.handleChange} /></td>
                        </tr>
                        {/* <tr>
                            <td><label>OTP:</label></td>
                            <td><input type="email" name="otp" required onChange={this.handleChange} /></td>
                        </tr> */}
                        <tr>
                            <td></td>
                            <td><button onClick={this.addPayee}>Add Payee</button></td>
                        </tr>
                    </tbody>
                </table></div></form>
                
            </div>
        );
    }
}
export default withRouter(AddPayee);