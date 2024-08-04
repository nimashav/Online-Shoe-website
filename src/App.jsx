import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import FootWearDisplay from './components/FootWearDisplay/FootWearDisplay'


const App = () => {
  return(
  <div className='app'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/new' element={<FootWearDisplay/>} />
      </Routes>
    <Footer />
  </div>
  )
}

export default App