import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from '@material-ui/core/Button';
import { TextField, Grid } from '@material-ui/core';
import axios from 'axios';


class UpdatePayee extends Component{
    constructor(props){
        super(props);
        this.state={
            editId:props.match.params.idParam,
            payeeData:[]
        }
    }

    componentDidMount(){
        const{editId}=this.state;
        const{payeeData}=this.state;
        var global=this;
        axios.get('http://10.117.189.89:9090/beneficiaryapp/beneficiary/getPayeeById?payeeId='+editId).then(function(response){
            //console.log(response.data.payeeDetails)
            global.setState({payeeData:response.data.payeeDetails});
        }).catch(function(err){
            console.log(err.response);
        })
    }

    updatePayee=()=>{
        const{payeeData}=this.state;
        //console.log(payeeData);
        var global=this;
        axios.post('http://10.117.189.89:9090/beneficiaryapp/beneficiary/updatePayee',payeeData).then(function(response){
            console.log(response);
            global.props.history.push('/updateOtp');
        }).catch(function(err){
            console.log(err);
        })
    }

    handleUpdate=(event)=>{
         const{payeeData}=this.state;
        console.log(event.target.value);
        payeeData[event.target.name]=event.target.value;
        this.setState({payeeData});
        //console.log(this.state.payeeData);
    }

    render(){
       // console.log(this.state.payeeData)
        return(
            <div className="otptablesize">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td><label>Nick Name:</label></td>
                            <td><input type="text" value={this.state.payeeData.nickName} onChange={this.handleUpdate} name="nickName"/></td>
                        </tr>
                        <tr>
                            <td><label>Payee Account No:</label></td>
                            <td><input type="text" value={this.state.payeeData.payeeAccountNo} onChange={this.handleUpdate} name="payeeAccountNo" disabled/></td>
                        </tr>
                        <tr>
                            <td><label>IFSC Code:</label></td>
                            <td><input type="text" value={this.state.payeeData.ifscCode} onChange={this.handleUpdate} name="ifscCode"/></td>
                        </tr>
                        <tr>
                            <td><label>Email Id:</label></td>
                            <td><input type="text" value={this.state.payeeData.emailId} onChange={this.handleUpdate} name="emailId"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button onClick={this.updatePayee}>Update</Button></td>
                        </tr>
                    </tbody>
                </table>;
            </div>
        )
    }
}
export default UpdatePayee;