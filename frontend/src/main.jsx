import React from 'react'
import ReactDOM from 'react-dom/client';
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThirdwebProvider supportedChains={[Sepolia]}>
    <App />
  </ThirdwebProvider>
  </React.StrictMode>,
)
