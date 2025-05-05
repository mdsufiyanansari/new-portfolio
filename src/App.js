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
import Task from './app/Task';
import Weather from './app/Weather';

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
    <Route path="/weather" element={<Weather/>}></Route>
    <Route path="/task" element={<Task/>}></Route>
    <Route path="/about" element={   <About/>}></Route>
    <Route path="/projects" element={    <Projects/>}></Route>
    <Route path="/skills" element={  <Skills/>}></Route>
    <Route path="/contact" element={ <Contact/>}></Route>
    <Route path="/" element={ <Home/>}></Route>
    
   
    </Routes>
    

  {route.pathname!="/counter"  && (<>
  {route.pathname!="/calculator" && (<>
  {route.pathname!="/clock" && (<>
  {route.pathname!="/temperature" && (<>
    {route.pathname!="/weather" && (<>
      {route.pathname!="/tsk" && (<>
        
 

  
   
    <Footer/>
  
  
    </>)}
    </>)}
    </>)}
  </>)}
   </>)}
   </>)}
    
   
    
</>
  
  )
}

export default App