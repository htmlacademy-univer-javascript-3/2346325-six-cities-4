import React from 'react';
import ReactDOM from 'react-dom/client';
import { offers } from './mocks/offers';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const offerCardNumber = 5;

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
    />
  </React.StrictMode>
);
