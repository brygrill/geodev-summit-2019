import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
