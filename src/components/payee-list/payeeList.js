import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftBar from '../left-bar/left-bar'


class ListPayee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: {
                accountNumber: '',
                userId: ''
            },
            list: []
        }
    }

    componentDidMount() {
        const { payeeList } = this.state;
        var global = this;
        axios.get('http://10.117.189.137:8087/bank/getAll/1').then(function (response) {
            console.log(response);
            global.setState({ list: response })
        }).catch(function (err) {
            console.log(err)
        })
    }

    deletePayee = (e) => {
        // let userId=e.userId;

        let obj = {
            "accountNumber": 3456,
            "userId": 1
        }
        let list1 = {
            accountNumber: sessionStorage.getItem('accountNumber'),
            userId: sessionStorage.getItem('userId')
        }

        console.log(list1, obj)
        axios.post('http://10.117.189.137:8087/bank/fundtransfer/payee/delete/otp', list1).then((response) => {
            this.props.history.push('/generateDeleteOtp');
            localStorage.setItem("accountNumber",list1.accountNumber); 
            localStorage.setItem("userId",list1.userId); 
            console.log(response);
        }).catch(function (err) {
            console.log(err.response);
        })
    }

    editPayee = (info) => {
        this.props.history.push('/updatePayee/' + info.payeeId)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <LeftBar />
                </div>
                <div className="col-md-10">
                    <h1 className="list-payees">List of Payees</h1>

                    <table className="table table-striped">
                        <thead>
                            <tr><th><b>Name</b></th>
                                <th><b>Beneficiary Account No</b></th></tr>
                            {/* <th><b>IFSC Code</b></th>
                    <th><b>Mobile</b></th>
                    <th><b>Email Id</b></th></tr> */}
                            {/* <th><button>Update</button></th>
                    <th><button>Delete</button></th></tr> */}
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.accountNumber}</td>
                                            {/* <td>{item.ifsc}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td> */}
                                            <td><button className="btn-update" onClick={() => { this.editPayee(item) }}>Update</button><span />
                                                <button className="btn-update" onClick={() => { this.deletePayee(item) }}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListPayee;