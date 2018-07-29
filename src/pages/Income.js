import React, { Component } from 'react';

import './Income.css';

import Title from '../components/Title'
import AddIncome from '../components/AddIncome'
import Active from '../components/IncomeTypes/Active'
import Passive from '../components/IncomeTypes/Passive'
import Portfolio from '../components/IncomeTypes/Portfolio'
class Income extends Component {

    constructor(){
        super();
        this.state = {showIncome: false,
            incomeElts: [
                {
                    type:'active',
                    name:'SAP Salary',
                    amount:25000
                },
                {
                    type: 'passive',
                    name: 'Rent',
                    value: 2000,
                    growth: 1
                },
                {
                    type:'portfolio',
                    name: 'EAP S&P 500',
                    value: 2000,
                    growth: 3,
                    divPay: 0
                },
                {
                    type:'portfolio',
                    name: 'EAP Other',
                    value: 200,
                    growth: 2.5,
                    divPay: 0
                }

            ]
        };
    }


    handleAddButton(e){
        let curr = this.state.showIncome;
        this.setState({showIncome: !curr});

    }

    /**
     * Adds a new income
     */
    handleAddIncome(incomeElt){
        this.setState((prevState)=>({
           incomeElts: [...prevState.incomeElts, incomeElt]
        }));
    }


    render() {

        let activeElts, passiveElts, portfolioElts;
        if(this.state.incomeElts){
            activeElts = this.state.incomeElts.map(income =>{
                if(income.type==='active'){
                    return <Active className="Income" name={income.name} amount={income.amount}/>
                }
                return null;
            });

            passiveElts = this.state.incomeElts.map(income=>{
                if(income.type==='passive'){
                    return <Passive className="Income" name={income.name} value={income.value} growth={income.growth}/>

                }
                return null;
            });

            portfolioElts = this.state.incomeElts.map(income=>{
                if(income.type==='portfolio'){
                    return <Portfolio className="Income" name={income.name} growth={income.growth} value={income.value}
                                      divPay={income.divPay} />
                }
            });
        }

        return (
            <div className={"Root"}>
                <Title className={"inline"} title={"Income"} />
                <Title  title={"Active"} />
                    {activeElts}
                <Title title={"Passive"} />
                    {passiveElts}

                <Title title={"Portfolio"} />
                    {portfolioElts}

                {this.state.showIncome?
                    <button className={"add-button inline"} onClick={this.handleAddButton.bind(this)}>CANCEL</button> :
                    <button className={"add-button inline"} onClick={this.handleAddButton.bind(this)}>ADD</button> }

                {this.state.showIncome ? <AddIncome addIncome={this.handleAddIncome.bind(this)} /> : null}

            </div>
        );
    }
}

export default Income;
