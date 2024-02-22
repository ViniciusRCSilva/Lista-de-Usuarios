import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo.ts'
import './index.css'
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      <Toaster richColors />
    </ApolloProvider>
  </React.StrictMode>,
)
