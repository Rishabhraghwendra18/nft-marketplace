import React from 'react'
import ReactDOM from 'react-dom/client';
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx'
import { ThemeProvider,createTheme } from '@mui/material';
import './index.css'

const muiTheme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThirdwebProvider supportedChains={[Sepolia]}>
    <ThemeProvider theme={muiTheme}>
    <App />
    </ThemeProvider>
  </ThirdwebProvider>
  </React.StrictMode>,
)
