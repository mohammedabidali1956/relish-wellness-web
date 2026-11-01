
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { preloadRoute } from './lib/routeModules';
import './index.css';
import { initializeAnalytics } from './lib/analytics';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

initializeAnalytics();
const hydrateApplication = () => {
  hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
};

void preloadRoute(window.location.pathname)
  .catch((error) => {
    console.error('Unable to preload the current route before hydration.', error);
  })
  .then(hydrateApplication);
