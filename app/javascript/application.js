// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from 'react-redux';
import App from './App'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
);

