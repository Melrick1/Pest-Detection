/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './App.jsx'
import SignIn from './components/Authentication/SignIn.jsx';
import Register from './components/Authentication/SignUp.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<App />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/Sign-up" element={<Register />} />
    </Routes>
  </BrowserRouter>,
)
