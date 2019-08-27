import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
    AccordionItemDesc
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { Collapse } from 'reactstrap';



class ListOfProducts extends Component {
    constructor(props) {
        super(props);


        this.state = {
            
            // collapse: true,
            products: [],
            subProducts: [],
            list3:[]
            
        }
    }

    // toggle = () => {
    //     this.setState(state => ({ collapse: !state.collapse }));
    //     alert("dfd");
    //   }



    componentDidMount() {
        const { products } = this.state;
        axios.get('http://10.117.189.181:9093/bank/bank/categories').then((response) => {
            localStorage.setItem("categoryId",response.data.categoryId);
            console.log(response)

            // console.log(response.data);
            this.setState({ products: response.data });
        }).catch((err) => {
            console.log(err);
        })
    }

    

    

    handleClick = (item) => {
        const { subProducts } = this.state;
        var categoryId=localStorage.getItem("categoryId");
        console.log(item.productGroupId);
        var g = this;
        axios.get('http://10.117.189.181:9093/bank/bank/products/' + item.categoryId).then( (response) => {
            console.log(response.data);
            g.setState({ subProducts: response.data })
            console.log(g.state.subProducts);
        }).catch(function (err) {
            console.log(err);
        })
    }

    handleClick2 =(item2) => {
       // const { list3 } = this.state;
        console.log(item2.productId);
      // var g = this;
        axios.get('http://10.117.189.181:9093/bank/bank/productdetails/' + item2.productId).then( (response) => {
            console.log(response.data);
            this.setState({ list3: [response.data] })
            console.log(this.state.list3);
        }).catch(function (err) {
            console.log(err);
        })
    }

    // getDetails = (data) => {
    //     this.props.history.push('./productDetails/' + data.productId);
    // }

    buyHandler =(item) => {
        localStorage.setItem("productId",item.productId);
        localStorage.setItem("productName",item.productName)
        this.props.history.push('/buyProduct');

    }

    render() {
         console.log(this.state.products)
        return (

            <div className="box">
                
                           
                           
                {this.state.products.map((item, i) => {
                    return (
                        <Accordion key={i}>
                            <AccordionItem>
                                <AccordionItemHeading onClick={() => this.handleClick(item)}>
                                    <AccordionItemButton  onClick={this.toggle}>
                                    {/* <Collapse isOpen={this.state.collapse}> */}
                                        {item.categoryName}
                                    {/* </Collapse> */}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div>
                                        {this.state.subProducts.map((item1, j) => {
                                            return (
                                                <AccordionItemPanel key={j}>
                                                    <AccordionItemHeading onClick={() => this.handleClick2(item1)}>
                                                        <AccordionItemButton>
                                                            {item1.productName}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                </AccordionItemPanel>
                                            )
                                        })}
                                  


                                   
                                    <div>
                                    <AccordionItemPanel>
                                        {this.state.list3.map((item2, k) => {
                                            return (
                                                <AccordionItemPanel  key={k}>                                                   
                                                    <AccordionItemButton>
                                                        {item2.productDesc}
                                                        <button onClick={(item)=>this.buyHandler(item)}>Buy</button>
                                                    </AccordionItemButton>
                                                </AccordionItemPanel>
                                            )
                                        })}
                                         </AccordionItemPanel>
                                    </div>
                                    </div>

                                </AccordionItemPanel>
                                
                            </AccordionItem>

                        </Accordion>
                    )
                })}
            </div>
        )
    }
}




export default ListOfProducts;