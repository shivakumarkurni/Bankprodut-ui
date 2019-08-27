import React, { Component } from 'react';
import axios from 'axios';
import './createAccount.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


class CreateAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: '',
                mobile: '',

            },

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
        console.log(formData);


        //                 let formData1 = {
        //                     firstName:'',
        //                     lastName:'',
        //                     mobileNumber:'',
        //                     password:'',
        //                     confirmPassword:''
        //                 }
        axios.post('http://10.117.189.114:8087/bank/save', formData).then((response) => {
            console.log(response);
            alert("Successfully Registered")
            this.props.history.push('/');

        }).catch((error) => {
        });




        // axios.post('http://10.117.189.114:9090/user/login',formData).then(function (response) {
        //     resolve(response);
        //   console.log(response);
        //   }).catch(function (error) {
        //     reject(error);
        //   });



    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                        <form role="form">
                            <h2>Create account request</h2>
                            <hr className="colorgraph" />
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="userName" id="user_name" className="form-control input-lg" placeholder="User Name" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>


                            </div>

                            <div className="row">

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="password" id="password" className="form-control input-lg" placeholder="Password" tabIndex="1" onChange={this.handleChange} />
                                    </div>
                                </div>

                            </div>


                            <div className="form-group">
                                <input type="text" name="mobileNumber" id="mobile_number" className="form-control input-lg" placeholder="Mobile Number" tabIndex="3" onChange={this.handleChange} />
                            </div>
                            
                            <hr className="colorgraph" />
                            <div className="row">
                                <div className="col-xs-12 col-md-12">
                                    <button className="btn btn-primary btn-block btn-lg" tabIndex="7" onClick={this.handleClick} type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div> */}

                    <div className="container">
                        <div className="row">
                            <h1 className="text-center reg-main-title">Request your Details</h1>
                            <div className="col-sm-6 col-md-4 col-md-offset-4">
                                <h1 className="text-center reg-title">Please fill the form below</h1>
                                <div>

                                    <form className="form-signin">
                                        <input type="text" name="userName" className="form-control reg-field" placeholder="Username" onChange={this.handleChange} required autoFocus />
                                        <input type="password" name="password" className="form-control reg-field" onChange={this.handleChange} placeholder="Password" required />
                                        <input type="number" name="mobile" className="form-control mob-field reg-field" onChange={this.handleChange} placeholder="Mobile Number" required />

                                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                            Register</button>
                                    </form>
                                </div>
                                <Link className="nav-item nav-link reg-login-title" to='/'>Login</Link>

                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default CreateAccount;
