import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/App';
import Income from './pages/Income';
import Expenses from './pages/Expenses';
import Overview from './pages/Overview';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import registerServiceWorker from './registerServiceWorker';

import{
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <div id={"header"}>
                <Header title={"This is main page"}/>
            </div>
            <div id="content">
                <Route exact path="/" component={App}/>
                <Route path="/overview" component={Overview}/>
                <Route path="/income" component={Income}/>
                <Route path="/expenses" component={Expenses}/>
            </div>
            <div id={"footer"}>
                <Footer/>
            </div>
        </div>
    </Router>,
document.getElementById('root'));

registerServiceWorker();
