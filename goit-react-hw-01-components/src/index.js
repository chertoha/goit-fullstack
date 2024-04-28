import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from './App';
import { theme } from './utils/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
