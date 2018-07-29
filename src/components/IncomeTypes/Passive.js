import React, { Component } from 'react';


import Title from "../Title";
class Passive extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className={"Passive"}>
                <Title title={this.props.name}/>
                <p>${this.props.value} per year</p>
                <br/>
                <p>Expected growth of {this.props.growth}% per year</p>
            </div>);


    }
}

export default Passive;
