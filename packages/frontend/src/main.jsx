import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReviewApp } from './reviewers/components/ReviewApp';
import './styles.css';
import { purpleTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        <ReviewApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
