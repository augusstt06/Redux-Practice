import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import {createStore} from "redux";
import rootReducer from "./module";
import {Provider} from "react-redux";

const store = createStore(rootReducer)
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  ,document.getElementById('root')
);

reportWebVitals();
