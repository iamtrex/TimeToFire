import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Income from './pages/Income';
import registerServiceWorker from './registerServiceWorker';

import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Link class="btn-link-btn" to="/">Home</Link>
            <Link class="btn-link-btn" to="/income">Income</Link>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route path="/income" component={Income}/>
        </div>
    </Router>,
document.getElementById('root'));

registerServiceWorker();
