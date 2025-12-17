import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './components/context/userContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)


//!                       main--> App.jsx--> ContextProvider -->Chlid