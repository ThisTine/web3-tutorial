import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "./polyfill"
import UserContextProvider from './contexts/UserContext';

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
    <UserContextProvider>
    <ChakraProvider {...{theme}} >
    <App />
    </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>
);

