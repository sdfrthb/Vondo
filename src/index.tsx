import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css';
import './ui/fonts/fonts.css'
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';
// import App from './App';

const root = ReactDOM.createRoot((document.getElementById('root')!));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);

