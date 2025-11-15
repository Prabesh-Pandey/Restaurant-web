import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast';

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/success" element={<h1>Success</h1>} />
      <Route path="/*" element={<h1>NotFound</h1>} />
    </Routes>
  </Router>
}

export default App