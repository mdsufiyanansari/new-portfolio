import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './component/Navbar';
import Counter from './app/Counter';
import { useLocation } from 'react-router-dom';


// import Calculator from './app/Calculator';

const App = () => {
const route=useLocation();
  console.log(route.pathname)

  return (
    
<>
    
<Navbar/>

    <Routes>

    <Route path="/counter" element={<Counter/>}></Route>
   
    </Routes>

  {route.pathname!="/counter" && (<>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
  </>)}
   
    
   
    
</>
  
  )
}

export default App