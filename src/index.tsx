import React from 'react';
import ReactDOM from 'react-dom/client';
//import { offers } from './mocks/offers';
import App from './app';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const offerCardNumber = 5;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
