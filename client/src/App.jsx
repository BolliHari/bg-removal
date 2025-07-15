import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import BuyCreadit from './pages/BuyCreadit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/results' element = {<Results />} />
        <Route path='/buy' element = {<BuyCreadit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
