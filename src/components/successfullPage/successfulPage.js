import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SuccessProductPage extends Component {

    // back = () => {
    //     this.props.history.push(`/confirmStocks`)
    // }
    render() {
        return (
            <div>
                {/* <div className="container header-title">

                    <button className="cancel-btn" onClick={this.back}>Confirmed Stocks</button>
                </div> */}
                <div className="row container">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">Product Confirmed Successfully.. Our team will get back to you shortly</div>
                </div>
            </div>


        )
    }
}
export default SuccessProductPage;