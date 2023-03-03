import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Component
import App from './App';
// Styles
import './styles/index.css';
import './styles/components.css'
// Users
import UserContextProvider from './context/UserContext';
import ToggleContextProvider from './context/ToggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserContextProvider>
        <ToggleContextProvider>
          <App />
        </ToggleContextProvider>
      </UserContextProvider>
    </BrowserRouter>
);
