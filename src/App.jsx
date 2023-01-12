import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar.jsx'
import FirstHero from './components/Hero/FirstHero'
import SecondHero from './components/Hero/SecondHero'
import ThirdHero  from './components/Hero/ThirdHero'
import FourthHero from './components/Hero/FourthHero'
import Footer from './components/Footer'
import {Route,Routes, useNavigate} from 'react-router-dom'
import Search from './components/Search'

function Body(){
  return <>
    <FirstHero/>
    <SecondHero/>
    <ThirdHero/>
    <FourthHero/>
    <Footer/>
  </>
}
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
       <Route path="/" element={<Body/>}/>
       <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  )
}

export default App
