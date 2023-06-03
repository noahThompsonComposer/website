import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import WorkPage from './pages/WorkPage'
import Download from './pages/Download'
import Error404 from './pages/Error404'

import './assets/css/App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:opus" element={<WorkPage />} />
        <Route path="/works/:opus/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}