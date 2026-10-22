
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
