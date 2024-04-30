import React from 'react';
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import App from './App.jsx';
import './index.css';
import store from './sotore.jsx';
import {Provider}   from 'react-redux'; // Corrected import for the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
