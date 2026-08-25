/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initResurrectionWatchdog } from './utils/resurrection.ts';

// Initialize the Sovereign Resurrection Watchdog to prevent stale cache lockups
initResurrectionWatchdog();

// Only activate PWA service worker in production builds to keep development & preview resilient
if (import.meta.env.PROD) {
  registerSW({
    immediate: true,
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
