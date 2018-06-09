import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></ Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
