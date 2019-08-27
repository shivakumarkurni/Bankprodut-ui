import React, { Component } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



class BuyProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName:localStorage.getItem("categoryName"),
            formData: {
                name: '',
                gender: '',
                dob: '',
                email: '',
                mobileNo: '',
                annualIncome: ''
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        //console.log(event.target.value);
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
        console.log(this.state.formData);
    }

    register = () => {
        const { formData } = this.state;
        const { notification } = this.state;
        var global = this;
        console.log(formData);
        axios.post('http://10.117.189.181:9093/bank/bank/buyProduct', formData).then(function (response) {
            if (response.data.statusCode === 401) {
                alert(response.data.message)
            }
            else {
                
            }
        }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="row container">
                <div><b>PRODUCT NAME:</b>{this.state.categoryName}</div> 
                <div className="col-md-1"></div>
                <div className="box col-md-4">
                   
                    <div className="sign">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" name="name" required onChange={this.handleChange} />
                        </div>

                        

                        <div className="form-group">
                            <label>DOB</label>
                            <input type="date" className="form-control" placeholder="Date Of Birth" name="dob" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Enter Email" name="email" required onChange={this.handleChange} />
                        </div>



                      


                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="number" className="form-control" placeholder="Mobile Number" name="mobileNo" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Annual Income</label>
                            <input type="text" className="form-control" placeholder="Annual Income" name="annualIncome" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text" className="form-control" placeholder="Gender" name="gender" required onChange={this.handleChange} />
                        </div>


                        


                        <label></label><br />
                        <button type="button" className="btn btn-info reg-btn" onClick={this.register}>Ok</button>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default BuyProduct;
