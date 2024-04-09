import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/index.tsx';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
