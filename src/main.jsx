import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Context.Provider>
)
