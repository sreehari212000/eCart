import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/productContext';

import './index.css'
import { Provider } from 'react-redux';
import {store} from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Provider>
);
