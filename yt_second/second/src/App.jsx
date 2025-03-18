import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Navigation />
=======
      <Navigation/>
>>>>>>> cb75d3519d25e094614b187ef392ab230b9a7105
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
