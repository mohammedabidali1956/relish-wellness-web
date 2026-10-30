
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeAnalytics } from './lib/analytics';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

initializeAnalytics();
hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
