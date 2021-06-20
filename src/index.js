import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './app/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Counter from './features/counter/Counter'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Counter /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
