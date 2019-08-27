import React, { Component } from 'react';
import axios from 'axios';
import LeftBar from '../left-bar/left-bar'


class GenerateOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpData: {
                // referenceNo:'',
                // beneficiaryId: '',
                otpValue: '',
                transctionId:localStorage.getItem("transctionId"),
                
            }
        }
    }

    handleOtp = (event) => {
        const { otpData } = this.state;
        otpData[event.target.name] = event.target.value;
        this.setState({ otpData });
        console.log(otpData);
    }

    validateOtp = () => {
        const { otpData } = this.state;
        console.log(otpData);
        //this.props.history.push('./addPayee');
        axios.post('http://10.117.189.137:8088/bank/creditcard/verification/',otpData).then((response) => {
            console.log(response);
            alert(response.data.message);
            if (response.data.statusCode !== 400) {
               this.props.history.push('./successPage');
            }
        }).catch(function (err) {
            console.log(err);
            alert(err);
        })
    }

    render() {
        console.log(this.state.referenceNo);
        return (
            <div className="row">
                <div className="col-md-2">
                    <LeftBar />
                </div>
            <div className="otptablesize col-md-10">
                <table className="table">
                    <tbody>
                        {/* <tr>
                            <td><label>Reference.No:</label></td>
                            <td><input type="number" name="referenceNo" onChange={this.handleOtp} value={this.state.referenceNo}/></td>
                        </tr> */}
                        {/* <tr>
                            <td><label>Benificiary Id</label></td>
                            <td><input type="number" name="beneficiaryId" onChange={this.handleOtp} /></td>
                        </tr> */}
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" name="otpValue" onChange={this.handleOtp} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default GenerateOtp;