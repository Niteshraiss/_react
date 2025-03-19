import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Profile from './pages/Profile'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/index' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
