import React, { Component } from 'react';
// import Header from './components/header/header';
import './App.css';
import { HashRouter } from 'react-router-dom';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as userAction from '../../action/action';
import Login from '../src/components/login/login';
import Home from '../src/components/home/home'
import CreateAccount from '../src/components/create-account/createAccount';
import FundTransfer from '../src/components/fund-transfer/fund-transfer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Capture from '../src/images/Capture.PNG';
import LeftBar from '../src/components/left-bar/left-bar'
import AddPayee from '../src/components/add-payee/addPayee'
import ListPayee from '../src/components/payee-list/payeeList'
import GenerateOtp from '../src/components/generate-otp/generateOtp'
import GenerateDeleteOtp from '../src/components/generate-delete-otp/generate-del-otp'


import CreditCard from './components/credit-card-details/creditCard'
import SuccessPage from '../src/components/successfullPage/successfulPage'
import StatementList from '../src/components/statement-list/statementList'



import FileUpload from '../src/components/file-upload/fileUpload'
import ListOfProducts from '../src/components/listOfBankProducts/listOfProducts'
import BuyProduct from '../src/components/buyProduct/buyProduct'
import ProductGroup from '../src/components/accordion/accordion'
import GraphDay from '../src/components/graph/graph'
import GraphWeek from '../src/components/graph/graphWeek'
import GraphMonth from '../src/components/graph/graphMonth'
import Analysis from '../src/components/analysis/analysis'
import SuccessProductPage from '../src/components/successProductPage/successProduct'

class App extends Component {
  render() {
    return (
      <HashRouter>
       <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid home-header">
                        <div className="navbar-header">
                        <img className="Capture" src={Capture} alt="Capture" /> 
                            {/* <Link className="navbar-brand" to='/'>Banking Application</Link> */}
                            <span className="nav-subtitle">
                            <Link className="navbar-brand nav-header-link" to='/'>Security Info</Link>
                            <Link className="navbar-brand nav-header-link" to='/'>Help & Support</Link>

                            <Link className="navbar-brand nav-header-link" to='/'>Contact Us</Link>

                            <Link className="navbar-brand nav-header-link" to='/'>About Us</Link>

                            </span>
                        </div>  
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={CreateAccount} />
                    <Route exact path="/logout" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/fundtransfer" component={FundTransfer} />
                    <Route exact path="/leftbar" component={LeftBar} />
                    <Route exact path="/addPayee" component={AddPayee} />
                    <Route exact path="/payeeList" component={ListPayee} />
                    <Route exact path="/generateOtp" component={GenerateOtp} />
                    <Route exact path="/generateDeleteOtp" component={GenerateDeleteOtp} />
                    <Route exact path="/creditCard" component={CreditCard} />
                    <Route exact path="/successPage" component={SuccessPage} />
                    <Route exact path="/statementList" component={StatementList} />


                    <Route exact path="/fileUpload" component={FileUpload} />
                    <Route exact path="/accordion" component={ListOfProducts} />
                    <Route exact path="/buyProduct" component={BuyProduct} />

                    <Route exact path="/analysis" component={Analysis} />
                    <Route exact path="/graphday" component={GraphDay} />
                    <Route exact path="/graphweek" component={GraphWeek} />
                    <Route exact path="/graphmonth" component={GraphMonth} />
                    <route exact path="/successPage" component={SuccessProductPage} />



                </Switch>
                
                <ToastContainer />


                
            </div>
      </HashRouter>
    );
  }
}

export default App;
