import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import Login from "./components/loginComponent";
import Home from "./components/homeComponent";
import Reqister from "./components/registerComponent";
import ObjectDetails from "./components/objectDetailsComponent";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
