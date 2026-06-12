import { StrictMode, } from 'react'
import { createRoot, } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importation des polices depuis node_modules

import '@fontsource/black-ops-one';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/300-italic.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);