import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.render(
  <GoogleOAuthProvider clientId="228238216412-ma2sj7gc5kcq0ne861jor12j27t7qpl6.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
 </GoogleOAuthProvider>,
  document.getElementById('root')
);
