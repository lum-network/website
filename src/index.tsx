import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as dotenv from 'dotenv';

import '@popperjs/core/dist/esm/popper';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles/_main.scss';

import './locales';

dotenv.config();

const canControlScrollRestoration = 'scrollRestoration' in window.history;

if (canControlScrollRestoration) {
    window.history.scrollRestoration = 'manual';
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
