import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

// axios.defaults.baseURL =  'http://localhost:3001'
export const serverOrigin = window.location.origin
console.log(serverOrigin)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
