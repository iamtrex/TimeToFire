import React, { Component } from 'react';

import './Income.css';

import Title from '../components/Title'
import AddIncome from '../components/AddIncome'
import Active from '../components/IncomeTypes/Active'
import Passive from '../components/IncomeTypes/Passive'
import Portfolio from '../components/IncomeTypes/Portfolio'
import ActiveForm from '../components/AddIncomeForms/ActiveForm'
import PassiveForm from '../components/AddIncomeForms/PassiveForm'
import PortfolioForm from '../components/AddIncomeForms/PortfolioForm'

class Income extends Component {

    constructor(){
        super();
        this.state = {
            showAddIncome: false,
            addIncomeType: 'default',
            addIncomeName: '',

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
        let curr = this.state.showAddIncome;
        this.setState({showAddIncome: !curr});

    }

    handleAddIncomeNameChange(e){
        this.setState({
            name:e.target.value
        });

    }

    /**
     * Adds a new income
     */
    handleAddIncome(e){

        if(this.state.addIncomeType === 'default'){
            alert("Must choose an income type!");
            e.preventDefault();
            return;
        }

        let incomeElt;
        let name = this.state.name;
        if(name === ''){
            //No name!
            alert("Income must have a name");
        }

        switch(this.state.addIncomeType){
            case 'passive':

                break;
            case 'active':
                incomeElt={
                    type:'active',
                    name:name,
                    amount:this.refs.activeForm.state.salary
                };
                break;
            case 'portfolio':
                break;
        }

        this.setState(prevState => ({
            incomeElts: [...prevState.incomeElts, incomeElt],
            showAddIncome: false, //Stop showing form.
            addIncomeType: 'default',
            name: ''
        }));

        //console.log(this.state.incomeElts);

        e.preventDefault();

    }

    handleIncomeTypeChange(e){
        this.setState({
            addIncomeType:e.target.value
        });

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

                {this.state.showAddIncome?
                    <button className={"add-button inline"} onClick={this.handleAddButton.bind(this)}>CANCEL</button> :
                    <button className={"add-button inline"} onClick={this.handleAddButton.bind(this)}>ADD</button> }

                {this.state.showAddIncome ?
                    <form onSubmit={this.handleAddIncome.bind(this)}>
                        <div className={"addIncomeForm"}>
                            Name: <input id="incomeName" type={"text"} onChange={this.handleAddIncomeNameChange.bind(this)}></input>

                            Income Type:
                            <select ref="income-type" onChange={this.handleIncomeTypeChange.bind(this)}>
                                <option selected value={"default"}>Select One</option>
                                <option value={"passive"}>Passive</option>
                                <option value={"active"}>Active</option>
                                <option value={"portfolio"}>Portfolio</option>
                            </select>
                            {this.state.addIncomeType === 'passive' ? <PassiveForm ref={"passiveForm"} addIncome={this.handleAddIncome.bind(this)} /> : null}
                            {this.state.addIncomeType === 'active' ? <ActiveForm ref={"activeForm"} addIncome={this.handleAddIncome.bind(this)} /> : null}
                            {this.state.addIncomeType === 'portfolio' ? <PortfolioForm ref={"portfolioForm"} addIncome={this.handleAddIncome.bind(this)} /> : null}

                        </div>
                        <input type={'submit'} value={"Add Income!"} />
                    </form> : null}
            </div>
        );
    }
}

export default Income;
