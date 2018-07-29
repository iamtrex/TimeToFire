import React, { Component } from 'react';

import Title from "../Title";

class Portfolio extends Component {

    constructor(){
        super();
    }

    render() {



        return (
            <div className={"Portfolio"}>
                <Title title={this.props.name}/>
                <p>Value {this.props.value}</p>
                <br/>
                <p>Expected Growth {this.props.growth}% per year</p>
                <br/>
                <p>Dividends {this.props.divPay}%</p>


            </div>);
    }
}

export default Portfolio;
