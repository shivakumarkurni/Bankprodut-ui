import React, { Component } from 'react';

import axios from 'axios';

// import './ListOfProducts.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            list2: []
        }
    }

    componentDidMount() {
        const { list } = this.state;
        var global = this;
        axios.get('http://10.117.189.181:9093/bank/bank/categories').then((response) => {
            debugger
            console.log("________________________", response.data);

            localStorage.setItem("categoryId", response.data.categoryId);
            console.log(response.data.categoryId);
            global.setState({ list: response.data });
        }).catch((error) => {
            console.log(error);
        })
    }

    handleClick = (e, item) => {
        const { list2 } = this.state;
        var categoryId = localStorage.getItem("categoryId");
        console.log(categoryId);
        axios.get('http://10.117.189.181:9093/bank/products/' + item.categoryId).then((response) => {
            console.log(response.data);
            this.setState({ list2: response.data });
        }).catch((err) => {
            console.log(err);
        })
    }
    handleBuyProducts = (e, item) => {
        localStorage.setItem("categoryId", item.categoryId);
        // localStorage.setItem("productName",item.productName)
        // this.props.history.push('/buyProducts');
    }
    render() {
        let list2 = this.state.list2.map((item, i) => {
            console.log("item", item)
            return (
                <div>

                    <div><b>SUB PRODUCT:</b>{item.subProducts}</div>
                    {/* <div><b>PRODUCT NAV</b>:{item.productNav}</div>
                            <div><b>BROKERAGE</b>:{item.brokerage}%</div> */}
                    <Button onClick={(e) => this.handleBuyProducts(e, item)}>Buy</Button>
                </div>
            )

        }, this);
        let list = this.state.list.map((item, j) => {
            console.log("item", item)
            return (
                <Card>
                    <Accordion.Toggle className="prodheading" onClick={(e) => { this.handleClick(e, item) }} as={Card.Header} eventKey={item.productId}>
                        {item.categoryName}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.categoryId}>
                        <Card.Body>
                            {list2}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        }, this);
        return (
            <div >
                <h2>List Of Products</h2>
                <div className="box">
                    <Accordion >
                        {list}
                    </Accordion>
                </div>
            </div>
        )

    }
}
export default ProductGroup;