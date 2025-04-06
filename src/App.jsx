import React, { useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Aboutus from './Aboutus'
import Contact from './Contact'
import DisplayCards from './DisplayCards'
import ViewCard from './ViewCard'


function App() {
  const[card,setCard]=useState([]);
  return (
    <>
   
      <BrowserRouter>
  <Navbar card={card}/>
  <Routes>
    <Route path='/Navbar' element={<Navbar/>}></Route>
    <Route path='/Homepage' element={<Homepage/>}></Route>
    <Route path='/Aboutus' element={<Aboutus/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/DisplayCards' element={<DisplayCards card={card} setCard={setCard}/>}></Route>
    <Route path='/ViewCard' element={<ViewCard card={card} setCard={setCard}/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
    
  
  )
}

export default App
