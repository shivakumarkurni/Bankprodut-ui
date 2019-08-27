import React, { Component } from 'react';
import LeftBar from '../left-bar/left-bar'



class SuccessPage extends Component {
   

    render() {
        return (

            <div className="row">
                <div className="col-md-2">
                    <LeftBar />
                </div>

                <div className="col-md-10">
                   <h1>Payment Successful</h1>
                </div>

            </div>
        )
    }
}
export default SuccessPage;