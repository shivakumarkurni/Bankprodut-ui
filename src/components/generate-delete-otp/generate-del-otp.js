import React,{Component} from 'react';
import axios from 'axios';

class GenerateDeleteOtp extends Component{
    constructor(props){
        super(props);
        this.state={
            otpData:{
                // referenceNo:'',
                otp:'',
                accountNo:'1'
            }
        }
    }

    handleOtp=(event)=>{
        const{otpData}=this.state;
        otpData[event.target.name]=event.target.value;
        this.setState({otpData});
        console.log(otpData);
    }

    validateOtp=()=>{
        const{otpData}=this.state;
        console.log(otpData);
        var global=this;
        //this.props.history.push('./addPayee');
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/confirmAddPayee',otpData).then(function(response){
            console.log(response);
            alert(response.data.message);
            if(response.data.statusCode!==400){
            global.props.history.push('./payeeList');}
        }).catch(function(err){
            console.log(err);
            alert(err);
            window.location.reload();
        })
    }

    render(){
        console.log(this.state.referenceNo);
        return(
            <div className="otptablesize">
                <table className="table">
                    <tbody>
                        {/* <tr>
                            <td><label>Reference.No:</label></td>
                            <td><input type="number" name="referenceNo" onChange={this.handleOtp} value={this.state.referenceNo}/></td>
                        </tr> */}
                        <tr>
                            <td><label>OTP</label></td>
                            <td><input type="number" name="otp" onChange={this.handleOtp}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.validateOtp}>OK</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GenerateDeleteOtp;