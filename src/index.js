// @flow

import React from 'react';
import { render } from 'react-dom';
import Index from './pages/index';

import confucApp from  './reducers'
import { Provider }  from 'react-redux';
import { createStore } from 'redux';

let store = createStore(confucApp);
const rootElement = document.querySelector('#root');
if (rootElement) {
  render(
    <Provider store={store}>
      <Index />
    </Provider>,
  rootElement);
}
