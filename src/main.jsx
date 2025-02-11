import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importiamo React Query
import { HelmetProvider } from "react-helmet-async";
import './index.css';

// Creiamo un'istanza di QueryClient (gestisce cache e richieste API)
const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}> 
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

