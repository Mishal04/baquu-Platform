import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './i18n/i18n'; // must be imported before App so i18n is initialised first
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
