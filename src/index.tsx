import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import './index.css';
import App from './App';
import theme from './utils/deepmerge';
import { FilterProvider } from './context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={theme}>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CssVarsProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
