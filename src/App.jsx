import './App.css'
import { Gallery } from './Components/Gallery/Gallery'
import { Home } from './Components/Home/Home'
import { Journey } from './Components/Journey/Journey'
import { Navbar } from './Components/Navbar/Navbar'
import {  BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='text-slate-300 font-indie relative'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/journey' element={<Journey/>}/>
        </Routes>   
      </BrowserRouter>
    </div>
  )
}

export default App
