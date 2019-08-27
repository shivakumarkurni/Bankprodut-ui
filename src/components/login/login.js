/* Login  */

import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../action/action';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            formData: {
                userName: '',
                password: '',

            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }


    handleSubmit = (event) => {        
        event.preventDefault();
        const { formData } = this.state;
        console.log(this.state);     
        axios.post('http://10.117.189.114:8087/bank/user/login/',formData).then((response)=>{
            console.log(response.data);
            localStorage.setItem("userName",formData.userName); 
            localStorage.setItem("accNo",response.data.accNo); 
            localStorage.setItem("amount",response.amount);            
            this.props.history.push('/home');           
        }).catch((error)=>{ 
            
        });
      
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <div><h1 className="col-md-12 text-center login-title">Login</h1></div>
                       <div> <h1 className="col-md-12 text-center login-sub-title">Enter Username & Password</h1></div>
                        
                        <div>
                           
                            <form className="form-signin">
                                <input type="text" name="userName" className="form-control user-field" placeholder="Username" onChange={this.handleChange} required autoFocus />
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="Password" required />
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Login</button>
                            </form>
                        </div>
                        <Link className="nav-item nav-link login-tag-title" to='/register'>New User? Register</Link>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Login);

