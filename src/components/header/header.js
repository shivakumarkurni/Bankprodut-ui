// import React, { Component } from 'react';
// import { Link, Redirect, Route, Switch } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// // import * as userAction from '../../action/action';
// import Login from '../login/login';
// import Home from '../home/home'
// import CreateAccount from '../create-account/createAccount';
// import FundTransfer from '../fund-transfer/fund-transfer'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Capture from '../../images/Capture.PNG';



// class Header extends Component {
    
    
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-default">
//                     <div className="container-fluid home-header">
//                         <div className="navbar-header">
//                         <img className="Capture" src={Capture} alt="Capture" /> 
//                             {/* <Link className="navbar-brand" to='/'>Banking Application</Link> */}
//                             <span className="nav-subtitle">
//                             <Link className="navbar-brand nav-header-link" to='/'>Security Info</Link>
//                             <Link className="navbar-brand nav-header-link" to='/'>Help & Support</Link>

//                             <Link className="navbar-brand nav-header-link" to='/'>Contact Us</Link>

//                             <Link className="navbar-brand nav-header-link" to='/'>About Us</Link>

//                             </span>
//                         </div>  
//                     </div>
//                 </nav>

//                 <Switch>
//                     <Route exact path="/" component={Login} />
//                     <Route exact path="/register" component={CreateAccount} />
//                     <Route exact path="/logout" component={Login} />
//                     <Route exact path="/home" component={Home} />
//                     <Route exact path="/fundtransfer" component={FundTransfer} />
//                 </Switch>
                
//                 <ToastContainer />


                
//             </div>
//         );
//     }
// }



// export default Header;