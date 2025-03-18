import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  return (
    <>
    <Product name="Laravel" price={4000}/>
    <Product name="Nitesh" price={9088}/>
    </>
  )
}

export default App
