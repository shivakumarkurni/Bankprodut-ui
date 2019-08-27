import React from 'react';
import { render } from 'react-dom';
import Card from 'react-credit-cards';
import axios from 'axios';
import LeftBar from '../left-bar/left-bar'



import SupportedCards from './Cards';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './utils';
import './creditCard.css';

import 'react-credit-cards/es/styles-compiled.css';
var isValid = require('node-luhn');

class CreditCard extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    amount: '',
    issuer: '',
    focused: '',
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {

    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();




    const { name, number, expiry, cvc, amount } = this.state;
    if (isValid(this.state.number)) {
      axios.post('http://10.117.189.137:8088/bank/creditcard/', { name, number, expiry, cvc, amount }).then((response) => {
        console.log(response);
        // localStorage.setItem("transctionId",formData.userName); 
        localStorage.setItem("transctionId", response.data.transctionId);
        alert(response.data.transctionId)
        // localStorage.setItem("beneficiaryId", response.data.beneficiaryId);
        // alert("sdfsdf")
        this.props.history.push('/generateOtp')
      }).catch(function (err) {
        //this.setState({notification:err.data.message});
        alert(err);
      })

    } else {
      alert('Invalid Card')
    }




    this.props.history.push('/generateOtp')
  };



  // addDetails =(e) => {
  //   e.preventDefault();
  //   event.preventDefault();
  //   const{payeeData}=this.state;
  //   console.log(payeeData);
  //   // var global = this;

  //   axios.post('http://10.117.189.248:8087/bank/fundtransfer/payee',payeeData).then((response) => {
  //   console.log(response);
  //   // localStorage.setItem("beneficiaryId", response.data.beneficiaryId);
  //       alert("sdfsdf")
  //       this.props.history.push('/generateOtp')
  //   }).catch(function(err){
  //       //this.setState({notification:err.data.message});
  //       alert(err);
  //   })
  // }




  render() {

    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div className="row">
        <div className="col-md-2">
          <LeftBar />
        </div>




        <div key="Payment col-md-10">
          <div className="App-payment container">
            <h1 className="credit-title">Credit Card Payment Details</h1>


            {/* <h4>Beautiful credit cards for your payment forms</h4> */}
            <Card className="cc-card"
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
            <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
        <div className="row">
              <div className="form-group col-md-10">
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
              </div>
              <div className="form-group col-md-10">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="row">
                <div className="col-md-4 expiry-field">
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </div>
              <div className="col-md-6 amount-field">
                <input
                  type="text"
                  name="amount"
                  className="form-control"
                  placeholder="Amount"
                  // pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>

              <input type="hidden" name="issuer" value={issuer} />
              <div className="form-actions">
                <button className="btn btn-primary btn-block pay-btn" onClick={this.addDetails}>PAY</button>
              </div>
              </div>
            </form>
            {formData && (
              <div className="App-highlight">
                {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
              </div>
            )}
            <hr style={{ margin: '60px 0 30px' }} />
            <div className="App-badges">
              {/* <a
              href="https://github.com/amarofashion/react-credit-cards"
              className="github__btn">
              <img
                alt="View on GitHub"
                src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@2017.12/logos/github-icon.svg"
              />
              <span>View on GitHub</span>
            </a> */}

              {/* <a href="https://codesandbox.io/s/ovvwzkzry9">
              <img
                alt="Edit ovvwzkzry9"
                src="https://codesandbox.io/static/img/play-codesandbox.svg"
              />
            </a> */}
            </div>
            <hr style={{ margin: '30px 0' }} />
            {/* <SupportedCards /> */}
          </div>
          {/* <div className="App-credits">
            Made with ❤️ at <a href="https://amaro.com/">AMARO</a>.
        </div> */}
        </div>
      </div>
    );
  }
}

export default CreditCard;