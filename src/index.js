import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

let deferredPromt;
window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();

    deferredPromt=e;

})

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

serviceWorker.register();
