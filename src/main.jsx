import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HelmetProvider } from "react-helmet-async";
import './index.css';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
         <App />
       </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

