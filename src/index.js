import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './services/redux/Store';
import 'bootstrap/dist/css/bootstrap.css'; //disini import library
import './index.css';

const WrappedApp = () => {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  };

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

serviceWorker.unregister();
