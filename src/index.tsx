import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <App />
        </CssVarsProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
