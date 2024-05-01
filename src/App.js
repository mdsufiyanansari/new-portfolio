import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Navbar from './component/Navbar';
import Counter from './app/Counter';
import Calculator from './app/Calculator';
import Clock from './app/Clock';
import Temperature from './app/Temperature';
import { useLocation } from 'react-router-dom';

import Footer from './component/Footer';



const App = () => {
const route=useLocation();
  console.log(route.pathname)

  return (
    
<>
    
<Navbar/>

    <Routes>

    <Route path="/counter" element={<Counter/>}></Route>
    <Route path="/calculator" element={<Calculator/>}></Route>
    <Route path="/clock" element={<Clock/>}></Route>
    <Route path="/temperature" element={<Temperature/>}></Route>
   
    </Routes>
    

  {route.pathname!="/counter"  && (<>
  {route.pathname!="/calculator" && (<>
  {route.pathname!="/clock" && (<>
  {route.pathname!="/temperature" && (<>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  
    </>)}
  </>)}
   </>)}
   </>)}
    
   
    
</>
  
  )
}

export default App