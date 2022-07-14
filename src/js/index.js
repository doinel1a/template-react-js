import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import ContextProvider from './contexts/ContextProvider';

import Header from './components/Header';
import App from './App';
import Footer from './components/Footer';

import '../css/style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <ContextProvider>
                <Header />
                <App />
                <Footer />
            </ContextProvider>
        </Router>
    </React.StrictMode>
);
