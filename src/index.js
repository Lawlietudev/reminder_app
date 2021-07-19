import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reminders from './reducers';

const store = createStore(reminders);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
