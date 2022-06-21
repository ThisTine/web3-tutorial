import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "./polyfill"
import UserContextProvider from './contexts/UserContext';
import EthereumContextProvider from './contexts/EthereumContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const config = {
  styles:{
    global: (props:any)=>({
      body:{
        bg: "gray.50"
      }
    })
  }
}

const theme = extendTheme({...config})
root.render(
  <React.StrictMode>
    <ChakraProvider {...{theme}} >
    <EthereumContextProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </EthereumContextProvider>
    </ChakraProvider>

  </React.StrictMode>
);

