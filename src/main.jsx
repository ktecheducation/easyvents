// import library
import React from 'react'
import ReactDOM from 'react-dom/client'

// import components
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from "./components/home/Home.jsx"
// import css
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
  <Home />
 <BrowserRouter>
   <App />
 </BrowserRouter>
 </>

)
