import React, { Component } from 'react';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router'

import reducers from '../reducer/index.js'
import  App from '../views/App.js'
import  Home from '../views/Home.js'
import  Another from '../views/Another.js'

const store = createStore(reducers);

export default class RouterIndex extends Component {
  render() {
    return ( 
        <Provider store={store}>
          <BrowserRouter>
            <App path="/App" component={App}>
              <Route path="/App/home" component={Home} />
              <Route path="/App/another" component={Another} />
            </App>
          </BrowserRouter>
        </Provider>
    )
  }
}
